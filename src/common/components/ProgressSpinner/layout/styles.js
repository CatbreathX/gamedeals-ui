import styled from '@emotion/styled';
import { Box, CircularProgress } from '@mui/material';

export const ProgressSpinnerContainer = styled(Box)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ProgressSpinnerBox = styled(Box)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  z-index: 1;
  background-color: black;
  width: 150px;
  height: 150px;
  border-radius: 36px;
  opacity: 0.6;
`;

export const CircularProgressSpinner = styled(CircularProgress)`
  display: inline-grid;
  justify-self: center;
`;
