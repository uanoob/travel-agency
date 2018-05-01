import axios from 'axios';

import { LOGIN_USER, USER_AUTH, GET_USERS, USER_REGISTER } from './types';

export const loginUser = ({ email, password }) => {
  const request = axios.post('/api/login', { email, password }).then(response => response.data);
  return {
    type: LOGIN_USER,
    payload: request,
  };
};

export const auth = () => {
  const request = axios.get('/api/auth').then(response => response.data);
  return {
    type: USER_AUTH,
    payload: request,
  };
};

export const getUsers = () => {
  const request = axios.get('/api/users').then(response => response.data);
  return {
    type: GET_USERS,
    payload: request,
  };
};

export const userRegister = (user) => {
  const request = axios.post('/api/register', user).then(response => response.data);
  return {
    type: USER_REGISTER,
    payload: request,
  };
};
