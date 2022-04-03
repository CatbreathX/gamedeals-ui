import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { gameDealApi } from 'services/gamedealapi';

export const store = configureStore({
  reducer: {
    [gameDealApi.reducerPath]: gameDealApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(gameDealApi.middleware),
});

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch);
