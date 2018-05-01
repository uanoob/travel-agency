import { combineReducers } from 'redux';

import tours from './tours';
import user from './user';

const rootReducer = combineReducers({ tours, user });

export default rootReducer;
