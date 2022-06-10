import { createTheme, ThemeProvider } from '@mui/material';
import { App } from 'App';
import { AppStyles } from 'common/components/styles/styles';
import { AppContainer } from 'common/layout/AppContainer';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from 'redux/store';

const theme = createTheme({});

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <AppContainer>
        <AppStyles />
        <App />
      </AppContainer>
    </ThemeProvider>
  </Provider>,
  document.getElementById('app'),
);
