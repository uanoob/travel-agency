import { GET_TOUR, GET_TOURS } from '../actions/types';

export default function (state = {}, action) {
  switch (action.type) {
    case GET_TOURS:
      return { ...state, list: action.payload };
    case GET_TOUR:
      return { ...state, tour: action.payload };
    default:
      return state;
  }
}
