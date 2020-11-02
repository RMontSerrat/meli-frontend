import reducer from './index';
import types from '~/store/types/search';

const initialState = {
  result: {
    categories: [],
    items: [],
  },
  loading: false,
  error: false,
};

describe('reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should handle FETCH_SEARCH_PENDING', () => {
    expect(
      reducer({ ...initialState }, {
        type: types.FETCH_SEARCH_PENDING,
      }),
    ).toEqual(
      {
        ...initialState,
        loading: true,
      },
    );
  });

  it('should handle FETCH_SEARCH_SUCCESS', () => {
    const payload = {
      result: {
        categories: ['tenis'],
        items: [{
          title: 'tenis adidas',
        }],
      },
    };
    expect(
      reducer({ ...initialState }, {
        type: types.FETCH_SEARCH_SUCCESS,
        payload,
      }),
    ).toEqual(
      {
        ...initialState,
        result: payload,
        loading: false,
      },
    );
  });

  it('should handle FETCH_SEARCH_ERROR', () => {
    expect(
      reducer({ ...initialState }, {
        type: types.FETCH_SEARCH_ERROR,
      }),
    ).toEqual(
      {
        ...initialState,
        error: true,
      },
    );
  });

  it('should handle CLEAR_SEARCH', () => {
    const state = {
      ...initialState,
      result: {
        ...initialState.result,
        categories: ['tenis'],
      },
    };

    expect(
      reducer({ ...state }, {
        type: types.CLEAR_SEARCH,
      }),
    ).toEqual(
      {
        ...state,
        result: {
          ...state.result,
          items: [],
        },
      },
    );
  });
});
