import axios from 'axios';

import { GET_TOURS, GET_TOUR } from './types';

export const getTours = (limit = 5, start = 0, order = 'asc', list = '') => {
  const request = axios
    .get(`/api/tours?limit=${limit}&skip=${start}&order=${order}`)
    .then((response) => {
      if (list) {
        return [...list, ...response.data];
      }
      return response.data;
    });

  return {
    type: GET_TOURS,
    payload: request,
  };
};

export const getTour = (id) => {
  const request = axios(`/api/gettour?id=${id}`).then(response => response.data);
  return {
    type: GET_TOUR,
    payload: request,
  };
};
