import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { gameDealApi } from 'services/gamedealapi';

export const store = configureStore({
  reducer: {
    [gameDealApi.reducerPath]: gameDealApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(gameDealApi.middleware),
});

setupListeners(store.dispatch);
