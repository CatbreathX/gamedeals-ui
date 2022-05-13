import { gameDealApi } from 'services/gamedealapi';
import { observeRequestStart, removeAllListeners } from 'unit/mswUtils';
import { setupApiStore } from 'unit/reduxStore';

describe('GameDealsApi', () => {
  let mockStore;

  beforeEach(() => {
    mockStore = setupApiStore(gameDealApi);
  });

  afterEach(() => {
    mockStore.store.dispatch(gameDealApi.util.resetApiState());
    removeAllListeners();
  });

  describe('getDeals', () => {
    describe('request query params population', () => {
      let requestCollector;

      beforeEach(() => {
        requestCollector = [];
        observeRequestStart(requestCollector);
      });
      test('should populate title', async () => {
        await mockStore.store.dispatch(gameDealApi.endpoints.getDeals.initiate({ title: 'elite dangerous' }));
        expect(requestCollector[0].url.search).toBe('?exact=0&title=elite%20dangerous');
      });

      test('should populate pageNumber', async () => {
        await mockStore.store.dispatch(gameDealApi.endpoints.getDeals.initiate({ pageNumber: 1 }));
        expect(requestCollector[0].url.search).toBe('?pageNumber=1');
      });

      test('should populate pageSize', async () => {
        await mockStore.store.dispatch(gameDealApi.endpoints.getDeals.initiate({ pageSize: 20 }));
        expect(requestCollector[0].url.search).toBe('?pageSize=20');
      });

      test('should populate storeId', async () => {
        await mockStore.store.dispatch(gameDealApi.endpoints.getDeals.initiate({ storeId: 1 }));
        expect(requestCollector[0].url.search).toBe('?storeID=1');
      });

      test('should populate exactTitle when title is present', async () => {
        await mockStore.store.dispatch(gameDealApi.endpoints.getDeals.initiate({
          exactTitle: 'true',
          title: 'elite',
        }));
        expect(requestCollector[0].url.search)
          .toBe('?exact=1&title=elite');
      });

      test('should ignore exactTitle when title is not present', async () => {
        await mockStore.store.dispatch(gameDealApi.endpoints.getDeals.initiate({ exactTitle: 'true' }));
        expect(requestCollector[0].url.search).toBe('');
      });

      test('should populate onSale', async () => {
        await mockStore.store.dispatch(gameDealApi.endpoints.getDeals.initiate({
          onSale: true,
        }));
        expect(requestCollector[0].url.search).toBe('?onSale=1');
      });

      test('should populate when multiple params used', async () => {
        await mockStore.store.dispatch(gameDealApi.endpoints.getDeals.initiate({
          storeId: 1,
          title: 'elite',
        }));
        expect(requestCollector[0].url.search).toBe('?exact=0&storeID=1&title=elite');
      });
    });
  });
});
