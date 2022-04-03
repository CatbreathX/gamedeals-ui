import { FormControl, MenuItem } from '@mui/material';
import { ReactHookFormSelect } from 'common/components/inputs/ReactHookFormSelect';
import { useFormContext } from 'react-hook-form';

export const RatingFilter = () => {
  const ratings = ['50', '60', '70', '80', '85', '90', '95', '100'];

  const { control } = useFormContext();
  return (
    <FormControl sx={{
      width: 100,
    }}
    >
      <ReactHookFormSelect
        name="gameRatingFilter"
        label="Rating"
        control={control}
        defaultValue=""
      >
        <MenuItem value="">None</MenuItem>
        {ratings.map((rating) => (
          <MenuItem key={`rating${rating}`} value={rating}>
            {rating}
          </MenuItem>
        ))}
      </ReactHookFormSelect>
    </FormControl>
  );
};
