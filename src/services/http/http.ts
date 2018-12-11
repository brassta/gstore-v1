import { HttpRequestInterceptor, HttpResponseInterceptor } from './types';

interface HttpInterceptors {
  request: HttpRequestInterceptor[];
  response: HttpResponseInterceptor[];
}

const enum RequestTypes {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  PATCH = 'PATCH',
  DELETE = 'DELETE',
}

const DEFAULT_REQUEST_CONFIG: RequestInit = {
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
  },
};

class Http {
  private interceptors: HttpInterceptors = {
    request: [],
    response: [],
  };

  constructor(
    private baseURL: string = '',
    private requestTimeoutSeconds: number = 60
  ) {}

  public get(url: string, params?: object) {
    return this.performRequest(RequestTypes.GET, url, params);
  }

  public post(url: string, data?: object) {
    return this.performRequest(RequestTypes.POST, url, data);
  }

  public put(url: string, data?: object) {
    return this.performRequest(RequestTypes.PUT, url, data);
  }

  public patch(url: string, data?: object) {
    return this.performRequest(RequestTypes.PATCH, url, data);
  }

  public delete(url: string) {
    return this.performRequest(RequestTypes.PATCH, url);
  }

  public async fetch(
    requestUrl: string,
    fetchOptions: RequestInit
  ): Promise<Response> {
    const response = await fetch(requestUrl.toString(), fetchOptions);

    if (this.isStatusOK(response)) {
      return Promise.resolve(response);
    } else {
      return Promise.reject(response);
    }
  }

  public attachRequestInterceptor(interceptor: HttpRequestInterceptor) {
    this.interceptors.request.unshift(interceptor);
  }

  public attachResponseInterceptor(interceptor: HttpResponseInterceptor) {
    this.interceptors.response.unshift(interceptor);
  }

  public fetchWithIntercept(...args: any[]) {
    if (args[1].signal.aborted) {
      return null;
    }

    return this.interceptors.request.length || this.interceptors.response.length
      ? this.intercept.apply(this, args)
      : this.fetch.apply(this, args);
  }

  private intercept<Promise>(...args: any[]) {
    let interceptedRequest = Promise.resolve(args);

    this.interceptors.request.forEach((interceptor: HttpRequestInterceptor) => {
      interceptedRequest = interceptedRequest.then(args =>
        interceptor.request.apply(interceptor, args)
      );
    });

    let interceptedResponse = interceptedRequest.then(args =>
      this.fetch.apply(this, args)
    );

    this.interceptors.response.forEach(
      (interceptor: HttpResponseInterceptor) => {
        interceptedResponse = interceptedResponse.then(
          res =>
            interceptor.response
              ? interceptor.response.call(interceptor, res, args)
              : res,
          err =>
            interceptor.responseError
              ? interceptor.responseError.call(interceptor, err, args)
              : err
        );
      }
    );

    return interceptedResponse;
  }

  private performRequest(type: string, url: string, data: object = {}) {

    const requestUrl: URL = new URL(
      url.indexOf('http') === 0 ? url : `${this.baseURL}${url}`
    );

    const controller = new AbortController();
    const signal = controller.signal;

    const fetchOptions: RequestInit = {
      ...DEFAULT_REQUEST_CONFIG,
      method: type,
      signal,
    };

    if (type === RequestTypes.POST) {
      fetchOptions.body = JSON.stringify(data);
    } else {
      Object.entries(data).forEach(([key, value]) => {
        requestUrl.searchParams.append(key, value);
      });
    }

    return new Promise(async (resolve, reject) => {
      const timeout = setTimeout(() => {
        reject({ message: 'Request timed-out' });

        controller.abort();
      }, this.requestTimeoutSeconds * 1000);

      try {
        const response = await this.fetchWithIntercept(
          requestUrl.toString(),
          fetchOptions
        );

        clearTimeout(timeout);

        // Don't process user-aborted requests
        if (response.name === 'AbortError') {
          return;
        }

        if (this.isStatusOK(response)) {
          resolve(this.getResponseBody(response));
        } else {
          reject(await this.formatResponseError(response));
        }
      } catch (error) {
        reject(await this.formatResponseError(error));
      }
    });
  }

  private async getResponseBody(response: Response) {
    const responseText = await response.text();

    // TODO@martins check headers instead of trying
    // response.headers.get('content-type').indexOf('application/json') > -1;
    try {
      return JSON.parse(responseText);
    } catch (err) {
      return responseText;
    }
  }

  private async formatResponseError(response: Response) {
    if (response.ok === undefined) {
      return {
        error: 'Fetch failed',
      };
    }

    const error = await this.getResponseBody(response);

    return {
      status: response.status,
      statusText: response.statusText,
      error,
    };
  }

  private isStatusOK(response: Response): boolean {
    return response.status >= 200 && response.status < 300;
  }
}

export default Http;
