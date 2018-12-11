/* tslint:disable:max-classes-per-file */

import cookie from 'src/services/cookie';
import {
  AUTH_COOKIE,
  ACCOUNTS_API_URL,
  REQUEST_RETRY_COUNT,
} from 'src/constants';
import logger from 'src/utilities/console';

import { HttpRequestInterceptor, HttpResponseInterceptor } from './types';
import { updateAuthHeaders, redirectToLogin } from './util';
import http from '.';

class AttachAuthHeader implements HttpRequestInterceptor {
  request(url: string, config: RequestInit) {
    const headers = updateAuthHeaders(config.headers);

    return [
      url,
      {
        ...config,
        headers,
      },
    ];
  }
}

class HandleUnauthorizedResponse implements HttpResponseInterceptor {
  isRefreshing: boolean = false;
  refreshSubscribers: any[] = [];

  subscribeTokenRefresh(callback: () => void) {
    this.refreshSubscribers.push(callback);
  }

  onRefreshed() {
    this.refreshSubscribers.map(callback => callback());
    this.refreshSubscribers = [];
  }

  async updateAccessToken() {
    cookie.remove(AUTH_COOKIE);

    try {
      const authCookie = cookie.getJSON(AUTH_COOKIE);
      const resp: any = await http.post(`${ACCOUNTS_API_URL}/token/refresh`, {
        refreshToken: authCookie.refreshToken,
      });
      logger.log('new auth data:', resp);
      cookie.setJSON(AUTH_COOKIE, resp);
      return true;
    } catch (e) {
      return false;
    }
  }

  responseError(response: Response, args: any[]) {
    if (response.status === 401) {
      logger.log('session expired');
      if (!this.isRefreshing) {
        this.isRefreshing = true;

        this.updateAccessToken()
          .then(() => {
            logger.log('token refreshed');
            this.isRefreshing = false;
            this.onRefreshed();
          })
          .catch(e => {
            logger.log('token refresh error', e);
            redirectToLogin();
          });
      }

      return new Promise(resolve => {
        this.subscribeTokenRefresh(() => {
          const [url, config] = args;
          logger.log(args);
          const headers = updateAuthHeaders(config.headers);
          resolve(http.fetch(url, { ...config, headers }));
        });
      });
    }

    return Promise.reject(response);
  }
}

class RetryErrorRequest implements HttpResponseInterceptor {
  retryMap = {};

  constructor(private retryTimes = 1) {}

  responseError(response: Response, args: any[]) {
    const retryCount = this.retryMap[response.url] || 0;

    if (retryCount >= this.retryTimes) {
      delete this.retryMap[response.url];

      return Promise.reject(response);
    }

    if (response.status >= 500) {
      this.retryMap[response.url] = retryCount + 1;

      return http.fetchWithIntercept(...args);
    }

    return Promise.reject(response);
  }
}

class HandleForbiddenResponse implements HttpResponseInterceptor {
  responseError(response: Response) {
    if (response.status === 403) {
      cookie.remove(AUTH_COOKIE);
      redirectToLogin();
    }

    return Promise.reject(response);
  }
}

export const requestInterceptors = [new AttachAuthHeader()];

export const responseInterceptors = [
  new HandleUnauthorizedResponse(),
  new RetryErrorRequest(REQUEST_RETRY_COUNT),
  new HandleForbiddenResponse(),
];
