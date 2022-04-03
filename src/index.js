import { css, Global } from '@emotion/react';
import { createTheme, ThemeProvider } from '@mui/material';
import { App } from 'App';
import { AppContainer } from 'common/layout/AppContainer';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from 'redux/store';

const theme = createTheme({
});

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <AppContainer>
        <Global styles={
          css`
              body, html {
                font-size: 14px;
                color: #57595D;
                text-align: left;
                font-family: 'Roboto', 'sans-serif';
                margin: 0;
                padding: 0;
              },
          `}
        />

        <App />
      </AppContainer>
    </ThemeProvider>
  </Provider>,

  document.getElementById('app'),
);
