import { render, screen } from '@testing-library/react';
import { ProgressSpinner } from 'common/components/ProgressSpinner/ProgressSpinner';

describe('ProgressSpinner', () => {
  test('should show progress spinner', () => {
    renderComponent();
    expect(screen.getByRole('progressbar')).toBeInTheDocument();
  });
});

const renderComponent = (props = {}) => {
  render(<ProgressSpinner {...props} />);
};
