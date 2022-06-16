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
  <div key={dealId}>
    <div>
      <img src={thumbnailImage} alt={title} />
    </div>

    <div>
      <span className="game_cell_title">{title}</span>
      <span className="game_cell_store">{storeName}</span>
    </div>

    <div>
      <span className="game_cell_normal-price">{normalPrice}</span>
      <span className="game_cell_sale-price">{salePrice}</span>
      <span className="game_cell_price-saving">{priceSaving}</span>
    </div>

    <div>
      <span className="game_cell_metacritic-rating">{metacriticRating}</span>
      <span className="game_cell_steam-rating">{steamRatingText}</span>
      <span className="game_cell_deal-rating">{dealRating}</span>
    </div>

  </div>
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
