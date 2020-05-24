import {products as productsReducer} from './reducer';
import {rateProduct} from './actions';

describe('store/products/reducer/products', () => {
  let state;

  beforeEach(() => {
    state = {
      list: [{id: 1, rating: 3}, {id: 2}, {id: 3}]
    }
  });

  test('updates an already rated item with a new rating', () => {
    const {list} = productsReducer(state, rateProduct(1, 5));
    expect(list).toEqual([{id: 1, rating: 5}, {id: 2}, {id: 3}])
  });


  test('updates an unrated item with a rating', () => {
    const {list} = productsReducer(state, rateProduct(2, 5));
    expect(list).toEqual([{id: 1, rating: 3}, {id: 2, rating: 5}, {id: 3}])
  });

  test('returns unmodified state if item not found', () => {
    const {list} = productsReducer(state, rateProduct('unfound', 5));
    expect(list).toEqual([{id: 1, rating: 3}, {id: 2}, {id: 3}])
  });
})
