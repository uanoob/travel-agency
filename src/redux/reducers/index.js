import { combineReducers } from 'redux';

import tours from './tours';
import users from './users';

const rootReducer = combineReducers({ tours, users });

export default rootReducer;
