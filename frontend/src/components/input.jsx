import React from 'react';
import styled from 'styled-components';

const InputWrap = styled.div`
  margin-bottom: 8px;
  position: relative;
  overflow: hidden;

  &::last-of-type {
    margin-bottom: 0;
  }
`
const StyledInput = styled.input`
  font-family: 'ApercuArabicPro', 'Segoe UI', 'Roboto', sans-serif;
  line-height: 1.3;
  font-size: 18px;
  font-weight: 400;
  width: 100%;
  min-height: 90px;
  box-sizing: border-box;
  padding: var(--input-padding, 20px);
  border: var(--border-color, #000) solid thin;
  color: var(--text-primary-color, #000);
  caret-color: var(--text-primary-color, #000);
  border-radius: 10px;
  background: ${(p) => p.isOk
    ? 'linear-gradient(to top, var(--correct-color, green) 0%, rgba(255, 255, 255, 0.0001) 5%)'
    : 'linear-gradient(to top, var(--error-color, red) 0%, rgba(0, 0, 0, .0001) 5%)'
  }; 
  
  &::placeholder {
    font-family: inherit;
    line-height: inherit;
    font-size: inherit;
    font-weight: inherit;
    color: var(--text-secondary-color, #000);
  }
  &:focus {
    box-shadow: inset var(--border-color, #000) 0 4px 2px 2px;
    outline: none;
  }
  `

const Input = ({
  type, value, name, placeholder, onChange, rows, label, isOk
}) => (
  <InputWrap>
    <label htmlFor={name}>{!!label && label}</label>
    <StyledInput
      as={type === 'textarea' ? 'textarea' : 'input'}
      value={value}
      type={type}
      name={name}
      onChange={onChange}
      placeholder={placeholder}
      rows={rows}
      isOk={isOk}
      noValidate
    />
  </InputWrap>
);

export default Input;
