import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Button from './Button';

describe('Button Component', () => {
  it('should render without errors', () => {
    render(<Button />);
    expect(screen.queryByText('this is a button')).toBeInTheDocument();
  });
});
