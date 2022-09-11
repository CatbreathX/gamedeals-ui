import { GameCell } from 'common/components/SearchResults/components/GameCell';

export default {
  title: 'Cell',
  component: GameCell,
};

const Template = (args) => <GameCell {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  dealId: '1',
  dealRating: '4.0',
  metacriticRating: '85',
  normalPrice: '29.99',
  priceSaving: '24.00',
  salePrice: '5.99',
  steamRatingText: 'Mostly Positive',
  storeName: 'Steam',
  thumbnailImage: 'https://cdn.cloudflare.steamstatic.com/steam/apps/359320/capsule_sm_120.jpg?t=1654873588',
  title: 'Elite Dangerous',
};
