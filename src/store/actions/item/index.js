import actionTypes from '~/store/types/item';

const {
  FETCH_ITEM_PENDING, FETCH_ITEM_SUCCESS, FETCH_ITEM_ERROR, CLEAR_ITEM,
} = actionTypes;

const getItemSuccess = (payload) => ({ type: FETCH_ITEM_SUCCESS, payload });
const getItemPending = () => ({ type: FETCH_ITEM_PENDING });
const getItemError = () => ({ type: FETCH_ITEM_ERROR });
const clearItem = () => ({ type: CLEAR_ITEM });

export default {
  getItemSuccess,
  getItemPending,
  getItemError,
  clearItem,
};
