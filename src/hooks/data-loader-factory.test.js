import {renderHook, act} from '../../test/utils';
import { dataLoaderFactory } from './data-loader-factory';

describe('hooks/data-loader-factory', () => {
    let result;
    let action;
    let selector;
    let useDataLoader;

    describe('no data loaded', () => {
      beforeAll(() => {
        action = jest.fn().mockReturnValue({type: 'ACTION'});
        selector = jest.fn().mockReturnValue(null);
        useDataLoader = dataLoaderFactory(action, selector);

        ({result} = renderHook(() => useDataLoader({ id: 10 })));
      });

      test('action is called', () => {
          expect(action).toHaveBeenCalledWith({ id: 10 });
      });

      test('selector is called', () => {
        expect(action).toHaveBeenCalled;
      });

      test('default empty array is returned', () => {
          expect(result.current).toEqual([]);
      });
    });

    describe('data is loaded', () => {
      beforeAll(() => {
        action = jest.fn().mockReturnValue({type: 'ACTION'});
        selector = jest.fn().mockReturnValue([1, 2, 3, 4, 5]);
        useDataLoader = dataLoaderFactory(action, selector);

        ({result} = renderHook(() => useDataLoader()));
      });

      test('action is called', () => {
        expect(action).toHaveBeenCalled;
      });

      test('selector is called', () => {
        expect(action).toHaveBeenCalled;
      });

      test('data bound to selector is returned ', () => {
        expect(result.current).toEqual([1, 2, 3, 4, 5]);
      });
    });

});
