import { rest } from 'msw';
import { loadResponse } from 'unit/fixtures/responses';

const BASE_URL = 'https://www.cheapshark.com/api/1.0';

export const handlers = [
  rest.get(`${BASE_URL}/stores`, async (request, response, context) => {
    const json = loadResponse('stores/get_many_200.json');
    return response(context.json(json));
  }),

  rest.get(`${BASE_URL}/deals`, async (request, response, context) => {
    const pageNumber = Number(request.url.searchParams.get('pageNumber'));
    const totalPageCount = 2;
    let json = loadResponse('searchResults/get_many_page_1_200.json');

    if (pageNumber === 1) {
      json = loadResponse('searchResults/get_many_page_1_200.json');
    }

    if (pageNumber === 2) {
      json = loadResponse('searchResults/get_many_page_2_200.json');
    }

    return response(
      context.json(json),
      context.set('x-total-page-count', totalPageCount),
    );
  }),
];
