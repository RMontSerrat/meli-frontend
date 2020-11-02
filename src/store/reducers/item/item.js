import { itemTypes } from '~/store/types';

const initialState = {
  loading: false,
  error: false,
  item: {
    id: null,
    title: null,
    description: null,
    picture: null,
    price: {
      amount: 0,
      decimals: 0,
    },
    condition: null,
    sold_quantity: 0,
    free_shipping: false,
  },
};

const item = (state = initialState, action) => {
  switch (action.type) {
    case itemTypes.FETCH_ITEM_SUCCESS:
      return {
        ...state,
        item: action.payload,
        error: false,
        loading: false,
      };
    case itemTypes.FETCH_ITEM_PENDING:
      return {
        ...state,
        loading: true,
      };
    case itemTypes.FETCH_ITEM_ERROR:
      return {
        ...state,
        error: true,
      };
    case itemTypes.CLEAR_ITEM:
      return initialState;
    default:
      return state;
  }
};

export default item;
