import { Checkbox, FormControlLabel, TextField } from '@mui/material';
import { TitleFilterContainer } from 'pages/search/layout/TitleFilterContainer';
import { useFormContext } from 'react-hook-form';

export const TitleFilter = () => {
  const { register } = useFormContext();

  return (

    <TitleFilterContainer>
      <TextField type="text" label="Title" {...register('title')} />

      <FormControlLabel
        control={<Checkbox {...register('exactTitle')} />}
        label="Exact Match"
      />
    </TitleFilterContainer>
  );
};
