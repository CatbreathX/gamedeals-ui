import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { SearchCriteria } from 'pages/search/components/SearchCriteria';
import React from 'react';
import { gameDealApi } from 'services/gamedealapi';
import { mountWithStore } from 'unit/mount';
import { setupApiStore } from 'unit/reduxStore';

describe('SearchCriteria', () => {

  let mockStore;
  let mockHandleFormSubmission;

  beforeEach(async () => {
    jest.resetAllMocks();
    mockStore = setupApiStore(gameDealApi);
    mockHandleFormSubmission = jest.fn();

    await mountWithStore(<SearchCriteria handleFormSubmission={mockHandleFormSubmission} />,
      mockStore.store,
    );
  });

  afterEach(() => {
    mockStore.store.dispatch(gameDealApi.util.resetApiState());
  });

  test('can populate and search all filters', async () => {
    await populateSearchCriteria();

    const searchButton = screen.getByRole('button', { name: /search/i });
    await userEvent.click(searchButton);

    await waitFor(() => {
      const params = {
        'exactTitle': true,
        'gameRatingFilter': '50',
        'gameTitle': 'Elite Dangerous',
        'store': '1',
      };

      expect(mockHandleFormSubmission).toBeCalledWith(params);
    });
  });

  test('when user clicks Clear button, all fields will be cleared', async() => {
    await populateSearchCriteria();

    const searchButton = screen.getByRole('button', { name: /clear/i });
    await userEvent.click(searchButton);

    expect(screen.getByRole('combobox', {  name: /filter store/i})).toHaveDisplayValue('')
    expect(screen.getByRole('button', {  name: /rating/i}).textContent).toEqual('​')
    expect(screen.getByRole('textbox', {  name: /game title/i})).toHaveDisplayValue('')
    expect(screen.getByRole('checkbox', {  name: /exact match/i})).not.toBeChecked()
  });

});

async function populateSearchCriteria() {
  const storeFilter = await screen.findByRole('combobox', { name: /filter store/i });
  userEvent.click(storeFilter);
  userEvent.type(storeFilter, 'Steam{arrowdown}{enter}');

  const rating = screen.getByRole('button', { name: /rating/i });
  userEvent.type(rating, '5{enter}');

  const gameTitle = screen.getByRole('textbox', { name: /game title/i });
  userEvent.type(gameTitle, 'Elite Dangerous');

  const exactMatch = screen.getByRole('checkbox', { name: /exact match/i });
  userEvent.click(exactMatch);
}
