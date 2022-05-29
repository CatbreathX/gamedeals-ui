import { render } from '@testing-library/react';
import { Provider } from 'react-redux';

export const renderWithStore = (component, store) => renderComponent(
  <Provider store={store}>
    {component}
  </Provider>,
);

export const renderComponent = (component) => render(component);
