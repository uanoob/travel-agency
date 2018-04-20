import { GET_TOUR, GET_TOURS, ADD_TOUR, CLEAR_NEW_TOUR } from '../actions/types';

export default function (state = {}, action) {
  switch (action.type) {
    case GET_TOURS:
      return { ...state, list: action.payload };
    case GET_TOUR:
      return { ...state, tour: action.payload };
    case ADD_TOUR:
      return { ...state, newtour: action.payload };
    case CLEAR_NEW_TOUR:
      return { ...state, newtour: action.payload };
    default:
      return state;
  }
}
