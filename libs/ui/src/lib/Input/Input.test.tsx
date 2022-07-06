import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { axe, toHaveNoViolations } from 'jest-axe';
import Input from './Input';

expect.extend(toHaveNoViolations);

describe('Input Component', () => {
  it('should render without errors', () => {
    const label = 'two';
    const name = 'one';
    const placeholder = 'three';
    render(<Input name={name} label={label} placeholder={placeholder} />);
    expect(screen.getByLabelText('two')).toBeInTheDocument();
  });
  it('Should render without axe a11y errors', async () => {
    const name = 'one';
    const label = 'two';
    const placeholder = 'three';
    render(<Input name={name} label={label} placeholder={placeholder} />);
    expect(await axe(screen.getByLabelText('two'))).toHaveNoViolations();
  });
});
