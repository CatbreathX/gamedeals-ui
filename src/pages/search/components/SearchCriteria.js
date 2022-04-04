import { Button } from '@mui/material';
import { Form } from 'common/elements/Form';
import { H1 } from 'common/elements/H1';
import { RatingFilter } from 'pages/search/components/RatingFilter';
import { StoreFilter } from 'pages/search/components/StoreFilter';
import { TitleFilter } from 'pages/search/components/TitleFilter';
import { FilterActions, FilterContainer } from 'pages/search/layout/FilterContainer';
import PropTypes from 'prop-types';
import { FormProvider, useForm } from 'react-hook-form';

export const SearchCriteria = ({ handleFormSubmission }) => {
  const formMethods = useForm();
  const { handleSubmit, reset } = formMethods;

  const onFormSubmit = (data) => {
    handleFormSubmission(data);
  };

  const resetForm = () => {
    reset({ title: '', store: '', exactTitle: 0 });
  };

  return (
    <FormProvider {...formMethods}>
      <Form onSubmit={handleSubmit(onFormSubmit)}>
        <H1>Game Deal Search</H1>

        <FilterContainer>
          <StoreFilter />

          <RatingFilter />
          <TitleFilter />
        </FilterContainer>
        <FilterActions>
          <Button type="submit">Search</Button>
          <Button type="button" onClick={resetForm}>Clear</Button>
        </FilterActions>
      </Form>
    </FormProvider>
  );
};

SearchCriteria.propTypes = {
  handleFormSubmission: PropTypes.func.isRequired,
};
