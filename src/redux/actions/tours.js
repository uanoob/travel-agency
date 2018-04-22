import axios from 'axios';

import {
  GET_TOURS,
  GET_TOUR,
  ADD_TOUR,
  CLEAR_NEW_TOUR,
  UPDATE_TOUR,
  DELETE_TOUR,
  CLEAR_TOUR,
  UPLOAD_FILE,
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
  const request = axios(`/api/gettour?id=${id}`).then(response => response.data);
  return {
    type: GET_TOUR,
    payload: request,
  };
};

export const addTour = (tour) => {
  const request = axios.post('/api/tour', tour).then(response => response.data);
  return {
    type: ADD_TOUR,
    payload: request,
  };
};

export const clearNewTour = () => ({
  type: CLEAR_NEW_TOUR,
  payload: {},
});

export const updateTour = (data) => {
  const request = axios.post('/api/tour_update', data).then(response => response.data);
  return {
    type: UPDATE_TOUR,
    payload: request,
  };
};

export const deleteTour = (id) => {
  const request = axios.delete(`/api/tour_delete?id=${id}`).then(response => response.data);
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
    postdeleted: false,
  },
});

export const uploadFile = (data) => {
  const formdata = new FormData();
  formdata.append('file', data);
  const request = axios.post('/api/upload', formdata).then(response => response.data);
  return {
    type: UPLOAD_FILE,
    payload: request,
  };
};
