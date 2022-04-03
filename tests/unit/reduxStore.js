import { combineReducers, configureStore } from '@reduxjs/toolkit';

export const setupApiStore = (api, extrareducers) => {
  const getStore = () => configureStore({
    reducer: combineReducers({
      [api.reducerPath]: api.reducer,
      ...extrareducers,
    }),
    middleware: (gdm) => gdm({
      serializableCheck: true,
      immutableCheck: false,
    })
      .concat(api.middleware),
  });

  const initialStore = getStore();
  const refObj = {
    api,
    store: initialStore,
  };
  return refObj;
};
