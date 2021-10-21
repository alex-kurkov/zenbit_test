import React, { useState, useEffect, useCallback } from 'react';
import { Input, Button } from '.';
import styled from 'styled-components';
import { useLocalStorage } from '../utils/hooks';
import { validate } from '../utils/validation';

const StyledForm = styled.form`
  width: 100%;
  padding: 180px 2px 20px 2px;
  @media screen and (max-width: 961px) {
    padding: 20px 2px;
  }
  @media screen and (max-width: 476px) {
    padding: 10px 2px;
  }
`
const StyledLegend = styled.legend`
  font-family: 'ApercuArabicPro', 'Segoe UI', 'Roboto', sans-serif;
  line-height: 1.3;
  font-size: 40px;
  font-weight: 400;
  margin-bottom: 12px;
  @media screen and (max-width: 476px) {
    font-size: 32px;
  }
`
const ActionsWrap = styled.div`
  display: flex;
  gap: 8px;
`
const ErrorsWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`
const ErrorText = styled.span`
  font-family: 'ApercuArabicPro', 'Segoe UI', 'Roboto', sans-serif;
  line-height: 1;
  font-size: 14px;
  font-weight: 400;
  color: var(--error-color, red);
`

const FeedbackForm = () => {
  const [ values, setValues ] = useLocalStorage('formValues', {
    name: '',
    email: '',
    message: ''
  });
  const [ errors, setErrors ] = useState({
    name: {
      isOk: false,
      text: 'name is required'
    },
    email: {
      isOk: false,
      text: 'email is required'
    },
    message: {
      isOk: true,
      text: 'message is required'
    },
  })
  const [ isValidForm, setIsValidForm ] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  }
  const postMessage = (e) => {
    e.preventDefault();
    // need to do as promise
    /*     api.postMessage(values)
    .then(() => {
      setValues({
        name: '',
          email: '',
          message: ''
        })
      })
      .catch((e) => {
        // set error, returned by backend
      }) */
      console.log('posting');
      setValues({
        name: '',
        email: '',
        message: ''
      });

  }


  const getAllValuesValidStatus = useCallback(() => {
    return errors.name.isOk && errors.email.isOk && errors.message.isOk; 
    }, [errors]
  );

  useEffect(() => {
    setIsValidForm(getAllValuesValidStatus());
  }, [errors, getAllValuesValidStatus]);

  useEffect(() => {
    const updatedErrors = {};
    Object.entries(values).forEach(([key, value]) => {
      const [ isOk, text ] = validate(key, value);
      updatedErrors[key] = { isOk, text };
    });
    setErrors(updatedErrors);
  }, [values]);


  return (
    <StyledForm name="feedback-form" onSubmit={postMessage} >
      <StyledLegend>Reach out to us!</StyledLegend>
      <Input 
        type="text"
        value={values.name}
        name="name"
        placeholder="Your name *"
        onChange={handleChange}
        isOk={errors.name.isOk}
        noValidate
      />
      <Input 
        type="email"
        value={values.email}
        name="email"
        placeholder="Your email *"
        onChange={handleChange}
        isOk={errors.email.isOk}
        noValidate
      />
      <Input 
        type="textarea"
        rows={3}
        value={values.message}
        name="message"
        placeholder="Your message *"
        onChange={handleChange}
        isOk={errors.message.isOk}
        noValidate
      />
      <ActionsWrap>
        <Button type="submit" isDisabled={!isValidForm}>Send message</Button>
        <ErrorsWrap>
          {['name', 'email', 'message'].map((err, idx) => (
            !errors[err].isOk &&
            <ErrorText key={err.toString() + idx}>{errors[err].text}</ErrorText>
          ))}
        </ErrorsWrap>

      </ActionsWrap>
    </StyledForm>
  )
};

export default FeedbackForm;
