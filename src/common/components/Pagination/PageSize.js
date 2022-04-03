import {
  FormControl, InputLabel, MenuItem, Select,
} from '@mui/material';
import PropTypes from 'prop-types';

export const PageSize = ({
  labelId,
  pageSize,
  onPageSizeChange,
}) => (
  <FormControl>
    <InputLabel id={labelId}>Page Size</InputLabel>
    <Select
      role="combobox"
      label="Page Size"
      labelId={labelId}
      onChange={onPageSizeChange}
      sx={{ width: '80px' }}
      value={pageSize}
    >
      <MenuItem value={10}>10</MenuItem>
      <MenuItem value={25}>25</MenuItem>
      <MenuItem value={60}>60</MenuItem>
    </Select>
  </FormControl>
);

PageSize.propTypes = {
  labelId: PropTypes.string.isRequired,
  pageSize: PropTypes.number.isRequired,
  onPageSizeChange: PropTypes.func.isRequired,
};
