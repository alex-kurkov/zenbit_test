import React, { useState, useEffect } from 'react';
import { Input } from '.';
import styled from 'styled-components';
import { useLocalStorage } from '../utils/hooks';

const FeedbackForm = () => {
  const [ values, setValues ] = useLocalStorage('formValues', {
    name: '',
    email: '',
    message: ''
  });
  const [ errors, setErrors ] = useState({
    name: {
      isOk: false,
      text: 'lkflk'
    },
    email: {
      isOk: false,
      text: '12233123'
    },
    message: {
      isOk: true,
      text: '%%%%%'
    },
  })
  const [ isValidForm, setIsValidForm ] = useState(false);

  const checkOverallValidity = () => {
    const isValid = errors.name.isOk
      && errors.email.isOk
      && errors.message.isOk;
    setIsValidForm(isValid);
  }
  useEffect(() => {
    checkOverallValidity();
  }, [values])

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
    //check validity
    //set errors
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


  return (
    <form name="feedback-form" onSubmit={postMessage} >
      <legend>Reach out to us!</legend>
      <Input 
        type="text"
        value={values.name}
        name="name"
        onFocus={() => console.log('enable live validadion')}
        onBlur={checkOverallValidity}
        placeholder="Your name *"
        onChange={handleChange}
        noValidate
      />
      <Input 
        type="email"
        value={values.email}
        name="email"
        onFocus={() => console.log('enable live validadion')}
        onBlur={checkOverallValidity}
        placeholder="Your email *"
        onChange={handleChange}
        noValidate
      />
      <Input 
        type="textarea"
        rows={3}
        value={values.message}
        name="message"
        onFocus={() => console.log('enable live validadion')}
        onBlur={checkOverallValidity}
        placeholder="Your message *"
        onChange={handleChange}
        noValidate
      />
      <button type="submit" disabled={!isValidForm}>Send message</button>
      <div>
        {['name', 'email', 'message'].map((err) => (
          !errors[err].isOk &&
          <span>{errors[err].text}</span>
        
        ))}
      </div>
    </form>
  )
};

export default FeedbackForm;
