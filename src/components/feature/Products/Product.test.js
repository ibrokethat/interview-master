import React from 'react';
import { renderComponent } from '../../../../test/utils';
import Product from './Product';

describe('components/feature/Products/Product', () => {
  const product = {
    id: 1,
    title: 'A product',
    description: 'A very short description'
  };

  let container;

  beforeEach(() => {
    ({ container } = renderComponent(<Product product={product} />))  ;
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('renders the product title', () => {
    expect(container.querySelector('.product h2').innerHTML).toEqual(product.title);
  });

  test('renders the product description', () => {
    expect(container.querySelector('.product p').innerHTML).toEqual(product.description);
  });

  test('renders the product rating', () => {
    expect(container.querySelector('.product').children.length).toEqual(3);
  });

});
