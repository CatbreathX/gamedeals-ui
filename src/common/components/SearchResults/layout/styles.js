import styled from '@emotion/styled';
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
