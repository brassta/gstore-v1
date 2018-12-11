import { API_URL } from 'src/constants';

import Http from './http';
import { requestInterceptors, responseInterceptors } from './interceptors';

const http = new Http(API_URL);

requestInterceptors.forEach(interceptor => {
  http.attachRequestInterceptor(interceptor);
});

responseInterceptors.forEach(interceptor => {
  http.attachResponseInterceptor(interceptor);
});

export default http;
