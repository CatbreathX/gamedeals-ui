import '@testing-library/jest-dom';
import { server } from 'mocks/api/server';

require('whatwg-fetch');

beforeAll(() => {
  server.listen({
    onUnhandledRequest: 'warn',
  });
});

afterEach(() => server.resetHandlers());

afterAll(() => server.close());
