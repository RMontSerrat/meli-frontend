import actionTypes from '~/store/types/item';

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
    case actionTypes.FETCH_ITEM_SUCCESS:
      return {
        ...state,
        item: action.payload,
        error: false,
        loading: false,
      };
    case actionTypes.FETCH_ITEM_PENDING:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.FETCH_ITEM_ERROR:
      return {
        ...state,
        error: true,
      };
    case actionTypes.CLEAR_ITEM:
      return initialState;
    default:
      return state;
  }
};

export default item;
