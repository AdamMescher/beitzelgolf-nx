import * as React from 'react';
import styled from 'styled-components';
import SIZES from './sizes';

type ButtonProps = {
  style: React.CSSProperties;
  children: React.ReactNode;
  size?: string;
  variant?: string;
  disabled?: boolean;
};

const Button = ({
  size = 'medium',
  variant = 'primary',
  disabled,
  children,
  style,
  ...rest
}: ButtonProps) => {
  const styles = SIZES[size];
  let Component;
  if (variant === 'fill') {
    Component = Fill;
  } else if (variant === 'outline') {
    Component = Outline;
  } else if (variant === 'text') {
    Component = Text;
  } else {
    throw new Error(`Unrecognized Button variant: ${variant}`);
  }
  return (
    <Component disabled={disabled} style={{ ...styles, style }} {...rest}>
      {children}
    </Component>
  );
};

const Base = styled.button`
  --white: ${({ theme }) => theme.color.tailwind.neutral[50]};
  --primary: ${({ theme }) => theme.color.tailwind.green[500]};
  --fill-active: ${({ theme }) => theme.color.tailwind.green[600]};
  --outline-active: ${({ theme }) => theme.color.tailwind.green[400]};
  --outline-disabled: ${({ theme }) => theme.color.tailwind.neutral[300]};
  --text-disabled-light: ${({ theme }) => theme.color.tailwind.neutral[200]};
  --text-disabled-dark: ${({ theme }) => theme.color.tailwind.neutral[400]};
  font-size: var(--typography-font-size-body);
  font-family: var(--typography-font-family-merriweather);
  padding: var(--padding);
  border-radius: var(--borderRadius);
  border: 2px solid transparent;
  transition: all 150ms ease-in-out;
  outline-color: var(--primary);
  cursor: pointer;
  &:focus-visible {
    outline-offset: 4px;
  }
  &:disabled {
    cursor: not-allowed;
  }
`;

const Fill = styled(Base)`
  background: var(--primary);
  color: var(--white);
  &:hover:not(:disabled) {
    background: transparent;
    color: var(--primary);
    border-color: var(--primary);
  }
  &:active:not(:disabled) {
    background: var(--primary);
    border-color: var(--fill-active);
    color: var(--white);
  }
  &:disabled {
    opacity: 0.7;
  }
`;
const Outline = styled(Base)`
  background: transparent;
  border-color: var(--primary);
  color: var(--primary);
  &:hover:not(:disabled) {
    background-color: var(--primary);
    color: var(--white);
  }
  &:active:not(:disabled) {
    background-color: var(--outline-active);
    border-color: var(--fill-active);
    color: var(--white);
  }
  &:disabled {
    border-color: var(--outline-disabled);
  }
`;
const Text = styled(Base)`
  background: transparent;
  color: var(--primary);
  &:hover:not(:disabled) {
    border-color: var(--primary);
    color: var(--primary);
  }
  &:active:not(:disabled) {
    background-color: var(--outline-active);
    border-color: var(--fill-active);
    color: var(--white);
  }
  &:disabled {
    background-color: var(--text-disabled-light);
    color: var(--text-disabled-dark);
  }
`;

export default Button;
