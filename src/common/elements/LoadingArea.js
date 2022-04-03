import styled from '@emotion/styled';

export const LoadingArea = styled.div`
  background-color: ${props => (props.isLoading && 'grey') || 'inherit'};
  display: inherit;
  flex-direction: inherit;
`;
