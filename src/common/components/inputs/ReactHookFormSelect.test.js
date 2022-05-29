import { MenuItem } from '@mui/material';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ReactHookFormSelect } from 'common/components/inputs/ReactHookFormSelect';
import { FormProvider, useForm } from 'react-hook-form';
import { renderComponent } from 'unit/componentRenderers';

describe('ReactHookFormSelect', () => {

  test('should render correctly', () => {
    const {asFragment} = renderComponentUnderTest();
    expect(asFragment()).toMatchSnapshot();
  })

  test('should display correct label', () => {
    renderComponentUnderTest();
    expect(screen.getByLabelText('Select Unit Test')).toBeInTheDocument();
  });

  test('should render all items in combo box', () => {
    renderComponentUnderTest();

    const button = screen.getByRole('button');
    userEvent.type(button, '{arrowdown}');

    const actualOptions = screen.getAllByRole('option');
    expect(actualOptions).toHaveLength(selectOptions.length);

    selectOptions.forEach((option) => {
      expect(screen.getByRole('option', { name: option.text })).toBeInTheDocument();
    });
  });

  test('should automatically the default item', () => {
    renderComponentUnderTest('2');
    expect(screen.getByRole('button')).toHaveTextContent('Two');
  });

  test('should update text input with selected value', () => {
    renderComponentUnderTest();

    const button = screen.getByRole('button');
    userEvent.type(button, '{arrowdown}');
    userEvent.type(screen.getAllByRole('option')[0], '{enter}');
    expect(button).toHaveTextContent('One');
  });
});

const renderComponentUnderTest = (defaultValue = '') => {
  return renderComponent(
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
