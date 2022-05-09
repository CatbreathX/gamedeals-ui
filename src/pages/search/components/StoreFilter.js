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
  console.log('is success', isSuccess);
  if (!isSuccess) return null;

  const options = createOptions(data);

  return (
    <>
      {isSuccess &&
        <Controller
          control={control}
          render={({ field }) => {
            const selectedOption = options.filter((o) => o.value === `${field.value}`);
            const selectedValue = (selectedOption.length && selectedOption[0]) || null;

            return (
              <Autocomplete
                sx={{
                  width: 350,
                }}
                disablePortal
                id="store-filter"
                value={selectedValue}
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
            );
          }}
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
