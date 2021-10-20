import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
  width: 100%;
  height: 60px;
  padding: var(--input-padding, 20px);
  border: var(--border-color, #000) solid thin;
  border-radius: 10px;
  color: var(--text-secondary-color, #000);
  caret-color: var(--text-secondary-color, #000);

  &:focus {
    outline: none;
  }
`

const Input = ({
  type, value, name, onFocus, onBlur, placeholder, onChange, rows, label,
}) => (
  <>
    <label htmlFor={name}>{!!label && label}</label>
    <StyledInput
      as={type === 'textarea' ? 'textarea' : 'input'}
      value={value}
      type={type}
      name={name}
      onChange={onChange}
      onFocus={onFocus}
      onBlur={onBlur}
      placeholder={placeholder}
      rows={rows}
      noValidate
    />
  </>
);

export default Input;
