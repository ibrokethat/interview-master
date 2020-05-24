import React from 'react';
import { renderComponent } from '../../../../test/utils';
import Products from './Products';
import { useDataLoader } from './use-data-loader';
jest.mock('./use-data-loader');

describe('components/feature/Products/Products', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('calls the use data loader hook', () => {
    useDataLoader.mockReturnValue([]);
    renderComponent(<Products />);
    expect(useDataLoader).toHaveBeenCalled();
  });

  test('renders without a list of products', () => {
    useDataLoader.mockReturnValue(null);
    const { container } = renderComponent(<Products />);
    expect(container.querySelector('.products').children.length).toEqual(0);
  });

  test('renders with an emtpy list of products', () => {
    useDataLoader.mockReturnValue([]);
    const { container } = renderComponent(<Products />);
    expect(container.querySelector('.products').children.length).toEqual(0);
  });

  test('renders a list of products', () => {
    useDataLoader.mockReturnValue([{id: 1}, {id: 2}, {id: 3}]);
    const { container } = renderComponent(<Products />);
    expect(container.querySelector('.products').children.length).toEqual(3);
  });

});
