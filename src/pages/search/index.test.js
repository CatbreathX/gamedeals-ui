import { screen, waitForElementToBeRemoved, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Search } from 'pages/search/index';
import { gameDealApi } from 'services/gamedealapi';
import { mountWithStore } from 'unit/mount';
import { setupApiStore } from 'unit/reduxStore';

describe('index', () => {
  let mockStore;

  beforeEach(async () => {
    mockStore = setupApiStore(gameDealApi);
    await mountWithStore(<Search />, mockStore.store);
  });

  afterEach(() => {
    mockStore.store.dispatch(gameDealApi.util.resetApiState());
  });

  test('should render headers', async () => {
    const expectedHeaders = ['Game', 'Store', 'Sale Price', 'Normal Price', 'Metacritic Score', 'Steam Rating'];
    const actualHeaders = await screen.findAllByRole('columnheader');

    expect(actualHeaders).toHaveLength(expectedHeaders.length);

    actualHeaders.forEach((actualHeader, i) => {
      expect(actualHeader).toHaveTextContent(expectedHeaders[i]);
    });
  });

  test('should populate search results table', async () => {
    const actualRows = await screen.findAllByRole('row');
    expect(actualRows).toHaveLength(61);

    const expectedCells = ['Deponia', 'Voidu', '1.00', '9.99', '74', 'Very Positive'];
    const firstRow = screen.getByRole('row', { name: /deponia/i });
    const actualCells = within(firstRow).getAllByRole('cell');
    expect(actualCells).toHaveLength(expectedCells.length);

    actualCells.forEach((actualCell, i) => {
      expect(actualCell).toHaveTextContent(expectedCells[i]);
    });
  });

  test('should render pagination correctly', async () => {
    const paginations = await screen.findAllByRole('navigation');
    expect(paginations).toHaveLength(2);

    paginations.forEach((pagination) => {
      const rowText = within(pagination).getByText('Rows 1 to 60');
      expect(rowText).toBeInTheDocument();

      const nextPageButton = within(pagination).getByRole('button', { name: /goto next page/i });
      expect(nextPageButton).toBeInTheDocument();
      expect(nextPageButton).toBeEnabled();

      const previousPage = within(pagination).getByRole('button', { name: /goto previous page/i });
      expect(previousPage).toBeInTheDocument();
      expect(previousPage).toBeDisabled();
    });
  });

  test('should be able to filter on store', async () => {
    const filterStore = await screen.findByLabelText('Filter Store');
    userEvent.click(filterStore);
    userEvent.type(filterStore, 'Steam{arrowdown}{enter}');

    const submit = screen.getByRole('button', { name: 'Search' });
    userEvent.click(submit);

    const progressBar = await screen.findByRole('progressbar');
    expect(progressBar).toBeInTheDocument();
    await waitForElementToBeRemoved(progressBar);
  });

  test('should be able to goto next page', async () => {
    const paginations = await screen.findAllByRole('navigation');
    const pagination = paginations[0];
    const nextPageButton = within(pagination).getByRole('button', { name: 'Goto next page' });
    userEvent.click(nextPageButton);

    const progressBar = await screen.findByRole('progressbar');
    expect(progressBar).toBeInTheDocument();
    await waitForElementToBeRemoved(progressBar);

    expect(screen.getAllByText('Rows 61 to 120')).toHaveLength(2);
    expect(screen.getAllByRole('row')).toHaveLength(61);

    const expectedCells = ['BLACKHOLE', 'AllYouPlay', '1.80', '8.99', '82', 'Very Positive'];
    const firstRow = screen.getAllByRole('row', { name: /BLACKHOLE/i })[0];
    const actualCells = within(firstRow).getAllByRole('cell');
    expect(actualCells).toHaveLength(expectedCells.length);

    actualCells.forEach((actualCell, i) => {
      expect(actualCell).toHaveTextContent(expectedCells[i]);
    });

    expect(nextPageButton).toBeInTheDocument();
    expect(nextPageButton).toBeDisabled();

    const previousPage = within(pagination).getByRole('button', { name: /goto previous page/i });
    expect(previousPage).toBeEnabled();
  });

  test('should reset all filters', () => {
    // todo: implement test.
    // todo: exact match
  });
});
