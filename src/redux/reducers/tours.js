import {
  GET_TOUR,
  GET_TOURS,
  ADD_TOUR,
  CLEAR_NEW_TOUR,
  UPDATE_TOUR,
  DELETE_TOUR,
  CLEAR_TOUR,
} from '../actions/types';

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
    case UPDATE_TOUR:
      return {
        ...state,
        updatetour: action.payload.success,
        tour: action.payload.doc,
      };
    case DELETE_TOUR:
      return {
        ...state,
        tourdeleted: action.payload,
      };
    case CLEAR_TOUR:
      return {
        ...state,
        updatetour: action.payload.updatetour,
        tour: action.payload.tour,
        tourdeleted: action.payload.tourdeleted,
      };
    default:
      return state;
  }
}
