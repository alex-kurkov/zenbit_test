import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  width: 218px;
  height: 72px;
  font-family: 'ApercuArabicPro', 'Segoe UI', 'Roboto', sans-serif;
  line-height: 1.3;
  font-size: 18px;
  font-weight: 400;
  background: var(--yellow-color, yellow);
  color: var(--text-contrast-color, #000);
  border: none;
  border-radius: 36px;
  cursor: pointer;
  
  opacity: ${(p) => p.isDisabled &&
  `
    cursor: default;
    pointer-events: none;
    opacity: .7;
  `
  };

  @media screen and (max-width: 961px) {
      width: 45%;
    }
`
const Button = ({onClick = () => {}, type, isDisabled, children}) => (
  <StyledButton 
    onClick={onClick}
    type={type}
    isDisabled={isDisabled}
  >
      {children}
  </StyledButton>
)

export default Button;
