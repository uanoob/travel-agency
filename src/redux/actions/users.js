import axios from 'axios';

import { GET_USERS, LOGIN_WITH_GOOGLE } from './types';

export const getUsers = () => {
  const request = axios.get('/api/users').then(response => response.data);
  return {
    type: GET_USERS,
    payload: request,
  };
};

export const loginWithGoogle = () => {
  const request = axios.get('/auth/google').then(response => response.data);

  return {
    type: LOGIN_WITH_GOOGLE,
    payload: request,
  };
};

export const deleteUser = () => {};
