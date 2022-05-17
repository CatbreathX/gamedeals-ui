import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { server } from 'mocks/api/server';
import { rest } from 'msw';
import { StoreFilter } from 'pages/search/components/StoreFilter';
import { FormProvider, useForm } from 'react-hook-form';
import { Provider } from 'react-redux';
import { gameDealApi } from 'services/gamedealapi';
import { setupApiStore } from 'unit/reduxStore';

describe('StoreFilter', () => {
  let mockStore;

  beforeEach(() => {
    mockStore = setupApiStore(gameDealApi);
    setupMockHandlers();
  });

  afterEach(() => {
    mockStore.store.dispatch(gameDealApi.util.resetApiState());
  });

  test('should mount correctly', async () => {
    await renderComponent(mockStore);
    expect(await screen.findByRole('combobox', { name: 'Filter Store' })).toBeInTheDocument();
  });

  test('should contain all active stores', async () => {
    await renderComponent(mockStore);

    const inputText = await screen.findByRole('combobox');
    userEvent.type(inputText, '{arrowdown}');

    expect(await screen.findByRole('option', { name: 'Epic Games' })).toBeInTheDocument();
    expect(screen.getByRole('option', { name: 'Steam' })).toBeInTheDocument();
    expect(screen.queryByRole('option', { name: 'Humble Bundle' })).not.toBeInTheDocument();
  });

  test('should be able to select an item', async () => {
    const mockFormSubmitted = jest.fn();
    await renderComponent(mockStore, mockFormSubmitted);

    const inputText = await screen.findByRole('combobox');
    userEvent.type(inputText, '{arrowdown}{arrowdown}{enter}');

    const searchButton = await screen.findByRole('button', { name: 'submit' });
    userEvent.type(searchButton, '{enter}');

    await waitFor(() => {
      expect(mockFormSubmitted).toHaveBeenCalledWith({ store: '1' });
    });
  });
});

async function renderComponent(mockStore, formSubmitted) {
  await render(
    <Provider store={mockStore.store}>
      <ComponentWrapper formSubmitted={formSubmitted} />
    </Provider>,
  );
}

// eslint-disable-next-line react/prop-types
const ComponentWrapper = ({ formSubmitted }) => {
  const methods = useForm();

  const onSubmitHandler = (values) => {
    formSubmitted(values);
  };

  return (
    <form onSubmit={methods.handleSubmit(onSubmitHandler)}>
      <FormProvider {...methods}>
        <StoreFilter />
        <button type="submit">submit</button>
      </FormProvider>
    </form>
  );
};

function setupMockHandlers() {
  server.use(
    rest.get('https://www.cheapshark.com/api/1.0/stores', async (req, res, context) => res(context.json(
      [
        {
          storeID: '1',
          storeName: 'Steam',
          isActive: true,
        },
        {
          storeID: '2',
          storeName: 'Epic Games',
          isActive: true,
        },
        {
          storeID: '3',
          storeName: 'Humble Bundle',
          isActive: false,
        },
      ],
    ))),
  );
}
