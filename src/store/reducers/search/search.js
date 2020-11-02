import { searchTypes } from '~/store/types';

const initialState = {
  result: {
    categories: [],
    items: [],
  },
  loading: false,
  error: false,
};

const search = (state = initialState, action) => {
  switch (action.type) {
    case searchTypes.FETCH_SEARCH_SUCCESS:
      return {
        ...state,
        result: action.payload,
        loading: false,
        error: false,
      };
    case searchTypes.FETCH_SEARCH_PENDING:
      return {
        ...state,
        loading: true,
      };
    case searchTypes.FETCH_SEARCH_ERROR:
      return {
        ...state,
        error: true,
      };
    case searchTypes.CLEAR_SEARCH:
      return {
        ...state,
        result: {
          ...state.result,
          items: [],
        },
      };
    default:
      return state;
  }
};

export default search;
