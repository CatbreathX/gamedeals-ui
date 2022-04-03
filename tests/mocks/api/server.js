import { handlers } from 'mocks/api/handlers';
import { setupServer } from 'msw/node';

export const server = setupServer(...handlers);
