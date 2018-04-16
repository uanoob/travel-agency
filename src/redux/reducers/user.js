import { GET_USERS, LOGIN_WITH_GOOGLE } from '../actions/types';

export default function (state = {}, action) {
  switch (action.type) {
    case GET_USERS:
      return { ...state, list: action.payload };
    case LOGIN_WITH_GOOGLE:
      return { ...state, user: action.payload };
    default:
      return state;
  }
}
