import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { axe, toHaveNoViolations } from 'jest-axe';
import InputError from './InputError';

expect.extend(toHaveNoViolations);

describe('InputError Component', () => {
  it('should render without errors', () => {
    render(<InputError />);
    expect(screen.getByLabelText('two')).toBeInTheDocument();
  });
  it('Should render without axe a11y errors', async () => {
    render(<InputError />);
    expect(await axe(screen.getByLabelText('two'))).toHaveNoViolations();
  });
});
