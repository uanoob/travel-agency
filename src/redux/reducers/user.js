import { LOGIN_USER, USER_AUTH, GET_USERS, USER_REGISTER } from '../actions/types';

export default function (state = {}, action) {
  switch (action.type) {
    case LOGIN_USER:
      return { ...state, login: action.payload };
    case USER_AUTH:
      return { ...state, login: action.payload };
    case GET_USERS:
      return { ...state, users: action.payload };
    case USER_REGISTER:
      return {
        ...state,
        register: action.payload.success,
        users: action.payload.users,
      };
    default:
      return state;
  }
}
