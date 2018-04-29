import axios from 'axios';

import { LOGIN_USER, USER_AUTH, GET_USERS, USER_REGISTER } from './types';
import { BASE_URL } from '../../config';

axios.defaults.baseURL = BASE_URL;
// console.log('BASE_URL: ', axios.defaults.baseURL);

export const loginUser = ({ email, password }) => {
  console.log(email, password);
  const request = axios.post('/api/login', { email, password }).then(response => response.data);
  console.log(request);
  return {
    type: LOGIN_USER,
    payload: request,
  };
};

export const auth = () => {
  const request = axios.get('/api/auth').then(response => response.data);
  console.log('auth request: ', request);
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
