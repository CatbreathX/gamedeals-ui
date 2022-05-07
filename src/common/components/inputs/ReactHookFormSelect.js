import { FormControl, InputLabel, Select } from '@mui/material';
import PropTypes from 'prop-types';
import { Controller } from 'react-hook-form';

export const ReactHookFormSelect = ({
  name,
  label,
  control,
  defaultValue,
  children,
  ...props
}) => {
  const labelId = `${name}-label`;

  return (
    <FormControl {...props}>
      <InputLabel id={labelId}>{label}</InputLabel>
      <Controller
        render={({ field }) => (
          <Select
            {...field}
            name={name}
            labelId={labelId}
            label={label}
          >
            {children}
          </Select>
        )}
        name={name}
        control={control}
        defaultValue={defaultValue}
      />
    </FormControl>
  );
};

ReactHookFormSelect.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  control: PropTypes.object.isRequired,
  defaultValue: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
