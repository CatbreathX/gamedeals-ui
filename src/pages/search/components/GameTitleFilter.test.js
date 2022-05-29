import { screen } from '@testing-library/react';
import { GameTitleFilter } from 'pages/search/components/GameTitleFilter';
import { FormProvider, useForm } from 'react-hook-form';
import { renderComponent } from 'unit/componentRenderers';

describe('GameTitleFilter', () => {

  test('should render correctly', () => {
    const {asFragment} = renderComponent(<ComponentWrapper />);
    expect(asFragment()).toMatchSnapshot();
  })

  test('game title should be blank by default', () => {
    renderComponent(<ComponentWrapper />);
    expect(screen.getByRole('textbox', { name: /title/i })).toHaveTextContent('');
  });

  test('should be unchecked by default', () => {
    renderComponent(<ComponentWrapper />);
    expect(screen.getByRole('checkbox', { name: /exact match/i })).not.toBeChecked();
  });
});

const ComponentWrapper = () => {
  const methods = useForm();

  return (
    <FormProvider {...methods}>
      <GameTitleFilter />
    </FormProvider>
  );
};
