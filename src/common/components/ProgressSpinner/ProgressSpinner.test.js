import { render, screen } from '@testing-library/react';
import { ProgressSpinner } from 'common/components/ProgressSpinner/ProgressSpinner';

describe('ProgressSpinner', () => {
  test('should render correctly', () => {
    const {asFragment} = renderComponent();
    expect(asFragment()).toMatchSnapshot();
  })
  test('should show progress spinner', () => {
    renderComponent();
    expect(screen.getByRole('progressbar')).toBeInTheDocument();
  });
});

const renderComponent = (props = {}) => {
  return render(<ProgressSpinner {...props} />);
};
