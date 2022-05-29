import { gameDealApi } from 'services/gamedealapi';

export const clearApiCaches = mockStore => {
  mockStore.store.dispatch(gameDealApi.util.resetApiState());
};
