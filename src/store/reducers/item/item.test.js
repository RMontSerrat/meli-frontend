import reducer from './item';
import { itemTypes } from '~/store/types';

const initialState = {
  loading: true,
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

describe('reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should handle FETCH_ITEM_PENDING', () => {
    expect(
      reducer({ ...initialState }, {
        type: itemTypes.FETCH_ITEM_PENDING,
      }),
    ).toEqual(
      {
        ...initialState,
        loading: true,
      },
    );
  });

  it('should handle FETCH_ITEM_SUCCESS', () => {
    const payload = { title: 'tenis adidas' };
    expect(
      reducer({ ...initialState }, {
        type: itemTypes.FETCH_ITEM_SUCCESS,
        payload,
      }),
    ).toEqual(
      {
        ...initialState,
        item: payload,
        loading: false,
      },
    );
  });

  it('should handle FETCH_ITEM_ERROR', () => {
    expect(
      reducer({ ...initialState }, {
        type: itemTypes.FETCH_ITEM_ERROR,
      }),
    ).toEqual(
      {
        ...initialState,
        error: true,
      },
    );
  });

  it('should handle CLEAR_ITEM', () => {
    expect(
      reducer({ ...initialState, item: { title: 'teste' } }, {
        type: itemTypes.CLEAR_ITEM,
      }),
    ).toEqual(initialState);
  });
});
