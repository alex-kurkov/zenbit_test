import React, { useState, useEffect } from 'react';
import { Input } from '.';
import styled from 'styled-components';
import { useLocalStorage } from '../utils/hooks';
import { validate } from '../utils/validation';

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
  
/*   const validateValue = (name, value) => {
    const [ isOk, text ] = validate(name, value);
    const updatedErrors = { ...errors, [name]: {isOk, text} }; 
    console.log('updatedErrors: ', updatedErrors)
    setErrors(updatedErrors);
  } */
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
    console.log(errors);
  }, [errors]);

  useEffect(() => {
    const updatedErrors = {};
    Object.entries(values).forEach(([key, value]) => {
      const [ isOk, text ] = validate(key, value);
      updatedErrors[key] = { isOk, text };
    });
    console.log('updatedErrors: ', updatedErrors)
    setErrors(updatedErrors);
  }, [values]);

/*   useEffect(() => {
    validateValue('name', values.name)
  }, [values]);
  useEffect(() => {
    validateValue('email', values.email)
  }, [values.email]);
  useEffect(() => {
    validateValue('message', values.message)
  }, [values.message]); */

  return (
    <form name="feedback-form" onSubmit={postMessage} >
      <legend>Reach out to us!</legend>
      <Input 
        type="text"
        value={values.name}
        name="name"
        onFocus={() => console.log('enable live validadion')}
        onBlur={() => setIsValidForm(getAllValuesValidStatus())}
        placeholder="Your name *"
        onChange={handleChange}
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
        noValidate
      />
      <button type="submit" disabled={!isValidForm}>Send message</button>
      <div>
        {['name', 'email', 'message'].map((err, idx) => (
          !errors[err].isOk &&
          <span key={errors[err].text + idx}>{errors[err].text}</span>
        ))}
      </div>
    </form>
  )
};

export default FeedbackForm;
