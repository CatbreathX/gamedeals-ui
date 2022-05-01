import { Pagination } from 'common/components/Pagination/Pagination';
import { formatMetaCriticScore } from 'common/components/SearchResults/formatters';
import { SearchResults } from 'common/components/SearchResults/SearchResults';
import { SearchCriteria } from 'pages/search/components/SearchCriteria';
import { SearchCriteriaContainer } from 'pages/search/layout/SearchCriteriaContainer';
import { SearchResultsContainer } from 'pages/search/layout/SearchResultsContainer';
import { useState } from 'react';
import { useGetDealsQuery, useGetStoresQuery } from 'services/gamedealapi';

const noop = () => {};

export const Search = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [pageSize, setPageSize] = useState(60);
  const [searchCriteriaFilterValues, setSearchCriteriaFilterValues] = useState();

  const {
    isError,
    isSuccess,
    isFetching,
    data,
  } = useGetDealsQuery({
    pageNumber,
    pageSize,
    ...searchCriteriaFilterValues,
  });
  const storeQuery = useGetStoresQuery();

  // todo: integrate...
  if (storeQuery.isLoading) return null;

  const handlePageSizeChange = (value) => {
    setPageNumber(1);
    setPageSize(parseInt(value, 10));
  };

  const handleNextPage = (value) => {
    setPageNumber(value);
  };

  const handlePreviousPage = (value) => {
    setPageNumber(value);
  };

  const handleSearchCriteriaSubmission = (values) => {
    const criteria = { ...values };
    if (values.store) {
      criteria.storeId = values.store;
    }

    setSearchCriteriaFilterValues(criteria);
  };

  const openDeal = (row) => {
    const url = `https://www.cheapshark.com/redirect?dealID=${row.dealID}`;
    window.open(url, '_blank', 'noreferrer noopener');
  };

  return (
    <>
      <SearchCriteriaContainer>
        <SearchCriteria handleFormSubmission={handleSearchCriteriaSubmission} />
      </SearchCriteriaContainer>
      <SearchResultsContainer>
        <SearchResults
          dataset={data?.results}
          dataRowClicked={openDeal}
          isLoading={isFetching}
          isSuccess={isSuccess}
          isError={isError}
          headerClicked={noop}
          dataColumnClicked={noop}
          columns={[
            {
              header: 'Game',
              accessor: 'title',
              className: 'search_results-title',
            },
            {
              header: 'Store',
              accessor: 'storeID',
              valueFormatter: (lookUpStoreId) => {
                const store = storeQuery.data
                  .find((currentStore) => currentStore.storeID === lookUpStoreId);
                return store?.storeName;
              },
            },
            {
              header: 'Sale Price',
              accessor: 'salePrice',
            },
            {
              header: 'Normal Price',
              accessor: 'normalPrice',
            },
            {
              header: 'Metacritic Score',
              accessor: 'metacriticScore',
              valueFormatter: formatMetaCriticScore,
            },
            {
              header: 'Steam Rating',
              accessor: 'steamRatingText',
            },
          ]}
          pagination={
            <Pagination
              onPageSizeChange={handlePageSizeChange}
              onPreviousPage={handlePreviousPage}
              onNextPage={handleNextPage}
              pageSize={pageSize}
              pageNumber={pageNumber}
              numberOfRows={data?.rows || 0}
              totalNumberOfPages={data?.totalPages || 0}
            />
          }
        />
      </SearchResultsContainer>
    </>
  );
};
