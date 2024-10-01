import React from 'react'
import { setEmailUser } from '../../redux/slices/loginSlice';
import { useDispatch } from 'react-redux';

const useValidateEmail = (email) => {
    const dispatch = useDispatch()
    const ValidateEmail = (email) => {
        let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (email.match(validRegex)) {
          return true;
        } else {
          dispatch(setEmailUser("Invalid email address!"));
          return false;      
        }
      }

  const validateEmail = ValidateEmail(email)
  return validateEmail
}

export default useValidateEmail
