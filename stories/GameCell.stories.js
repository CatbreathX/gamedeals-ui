import { GameCell } from 'common/components/SearchResults/GameCell';

export default {
  title: 'Cell',
  component: GameCell,
};

const Template = (args) => <GameCell {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  title: 'Elite Dangerous',
  price: '10.99',
};
