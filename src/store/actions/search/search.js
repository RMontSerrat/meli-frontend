import { searchTypes } from '~/store/types';

const {
  FETCH_SEARCH_PENDING, FETCH_SEARCH_SUCCESS, FETCH_SEARCH_ERROR, CLEAR_SEARCH,
} = searchTypes;

const getProductsSuccess = (payload) => ({ type: FETCH_SEARCH_SUCCESS, payload });
const getProductsPending = () => ({ type: FETCH_SEARCH_PENDING });
const getProductsError = () => ({ type: FETCH_SEARCH_ERROR });
const clearSearch = () => ({ type: CLEAR_SEARCH });

export default {
  getProductsSuccess,
  getProductsPending,
  getProductsError,
  clearSearch,
};
