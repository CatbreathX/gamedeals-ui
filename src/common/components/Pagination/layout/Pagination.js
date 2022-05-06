import styled from '@emotion/styled';
import { LARGE } from 'common/layout/constants';

export const PaginationContainer = styled.div`
  align-items: center;
  justify-content: flex-start;
  display: inline-flex;
  flex-direction: row;
  column-gap: 24px;

  @media screen and (max-width: ${LARGE}) {
    flex-direction: row;
  }
`;

export const Div = styled.div`
`;
