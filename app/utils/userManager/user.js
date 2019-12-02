import { AUTH_TOKEN } from '../../constants/communication';

/**
 * Saves the user logged information.
 *
 * @param {Object} data Objcet with user logged information.
 */
const saveUserData = async data => {
  const { token, user } = data.login;
  localStorage.setItem(AUTH_TOKEN, token);
  localStorage.setItem('userName', user.name);
  localStorage.setItem('userEmail', user.email);
};

export default saveUserData;
