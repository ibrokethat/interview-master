import { useState as useStateMock } from 'react';
import {renderHook, act} from '../../../../test/utils';
import { useRating } from './use-rating';

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useState: jest.fn(),
}));

describe('components/common/Rating/useRating', () => {
    let action;
    let result;
    let setState;

    beforeEach(() => {
      setState = jest.fn();
      useStateMock.mockImplementation(init => [init, setState]); 
      action = jest.fn().mockReturnValue({type: 'ACTION'});

      ({result} = renderHook(() => useRating(1, 3, action)));
    });

    test('intial setup returns api', () => {
        const {onClick, onMouseOver, onMouseOut} = result.current;

        expect(onClick).toBeInstanceOf(Function);
        expect(onMouseOver).toBeInstanceOf(Function);
        expect(onMouseOut).toBeInstanceOf(Function);
    });

    test('onClick dispatches new rating', () => {
        act(() => result.current.onClick({
            currentTarget: {dataset: {rating: 5}},
        }));
        expect(setState).toHaveBeenCalledWith(5);
        expect(action).toHaveBeenCalledWith(1, 5);
    });

    test('onMouseOver dispatches rating', () => {
        act(() => result.current.onMouseOver({
            currentTarget: {dataset: {rating: 5}},
        }));
        expect(action).toHaveBeenCalledWith(1, 5);
    });

    test('onMouseOut dispatches initial rating', () => {
        act(() => result.current.onMouseOut({
            currentTarget: {dataset: {rating: 5}},
        }));
        expect(action).toHaveBeenCalledWith(1, 3);
    });

    test('onClick does nothing if caled with no event or event currentTarget', () => {
        act(() => result.current.onClick({}));
        expect(setState).not.toHaveBeenCalled();
        expect(action).not.toHaveBeenCalled();
    });

    test('onMouseOver does nothing if caled with no event or event currentTarget', () => {
      act(() => result.current.onMouseOver({}));
      expect(action).not.toHaveBeenCalled();
    });

    test('onMouseOut does nothing if caled with no event or event currentTarget', () => {
      act(() => result.current.onMouseOut({}));
      expect(action).not.toHaveBeenCalled();
    });
  });
