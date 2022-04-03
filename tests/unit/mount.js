import { render } from '@testing-library/react';
import { Provider } from 'react-redux';

export const mountWithStore = async (component, store) => {
  await render(
    <Provider store={store}>
      {component}
    </Provider>,

  );
};
