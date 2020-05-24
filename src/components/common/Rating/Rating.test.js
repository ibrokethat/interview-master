import React from 'react';
import { renderComponent, fireEvent } from '../../../../test/utils';
import Rating from './Rating';
import { useRating } from './use-rating';
jest.mock('./use-rating');

describe('components/common/Rating/Rating', () => {
  describe('interactivity', () => {
    const item = {
      id: 1,
      rating: 3
    };
    const action = 1;
    const onClick = jest.fn();
    const onMouseOver = jest.fn();
    const onMouseOut = jest.fn();

    beforeEach(() => {
      useRating.mockReturnValue({
        onClick,
        onMouseOver,
        onMouseOut
      });
    });

    afterEach(() => {
      jest.clearAllMocks();
    });

    test('calls the use rating hook', () => {
      renderComponent(<Rating {...item} action={action} />);
      expect(useRating).toHaveBeenCalledWith(item.id, item.rating, action);
    });

    test('calls the on click handler', () => {
      const { container } = renderComponent(<Rating {...item} action={action} />);
      fireEvent.click(container.querySelector('[data-rating="5"]'));
      expect(onClick).toHaveBeenCalled();
    });

    test('calls the on mouse over handler', () => {
      const { container } = renderComponent(<Rating {...item} action={action} />);
      fireEvent.mouseOver(container.querySelector('[data-rating="5"]'));
      expect(onMouseOver).toHaveBeenCalled();
    });

    test('calls the on mouse out handler', () => {
      const { container } = renderComponent(<Rating {...item} action={action} />);
      fireEvent.mouseOut(container.querySelector('[data-rating="5"]'));
      expect(onMouseOut).toHaveBeenCalled();
    });

  });

  describe('render', () => {

    (Array.of(1, 2, 3, 4, 5)).forEach((rating) => {
      test(`renders a rating of (${rating})`, () => {
        const item = {id: 1, rating};
        const action = 1;
        const { container } = renderComponent(<Rating {...item} action={action} />);
        expect(container.querySelectorAll('.rating-pip').length).toEqual(5);
        expect(container.querySelectorAll('.active').length).toEqual(rating);
      });
    })
  });
});
