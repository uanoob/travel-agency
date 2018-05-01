import axios from 'axios';

import {
  GET_TOURS,
  GET_TOUR,
  ADD_TOUR,
  CLEAR_NEW_TOUR,
  UPDATE_TOUR,
  DELETE_TOUR,
  CLEAR_TOUR,
} from './types';

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
  const request = axios.get(`/api/tours/${id}`).then(response => response.data);
  return {
    type: GET_TOUR,
    payload: request,
  };
};

export const addTour = (data) => {
  const request = axios.post('/api/tours/', data).then(response => response.data);
  return {
    type: ADD_TOUR,
    payload: request,
  };
};

export const clearNewTour = () => ({
  type: CLEAR_NEW_TOUR,
  payload: {},
});

export const updateTour = (id, data) => {
  const request = axios.post(`/api/tours/${id}`, data).then(response => response.data);
  return {
    type: UPDATE_TOUR,
    payload: request,
  };
};

export const deleteTour = (id) => {
  const request = axios.delete(`/api/tours/${id}`).then(response => response.data);
  return {
    type: DELETE_TOUR,
    payload: request,
  };
};

export const clearTour = () => ({
  type: CLEAR_TOUR,
  payload: {
    tour: null,
    updatetour: false,
    tourdeleted: false,
  },
});
