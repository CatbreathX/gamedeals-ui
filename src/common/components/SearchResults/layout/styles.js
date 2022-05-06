import styled from '@emotion/styled';
import { Box, CircularProgress } from '@mui/material';
import { LARGE, MEDIUM } from 'common/layout/constants';

export const Table = styled.table`
  border-collapse: collapse;
  margin: 36px 0 36px;
  width: 100%;
  min-width: 100%;
`;

export const Th = styled.th`
  padding: 24px 24px 24px 8px;

  @media screen and (max-width: ${MEDIUM}) {
    &:nth-of-type(n+4) {
      display: none;
    }
  }

  @media screen and (max-width: ${LARGE}) {
    &:nth-of-type(n+5) {
      display: none;
    }
  }
`;

export const TableHeadingTr = styled.tr`
  background-color: skyblue;
`;

export const Tr = styled.tr`
  cursor: pointer;
  background-color: inherit;
  
  :nth-of-type(even) {
    background-color: lightblue;
  }
`;

export const Td = styled.td`
  padding: 8px 24px 8px 8px;

  @media screen and (max-width: ${MEDIUM}) {
    &:nth-of-type(n+4) {
      display: none;
    }
  }

  @media screen and (max-width: ${LARGE}) {
    &:nth-of-type(n+5) {
      display: none;
    }
  }
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
