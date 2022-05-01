import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { SearchResults } from 'common/components/SearchResults/SearchResults';

const noop = () => {
};

const HEADERS = ['Game', 'Store', 'Sale Price'];

describe('Search Results', () => {
  test('should render header columns correctly', () => {
    renderSearchResults({});
    const actualHeaders = screen.getAllByRole('columnheader');
    expect(actualHeaders).toHaveLength(HEADERS.length);

    actualHeaders.forEach((actualHeader, i) => {
      expect(actualHeader).toHaveTextContent(HEADERS[i]);
    });
  });

  test('should display no results found when no dataset', () => {
    renderSearchResults({ isSuccess: true });
    expect(screen.getByRole('cell', { name: 'No Results Found' })).toBeInTheDocument();
  });

  test('should display no results found when no dataset', () => {
    renderSearchResults({ isSuccess: true });
    expect(screen.getByRole('cell', { name: 'No Results Found' })).toBeInTheDocument();
  });

  test('should display spinner when data is loading', () => {
    renderSearchResults({ isLoading: true });
    expect(screen.getByRole('progressbar', {})).toBeInTheDocument();
  });

  test('should display error when data is isError is True', () => {
    renderSearchResults({ isError: true });
    expect(screen.getByRole('cell', {})).toHaveClass('search-results__error');
  });

  test('should populate one row of data correctly', () => {
    const dataset = createTableDataSet();
    renderSearchResults({ dataset: dataset.data, isSuccess: true });
    const { data } = dataset;
    expect(screen.getByRole('cell', { name: data[0].game })).toBeInTheDocument();
    expect(screen.getByRole('cell', { name: data[0].store })).toBeInTheDocument();
    expect(screen.getByRole('cell', { name: data[0].salePrice })).toBeInTheDocument();
  });

  test('should invoke headerClicked when user clicks on a header column', () => {
    const mockHeaderClicked = jest.fn();
    renderSearchResults({ headerClicked: mockHeaderClicked });
    const headerIndex = 1;
    const storeHeader = screen.getByRole('columnheader', { name: HEADERS[headerIndex] });
    userEvent.click(storeHeader);
    expect(mockHeaderClicked).toHaveBeenCalledWith('store', headerIndex);
  });

  test('should invoke dataRowClicked when user clicks on a row of data', () => {
    const mockDataRowClicked = jest.fn();
    const dataset = createTableDataSet();
    renderSearchResults(
      { dataset: dataset.data, dataRowClicked: mockDataRowClicked, isSuccess: true },
    );
    const dataRows = screen.getAllByRole('row');
    userEvent.click(dataRows[2]);
    const expectedParams = dataset.data[1];
    expect(mockDataRowClicked).toHaveBeenCalledWith(expectedParams);
  });
});

const renderSearchResults = ({
  dataset = [],
  isLoading = false,
  isError = false,
  isSuccess = false,
  headerClicked = noop,
  dataRowClicked = noop,
}) => render(<SearchResults
  columns={[
    {
      header: HEADERS[0],
      accessor: 'game',
      className: 'search-results_game',
      valueFormatter: noop(),
      headerRenderer: noop(),
    },
    {
      header: HEADERS[1],
      accessor: 'store',
      className: 'search-results_store',
      valueFormatter: noop(),
      headerRenderer: noop(),
    },
    {
      header: HEADERS[2],
      accessor: 'salePrice',
      className: 'search-results_sale-price',
      valueFormatter: noop(),
      headerRenderer: noop(),
    },
  ]
  }
  dataRowClicked={dataRowClicked}
  dataset={dataset}
  headerClicked={headerClicked}
  isError={isError}
  isSuccess={isSuccess}
  isLoading={isLoading}
/>);

const createTableDataSet = () => {
  const dataset = {
    data: [
      {
        store: 'Steam',
        game: 'Game A',
        salePrice: 19.99,
      },
      {
        store: 'GoG',
        game: 'Game B',
        salePrice: 29.99,
      },
      {
        store: 'Epic Games',
        game: 'Game C',
        salePrice: 39.99,
      },
    ],
  };
  return dataset;
};
