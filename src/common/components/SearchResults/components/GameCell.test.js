import { GameCell } from 'common/components/SearchResults/components/GameCell';
import React from 'react';
import { renderComponent } from 'unit/componentRenderers';

const defaultProps = {
  dealId: '1',
  dealRating: '4.0',
  metacriticRating: '85',
  normalPrice: '29.99',
  priceSaving: '24.00',
  salePrice: '5.99',
  steamRatingText: 'Mostly Positive',
  storeName: 'Steam',
  thumbnailImage: 'https://BASE_IMAGE/game/1/image',
  title: 'Elite Dangerous',
};

describe('GameCell', () => {
  test('should render correctly', () => {
    const component = renderUI();
    expect(component).toMatchSnapshot();
  });
});

const renderUI = (props = {}) => {
  const mergedProps = { ...defaultProps, ...props };

  const component = renderComponent(
    <GameCell  {...mergedProps} />,
  );

  return component;

};
