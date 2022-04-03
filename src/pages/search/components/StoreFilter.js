import { Autocomplete, TextField } from '@mui/material';
import { sortBy } from 'lodash/collection';
import { Controller, useFormContext } from 'react-hook-form';
import { useGetStoresQuery } from 'services/gamedealapi';

export const StoreFilter = () => {
  const { control } = useFormContext();

  const {
    data,
    isSuccess,
  } = useGetStoresQuery();

  if (!isSuccess) return null;

  return (
    <>
      {isSuccess &&
        <Controller
          control={control}
          render={({ field }) => (
            <Autocomplete
              sx={{
                width: 350,
              }}
              disablePortal
              id="store-filter"
              options={createOptions(data)}
              isOptionEqualToValue={(option, value) => option.value === value.value}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Filter Store"
                />
              )}
              onChange={(e, item) => {
                field.onChange(item?.value);
              }}
            />
          )}
          name="store"
        />
      }
      {!isSuccess &&
        <div />
      }
    </>
  );
};

const createOptions = (stores) => {
  const options = [];
  stores.forEach((store) => {
    if (store.isActive) {
      const option = {
        label: store.storeName,
        value: store.storeID,
      };

      options.push(option);
    }
  });

  const sortedOptions = sortBy(options, ['label']);
  return sortedOptions;
};
