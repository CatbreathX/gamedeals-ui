import { Button } from '@mui/material';
import { Div, PaginationContainer } from 'common/components/Pagination/layout/Pagination';
import PropTypes from 'prop-types';
import { PageSize } from 'common/components/Pagination/PageSize';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';

export const Pagination = ({
  numberOfRows,
  onNextPage,
  onPageSizeChange,
  onPreviousPage,
  pageNumber,
  pageSize,
  totalNumberOfPages,
}) => {
  const rowNumberStart = (pageNumber * numberOfRows) - numberOfRows + 1;
  const rowNumberEnd = rowNumberStart + numberOfRows - 1;
  const isNextPageEnabled = totalNumberOfPages > pageNumber;
  const isPreviousPageEnabled = pageNumber !== 1;

  const onPreviousPageClicked = (e) => {
    e.preventDefault();
    onPreviousPage(pageNumber - 1);
  };

  const onNextPageClicked = (e) => {
    e.preventDefault();
    onNextPage(pageNumber + 1);
  };

  const onPageSizeChanged = (e) => {
    e.preventDefault();
    onPageSizeChange(e.target.value);
  };

  return (
    <PaginationContainer role="navigation" aria-label="Pagination for search results">
      <PageSize labelId="top" onPageSizeChange={onPageSizeChanged} pageSize={pageSize} />
      <Div aria-label="Page Number">
        Page:
        <span>
          {' '}
          {pageNumber}
        </span>
      </Div>
      <Div aria-label="Start row number to end row number">
        {`Rows ${rowNumberStart} to ${rowNumberEnd}`}
      </Div>
      <Div>
        <Button
          sx={{ fontSize: 18 }}
          aria-label="Goto previous page"
          onClick={onPreviousPageClicked}
          disabled={!isPreviousPageEnabled}
        >
          <NavigateBeforeIcon />
        </Button>
        <Button
          sx={{ zIndex: 9999 }}
          aria-label="Goto next page"
          onClick={onNextPageClicked}
          disabled={!isNextPageEnabled}
        >
          <NavigateNextIcon />
        </Button>
      </Div>
    </PaginationContainer>
  );
};

Pagination.propTypes = {
  numberOfRows: PropTypes.number.isRequired,
  onNextPage: PropTypes.func.isRequired,
  onPageSizeChange: PropTypes.func.isRequired,
  onPreviousPage: PropTypes.func.isRequired,
  pageNumber: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  totalNumberOfPages: PropTypes.number.isRequired,
};
