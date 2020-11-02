import { combineReducers } from 'redux';
import search from './search/search';
import item from './item/item';

const rootReducer = combineReducers({ search, item });

export default rootReducer;
