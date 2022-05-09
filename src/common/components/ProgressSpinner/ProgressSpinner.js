import {
  CircularProgressSpinner,
  ProgressSpinnerBox,
  ProgressSpinnerContainer,
} from 'common/components/ProgressSpinner/layout/styles';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';

export const ProgressSpinner = ({ delay }) => {
  const timerRef = React.useRef();
  const [canDisplayProgress, setCanDisplayProgress] = useState(false);

  useEffect(() => {
    timerRef.current = setTimeout(() => {
      setCanDisplayProgress(true);
    }, delay);
    return () => clearTimeout(timerRef.current);
  }, []); '';

  return (
    <>
      {canDisplayProgress &&
        <ProgressSpinnerContainer>
          <ProgressSpinnerBox>
            <CircularProgressSpinner />
          </ProgressSpinnerBox>
        </ProgressSpinnerContainer>
      }

      {!canDisplayProgress && null}
    </>
  );
};

ProgressSpinner.propTypes = {
  delay: PropTypes.number,
};

ProgressSpinner.defaultProps = {
  delay: 1,
};
