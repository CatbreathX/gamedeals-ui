import { act, render, screen } from '@testing-library/react';
import { ProgressSpinner } from 'common/components/ProgressSpinner/ProgressSpinner';
import React from 'react';

describe('ProgressSpinner', () => {
  beforeEach(() => {
    jest.resetAllMocks();
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  test('should not display the spinner when the delay time is pending', () => {
    renderComponent({});
    expect(screen.queryByRole('progressbar'))
      .not
      .toBeInTheDocument();
  });

  test('should show progress spinner after the delay time', () => {
    jest.spyOn(global, 'setTimeout');
    const delay = 2000;
    renderComponent({ delay });

    act(() => jest.runOnlyPendingTimers());

    expect(setTimeout)
      .toHaveBeenCalledWith(expect.any(Function), delay);
  });
});

const renderComponent = (props = {}) => {
  render(
    <ProgressSpinner {...props} />,
  );
};
