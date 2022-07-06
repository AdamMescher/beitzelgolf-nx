import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { axe, toHaveNoViolations } from 'jest-axe';
import Index from '../pages/index';

expect.extend(toHaveNoViolations);

describe('Button Component', () => {
    it('should render without errors', () => {
      render(<Index />);
      expect(screen.queryByTestId('contact-us')).toBeInTheDocument();
    });
    it('Should render without axe a11y errors', async () => {
      render(<Index />);
      expect(await axe(screen.queryByTestId('contact-us'))).toHaveNoViolations();
    });
  });