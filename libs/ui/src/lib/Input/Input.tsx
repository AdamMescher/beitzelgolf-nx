import * as React from 'react';
import styled from 'styled-components';
import { MdClear } from 'react-icons/md';

interface InputProps {
  name: string;
  label: string;
  handleChange?: (event: React.SyntheticEvent) => void;
  handleClear?: (event: React.SyntheticEvent) => void;
  type?: React.HTMLInputTypeAttribute;
  required?: boolean;
  placeholder?: string;
  isClearable?: boolean;
  value?: string;
}

const Input = ({
  label,
  name,
  placeholder,
  required,
  type,
  isClearable,
  value,
  handleClear,
  ...rest
}: InputProps) => {
  const clearButtonShouldDisplay = () =>
    isClearable && value && value?.length > 1;
  return (
    <Wrapper>
      <Label htmlFor={name}>{label}</Label>
      <StyledInput
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        value={value}
        {...rest}
      />
      {clearButtonShouldDisplay() ? (
        <ClearButton name={name} onClick={handleClear?.bind(this)}>
          <MdClear />
        </ClearButton>
      ) : null}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;
const Label = styled.label`
  padding-left: 16px;
`;
const StyledInput = styled.input`
  border-radius: 8px;
  border: 2px solid currentColor;
  padding: 8px 16px;
  transition: all 150ms ease-in-out;
  :focus-visible {
    outline: 2px solid currentColor;
    outline-offset: 3px;
  }
`;
const ClearButton = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  position: absolute;
  bottom: 10px;
  right: 12px;
  display: grid;
  place-items: center;
  & > svg {
    width: 100%;
    height: 24px;
  }
  &:hover {
    & > svg {
      fill: gray;
    }
  }
  &:active {
    & > svg {
      fill: red;
    }
  }
`;

export default Input;
