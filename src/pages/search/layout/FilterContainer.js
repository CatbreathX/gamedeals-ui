import styled from '@emotion/styled';
import { LARGE } from 'common/layout/constants';

export const SearchCriteriaBlock = styled.div`
  display: inline-flex;
  flex-direction: column;
`;

export const FilterContainer = styled.div`
  display: inline-flex;
  flex-direction: row;
  gap: 8px;

  @media screen and (max-width: ${LARGE}) {
    flex-direction: column;
  }
`;

export const FilterActions = styled.div`
  display: inline-flex;
  flex-direction: row;
  gap: 8px
`;
