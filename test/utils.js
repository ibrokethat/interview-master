import React from "react";
import { render, fireEvent } from '@testing-library/react';
import { renderHook as rHook, act } from '@testing-library/react-hooks';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

export function renderComponent(component, store = createStore(() => [], {})) {
  return render(
    <Provider store={ store }>
      { component }
    </Provider>
  );
}


export function renderHook(hook, store = createStore(() => [], {})) {
  const wrapper = ({ children }) => (
    <Provider store={store}>{ children }</Provider>
  );

  return rHook(hook, { wrapper })
}

export {act, fireEvent};
