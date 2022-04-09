import styled from '@emotion/styled';
import { Box, CircularProgress } from '@mui/material';

export const Table = styled.table`
  border-collapse: collapse;
  margin: 36px 0 36px;
  width: 100%;
  min-width: 100%;
`;

export const Th = styled.th`
  padding: 24px 24px 24px 8px;
`;

export const TableHeadingTr = styled.tr`
  background-color: skyblue;
`;

export const Tr = styled.tr`
  background-color: ${props => (props.even ? 'inherit' : 'lightblue')};
`;

export const Td = styled.td`
  padding: 8px 24px 8px 8px;
`;

export const ProgressContainer = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  left: 50%;
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
