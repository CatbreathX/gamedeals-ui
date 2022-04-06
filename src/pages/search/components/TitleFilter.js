import { Checkbox, FormControlLabel, TextField } from '@mui/material';
import { TitleFilterContainer } from 'pages/search/layout/TitleFilterContainer';
import { Controller, useFormContext } from 'react-hook-form';

export const TitleFilter = () => {
  const { control, register } = useFormContext();

  return (

    <TitleFilterContainer>
      <TextField type="text" label="Title" {...register('title')} />

      <FormControlLabel
        control={
          <Controller
            control={control}
            name="exactTitle"
            render={({ field }) => {
              const isChecked = field.value === true;
              return <Checkbox {...field} checked={isChecked} />;
            }
            }
          />
        }
        label="Exact Match"
      />
    </TitleFilterContainer>
  );
};
