import React, { useState, useEffect } from 'react';
import { Input } from '.';
import styled from 'styled-components';
import { useLocalStorage } from '../utils/hooks';
import { validate } from '../utils/validation';

const StyledForm = styled.form`
  width: 100%;
  padding: 2px;
`
const StyledLegend = styled.legend`
  font-family: 'ApercuArabicPro', 'Segoe UI', 'Roboto', sans-serif;
  line-height: 1.3;
  font-size: 40px;
  font-weight: 400;
  margin-bottom: 30px;
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


  const getAllValuesValidStatus = () => 
    errors.name.isOk && errors.email.isOk && errors.message.isOk;

  useEffect(() => {
    setIsValidForm(getAllValuesValidStatus());
  }, [errors]);

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
        onFocus={() => console.log('enable live validadion')}
        onBlur={() => setIsValidForm(getAllValuesValidStatus())}
        placeholder="Your name *"
        onChange={handleChange}
        isOk={errors.name.isOk}
        noValidate
      />
      <Input 
        type="email"
        value={values.email}
        name="email"
        onFocus={() => console.log('enable live validadion')}
        onBlur={() => setIsValidForm(getAllValuesValidStatus())}
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
        onFocus={() => console.log('enable live validadion')}
        onBlur={() => setIsValidForm(getAllValuesValidStatus())}
        placeholder="Your message *"
        onChange={handleChange}
        isOk={errors.message.isOk}
        noValidate
      />
      <button type="submit" disabled={!isValidForm}>Send message</button>
      <div>
        {['name', 'email', 'message'].map((err, idx) => (
          !errors[err].isOk &&
          <span key={errors[err].text + idx}>{errors[err].text}</span>
        ))}
      </div>
    </StyledForm>
  )
};

export default FeedbackForm;
