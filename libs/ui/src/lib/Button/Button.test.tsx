import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { axe, toHaveNoViolations } from 'jest-axe';
import Button from './Button';

expect.extend(toHaveNoViolations);

describe('Button Component', () => {
  it('should render without errors', () => {
    render(<Button />);
    expect(screen.queryByText('this is a button')).toBeInTheDocument();
  });
  it('Should render without axe a11y errors', async () => {
    render(<App />);
    expect(await axe(screen.getByTestId('app'))).toHaveNoViolations();
  });
});
