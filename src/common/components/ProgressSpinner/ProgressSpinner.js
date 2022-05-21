import {
  CircularProgressSpinner,
  ProgressSpinnerBox,
  ProgressSpinnerContainer,
} from 'common/components/ProgressSpinner/layout/styles';

export const ProgressSpinner = () => (
  <ProgressSpinnerContainer className="gameDeals-progressbar">
    <ProgressSpinnerBox>
      <CircularProgressSpinner />
    </ProgressSpinnerBox>
  </ProgressSpinnerContainer>
);
