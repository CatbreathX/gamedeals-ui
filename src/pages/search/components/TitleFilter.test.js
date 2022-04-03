import { render } from '@testing-library/react';
import { TitleFilter } from 'pages/search/components/TitleFilter';
import { FormProvider, useForm } from 'react-hook-form';

describe('TitleFilter', () => {
  test('should render title', () => {
    render(
      <ComponentWrapper />,
    );
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
