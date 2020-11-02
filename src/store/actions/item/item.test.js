import actions from './item';
import { itemTypes } from '~/store/types';

describe('actions', () => {
  it('should create an action to sucess item', () => {
    const payload = {
      id: 1,
      title: 'title test',
      description: 'description test',
      picture: 'blah.png',
      price: {
        amount: 10,
        decimals: 0,
      },
    };

    const expectedAction = {
      type: itemTypes.FETCH_ITEM_SUCCESS,
      payload,
    };
    expect(actions.getItemSuccess(payload)).toEqual(expectedAction);
  });

  it('should create an action to pending item', () => {
    const expectedAction = {
      type: itemTypes.FETCH_ITEM_PENDING,
    };
    expect(actions.getItemPending()).toEqual(expectedAction);
  });

  it('should create an action to error item', () => {
    const expectedAction = {
      type: itemTypes.FETCH_ITEM_ERROR,
    };
    expect(actions.getItemError()).toEqual(expectedAction);
  });
});
