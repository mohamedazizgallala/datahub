import Base from 'ember-simple-auth/authenticators/base';
import { IAuthenticateResponse, IAuthenticationData } from 'wherehows-web/typings/api/authentication/user';
import { postJSON } from 'wherehows-web/utils/api/fetcher';

export default Base.extend({
  /**
   * Implements Base authenticator's authenticate method.
   *   Resolves with data object returned from successful request.
   * @param {string} username username to authenticate with
   * @param {string} password matching candidate password for username
   * @return {Promise<IAuthenticationData>}
   */
  authenticate: async (username: string, password: string): Promise<IAuthenticationData> => {
    const { data } = await postJSON<IAuthenticateResponse>({
      url: '/authenticate',
      data: { username, password }
    });

    return { ...data };
  },

  /**
   * Implements the authenticator's restore method
   * @return {Promise<void>}
   */
  restore: () => Promise.resolve()
});
