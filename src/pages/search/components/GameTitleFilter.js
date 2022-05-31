import { Checkbox, FormControlLabel, TextField } from '@mui/material';
import { TitleFilterContainer } from 'pages/search/layout/TitleFilterContainer';
import { Controller, useFormContext } from 'react-hook-form';

export const GameTitleFilter = () => {
  const { control, register } = useFormContext();

  return (

    <TitleFilterContainer>
      <TextField type="text" label="Game Title" {...register('gameTitle')} />
      <FormControlLabel
        control={
          <Controller
            control={control}
            name="exactGameTitle"
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
