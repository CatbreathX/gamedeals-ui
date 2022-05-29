import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Pagination } from 'common/components/Pagination/Pagination';
import { renderComponent } from 'unit/componentRenders';

describe('Pagination', () => {
  test('should disable previous page when on first page', () => {
    renderPaginationComponent({ pageNumber: 1 });
    expect(screen.getByRole('button', { name: 'Goto previous page' })).toBeDisabled();
  });

  test('should render enable next page button when more pages of data', () => {
    renderPaginationComponent();
    expect(screen.getByRole('button', { name: 'Goto next page' })).toBeEnabled();
  });

  test('should disable next page button when on last page', () => {
    renderPaginationComponent({ totalNumberOfPages: 1 });
    expect(screen.getByRole('button', { name: 'Goto next page' })).toBeDisabled();
  });

  test('should enable previous and next page buttons when previous and next pages exist', () => {
    renderPaginationComponent({
      pageNumber: 2,
      totalNumberOfPages: 3,
    });

    expect(screen.getByRole('button', { name: 'Goto previous page' })).toBeEnabled();
    expect(screen.getByRole('button', { name: 'Goto next page' })).toBeEnabled();
  });

  test('should invoke nextPage handler when user clicks on next page button', () => {
    const mockHandler = jest.fn();
    renderPaginationComponent({
      totalNumberOfPages: 2,
      onNextPage: mockHandler,
    });
    const nextPageButton = screen.getByRole('button', { name: 'Goto next page' });
    userEvent.click(nextPageButton);
    expect(mockHandler).toHaveBeenCalledWith(2);
  });

  test('should invoke previousPage handler when user clicks on previous page button', () => {
    const mockHandler = jest.fn();
    renderPaginationComponent({
      pageNumber: 2,
      totalNumberOfPages: 2,
      onPreviousPage: mockHandler,
    });
    const previousPageButton = screen.getByRole('button', { name: 'Goto previous page' });
    userEvent.click(previousPageButton);
    expect(mockHandler)
      .toHaveBeenCalledWith(1);
  });

  test('should display correct page number', () => {
    renderPaginationComponent({
      pageNumber: 1,
      totalNumberOfPages: 1,
    });

    expect(screen.getByLabelText('Page Number')).toHaveTextContent('Page: 1');
  });

  test('should display correct start to end row numbers', () => {
    renderPaginationComponent({
      pageNumber: 1,
      totalNumberOfPages: 1,
      numberOfRows: 25,
    });

    expect(screen.getByLabelText('Start row number to end row number'))
      .toHaveTextContent('1 to 25');
  });
});

const noop = () => {
};

const renderPaginationComponent = ({
  numberOfRows = 25,
  onNextPage = noop,
  onPageSizeChange = noop,
  onPreviousPage = noop,
  pageNumber = 1,
  pageSize = 25,
  totalNumberOfPages = 99,
} = {}) => {
  renderComponent(
    <Pagination
      numberOfRows={numberOfRows}
      onNextPage={onNextPage}
      onPageSizeChange={onPageSizeChange}
      onPreviousPage={onPreviousPage}
      pageNumber={pageNumber}
      pageSize={pageSize}
      totalNumberOfPages={totalNumberOfPages}
    />,
  );
};
