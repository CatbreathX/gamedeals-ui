import { screen } from '@testing-library/react';
import { GameTitleFilter } from 'pages/search/components/GameTitleFilter';
import { FormProvider, useForm } from 'react-hook-form';
import { renderComponent } from 'unit/componentRenders';

describe('GameTitleFilter', () => {

  beforeEach(() => {
    renderComponent(<ComponentWrapper />);
  });

  test('game title should be blank by default', () => {
    expect(screen.getByRole('textbox', { name: /title/i })).toHaveTextContent('');
  });

  test('should be unchecked by default', () => {
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