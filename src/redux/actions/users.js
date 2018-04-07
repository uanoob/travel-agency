import axios from 'axios';

import { GET_USERS } from './types';

export const getUsers = () => {
  const request = axios.get('/api/users').then(response => response.data);
  return {
    type: GET_USERS,
    payload: request,
  };
};

export const deleteUser = () => {};
