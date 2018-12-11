import * as Cookies from 'cookies-js';
import logger from 'src/utilities/console';

type CookieOptions = {
  path?: string;
  domain?: string | undefined;
  expires?: number | Date | undefined;
  secure?: boolean;
};

type CookieProps = {
  domain?: string | undefined;
};

export default class Cookie {
  defaultOptions: {
    domain?: string | undefined;
  };

  constructor({ domain }: CookieProps) {
    this.defaultOptions = {
      domain,
    };
  }

  get = (name: string) => Cookies.get(name);

  set = (name: string, value: any, options: CookieOptions = {}) =>
    Cookies.set(name, value, { ...this.defaultOptions, ...options });

  remove = (name: string, options: CookieOptions = {}) =>
    Cookies.expire(name, { ...this.defaultOptions, ...options });

  getJSON = (name: string) => {
    const cookie = this.get(name);
    let cookieJSON = null;

    if (cookie === undefined) {
      return cookieJSON;
    }

    try {
      cookieJSON = JSON.parse(cookie);
    } catch (e) {
      logger.warn(e);
    }

    return cookieJSON;
  };

  setJSON = (name: string, value: any, options?: CookieOptions) =>
    this.set(name, JSON.stringify(value), options);
}
