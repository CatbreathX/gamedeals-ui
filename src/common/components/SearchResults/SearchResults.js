import { formatString } from 'common/components/SearchResults/formatters';
import {
  CircularProgressSpinner,
  ProgressContainer,
  Table,
  TableHeadingTr,
  Td,
  Th,
  Tr,
} from 'common/components/SearchResults/layout/styles';
import { camelCase } from 'lodash/string';
import PropTypes from 'prop-types';

const noop = () => {
};

export const SearchResults = ({
  columns,
  dataset,
  isError,
  isLoading,
  isSuccess,
  dataRowClicked,
  headerClicked,
  pagination,
}) => {
  const onHeaderClicked = (header, i) => {
    const normalizedHeader = camelCase(header);
    headerClicked(normalizedHeader, i);
  };

  return (
    <>
      {isLoading &&
        <ProgressContainer>
          <CircularProgressSpinner />
        </ProgressContainer>
      }

      {pagination}
      <Table>
        <thead>
          <TableHeadingTr>
            {columns.map((column, i) => (
              <Th
                key={column.header}
                onClick={() => {
                  onHeaderClicked(column.header, i);
                }}
              >
                {column.header}
              </Th>
            ))}
          </TableHeadingTr>
        </thead>
        <tbody>
          {isError &&
          <tr>
            <td colSpan={columns.length} className="search-results__error">
              An Error Occurred getting
              your data!
            </td>
          </tr>
          }

          {isSuccess && dataset.length === 0 &&
          renderNoResults(columns)
          }
          {isSuccess && dataset.length > 0 &&
          dataset.map((row, rowIndex) => renderRow(columns, row, rowIndex, dataRowClicked))
          }
        </tbody>
      </Table>
      {!isLoading && pagination}
    </>
  );
};

SearchResults.propTypes = {
  dataset: PropTypes.instanceOf(Array),
  isLoading: PropTypes.bool.isRequired,
  isError: PropTypes.bool.isRequired,
  isSuccess: PropTypes.bool.isRequired,
  headerClicked: PropTypes.func,
  dataRowClicked: PropTypes.func,
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      header: PropTypes.string.isRequired,
      accessor: PropTypes.string.isRequired,
      className: PropTypes.string,
      headerRenderer: PropTypes.func,
      valueFormatter: PropTypes.func,
    }),
  ).isRequired,
  pagination: PropTypes.node,
};

SearchResults.defaultProps = {
  dataset: [],
  headerClicked: noop(),
  dataRowClicked: noop(),
  pagination: null,
};

const renderNoResults = (columns) => (
  <tr>
    <td colSpan={columns.length}>
      No Results Found
    </td>
  </tr>
);

const renderRow = (columns, row, rowIndex, dataRowClicked) => (
  <Tr
    key={`row-${rowIndex}`}
    onClick={() => dataRowClicked(row)}
  >
    {renderColumns(columns, row, rowIndex)}
  </Tr>
);

const renderColumns = (columns, rowData, rowIndex) => columns.map((column, columnIndex) => {
  const value = rowData[column.accessor];
  const valueFormatter = column.valueFormatter || formatString;
  const formattedValue = valueFormatter(value, rowData);
  const key = `column-${value}-${rowIndex}-${columnIndex}`;

  return (
    <Td key={key}>
      {formattedValue}
    </Td>
  );
});
