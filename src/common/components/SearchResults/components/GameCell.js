import {
  DataItem,
  DataCell,
  DataValue, DataCellContainer,
} from 'common/components/SearchResults/components/layout/styles';
import PropTypes from 'prop-types';

export const GameCell = ({
  dealId,
  title,
  normalPrice,
  storeName,
  salePrice,
  thumbnailImage,
  priceSaving,
  metacriticRating,
  steamRatingText,
  dealRating,
}) => (
  <DataCellContainer key={dealId}>
    <DataCell>
      <img src={thumbnailImage} alt={title} />
    </DataCell>

    <DataCell>
      <DataItem className="game_cell_title">{title}</DataItem>
      <DataItem className="game_cell_store">{storeName}</DataItem>
    </DataCell>

    <DataCell>
      <DataItem>Normal Price</DataItem>
      <DataValue>{normalPrice}</DataValue>
    </DataCell>

    <DataCell>
      <DataItem>Sale Price</DataItem>
      <DataValue>{salePrice}</DataValue>
    </DataCell>

    <DataCell>
      <DataItem>Savings</DataItem>
      <DataValue>{priceSaving}</DataValue>
    </DataCell>

    <DataCell>
      <DataItem className="game_cell_metacritic-rating">{metacriticRating}</DataItem>
      <DataItem className="game_cell_steam-rating">{steamRatingText}</DataItem>
      <DataItem className="game_cell_deal-rating">{dealRating}</DataItem>
    </DataCell>

  </DataCellContainer>
);

GameCell.propTypes = {
  dealId: PropTypes.string.isRequired,
  dealRating: PropTypes.string.isRequired,
  metacriticRating: PropTypes.string.isRequired,
  normalPrice: PropTypes.string.isRequired,
  priceSaving: PropTypes.string.isRequired,
  salePrice: PropTypes.string.isRequired,
  steamRatingText: PropTypes.string.isRequired,
  storeName: PropTypes.string.isRequired,
  thumbnailImage: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
