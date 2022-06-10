import { GameCell } from 'common/components/SearchResults/GameCell';
import React from 'react';
import { renderComponent } from 'unit/componentRenderers';

describe('GameCell', () => {
  test('should render correctly', () => {
    const component = renderComponent(
      <GameCell  title="Elite Dangerous" price="10.00" />,
    );

    expect(component).toMatchSnapshot();
  });
});
