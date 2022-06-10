import { css } from '@emotion/react';
import { GlobalStyles } from '@mui/material';

export const AppStyles = () => (<GlobalStyles styles={
  css`
      body, html {
        font-size: 14px;
        color: #57595D;
        text-align: left;
        font-family: 'Roboto', 'sans-serif';
        margin: 0;
        padding: 0;
      }
    `}
/>);
