import PropTypes from 'prop-types';

export const GameCell = ({ title, price }) => (
  <div>
    <div>
      {title}
      :
      {price}
    </div>
  </div>
);

GameCell.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};
