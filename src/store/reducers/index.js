import { combineReducers } from 'redux';
import search from './search';
import item from './item';

const rootReducer = combineReducers({ search, item });

export default rootReducer;
