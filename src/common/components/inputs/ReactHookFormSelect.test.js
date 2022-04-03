import { MenuItem } from '@mui/material';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ReactHookFormSelect } from 'common/components/inputs/ReactHookFormSelect';
import { FormProvider, useForm } from 'react-hook-form';

describe('ReactHookFormSelect', () => {
  test('should display correct label', () => {
    mount();
    expect(screen.getByLabelText('Select Unit Test')).toBeInTheDocument();
  });

  test('should render all options', () => {
    mount();

    const button = screen.getByRole('button');
    userEvent.type(button, '{arrowdown}');

    const actualOptions = screen.getAllByRole('option');
    expect(actualOptions).toHaveLength(selectOptions.length);

    selectOptions.forEach((option) => {
      expect(screen.getByRole('option', { name: option.text })).toBeInTheDocument();
    });
  });

  test('should select default value', () => {
    mount('2');
    expect(screen.getByRole('button')).toHaveTextContent('Two');
  });

  test('should update with selected value', () => {
    mount();

    const button = screen.getByRole('button');
    userEvent.type(button, '{arrowdown}');
    userEvent.type(screen.getAllByRole('option')[0], '{enter}');
    expect(button).toHaveTextContent('One');
  });
});

const mount = (defaultValue = '') => {
  render(
    <Select defaultValue={defaultValue} />,
  );
};

// eslint-disable-next-line react/prop-types
const Select = ({ defaultValue }) => {
  const methods = useForm({
    defaultValues: {
      title: 'Elite',
    },
  });

  return (
    <FormProvider {...methods}>
      <ReactHookFormSelect
        name="test"
        label="Select Unit Test"
        control={methods.control}
        defaultValue={defaultValue}
      >
        {selectOptions.map((option) => (
          <MenuItem key={option.value} value={option.value}>{option.text}</MenuItem>))}
      </ReactHookFormSelect>
    </FormProvider>
  );
};

const selectOptions = [
  {
    value: '1',
    text: 'One',
  },
  {
    value: '2',
    text: 'Two',
  },
  {
    value: '3',
    text: 'Three',
  },
];
