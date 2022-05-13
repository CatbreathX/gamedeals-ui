import { render, screen } from '@testing-library/react';
import { TitleFilter } from 'pages/search/components/TitleFilter';
import { FormProvider, useForm } from 'react-hook-form';

describe('TitleFilter', () => {
  // todo: needs completion
  test('should render title', () => {
    render(
      <ComponentWrapper />,
    );

    expect(screen.getAllByText('Title')[0]).toBeInTheDocument();
  });
});

const ComponentWrapper = () => {
  const methods = useForm();

  return (
    <FormProvider {...methods}>
      <TitleFilter />
    </FormProvider>
  );
};
