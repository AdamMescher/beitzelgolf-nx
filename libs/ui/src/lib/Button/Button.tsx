import * as React from 'react';
import styled from 'styled-components';

const Button = () => {
  return <Base>this is a button</Base>;
};

const Base = styled.button`
  border-radius: 4px;
  background: none;
  border: 2px solid black;
  padding: 6px 12px;
  cursor: pointer;
  transition: all 150ms ease-in-out;
  :hover {
    background: black;
    color: white;
  }
  :focus-visible {
    outline-offset: 4px;
  }
`;

export default Button;