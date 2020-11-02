import { actionTypes } from '~/store/actions/search';

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
    case actionTypes.FETCH_SEARCH_SUCCESS:
      return {
        ...state,
        result: action.payload,
        loading: false,
        error: false,
      };
    case actionTypes.FETCH_SEARCH_PENDING:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.FETCH_SEARCH_ERROR:
      return {
        ...state,
        error: true,
      };
    case actionTypes.CLEAR_SEARCH:
      return initialState;
    default:
      return state;
  }
};

export default search;
