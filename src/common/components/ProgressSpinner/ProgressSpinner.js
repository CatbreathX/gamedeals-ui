import {
  CircularProgressSpinner,
  ProgressSpinnerBox,
  ProgressSpinnerContainer,
} from 'common/components/ProgressSpinner/layout/styles';

export const ProgressSpinner = () => (
  <ProgressSpinnerContainer>
    <ProgressSpinnerBox>
      <CircularProgressSpinner />
    </ProgressSpinnerBox>
  </ProgressSpinnerContainer>
);
