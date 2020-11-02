import actions from './index';
import types from '~/store/types/search';

describe('actions', () => {
  it('should create an action to sucess item', () => {
    const payload = {
      categories: ['a', 'b'],
      items: [{
        id: 1,
        title: 'title test',
        description: 'description test',
        picture: 'blah.png',
        price: {
          amount: 10,
          decimals: 0,
        },
      }],
    };

    const expectedAction = {
      type: types.FETCH_SEARCH_SUCCESS,
      payload,
    };
    expect(actions.getProductsSuccess(payload)).toEqual(expectedAction);
  });

  it('should create an action to pending Search', () => {
    const expectedAction = {
      type: types.FETCH_SEARCH_PENDING,
    };
    expect(actions.getProductsPending()).toEqual(expectedAction);
  });

  it('should create an action to error Search', () => {
    const expectedAction = {
      type: types.FETCH_SEARCH_ERROR,
    };
    expect(actions.getProductsError()).toEqual(expectedAction);
  });
});
