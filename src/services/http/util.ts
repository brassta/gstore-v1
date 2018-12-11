import { ACCOUNTS_URL, AUTH_COOKIE } from 'src/constants';
import cookie from 'src/services/cookie';
import logger from 'src/utilities/console';

export const redirectToLogin = () => {
  logger.log(`Session expired. Redirecting to ${ACCOUNTS_URL}`);
  // locally, we need to stay on the same page in order to set the cookie manually
  if (process.env.NODE_ENV !== 'development') {
    // just redirecting here because token is already invalid
    location.href = ACCOUNTS_URL;
  }
};

export const updateAuthHeaders = (headers: any) => {
  const authCookie = cookie.getJSON(AUTH_COOKIE);

  if (authCookie === null) {
    redirectToLogin();
    return;
  }

  return {
    ...headers,
    Authorization: `Bearer ${authCookie.accessToken}`,
  };
};
