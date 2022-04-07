import styled from '@emotion/styled';

export const Table = styled.table`
  border-collapse: collapse;
  margin: 36px 0 36px;
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
