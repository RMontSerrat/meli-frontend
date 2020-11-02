import { useMemo } from 'react';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './reducers';

let store;

const initStore = (initialState) => createStore(
  reducers,
  initialState,
  composeWithDevTools(),
);

export const initializeStore = (preloadedState) => {
  let currentStore = store ?? initStore(preloadedState);

  // After navigating to a page with an initial Redux state, merge that state
  // with the current state in the store, and create a new store
  if (preloadedState && store) {
    currentStore = initStore({
      ...store.getState(),
      ...preloadedState,
    });
    // Reset the current store
    store = undefined;
  }

  // For SSG and SSR always create a new store
  if (typeof window === 'undefined') return currentStore;
  // Create the store once in the client
  if (!store) store = currentStore;

  return currentStore;
};

export const useStore = (initialState) => {
  const currentStore = useMemo(() => initializeStore(initialState), [initialState]);
  return currentStore;
};
