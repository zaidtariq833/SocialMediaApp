import React, { useState } from 'react'
import { setEmailUser } from '../../redux/slices/loginSlice';
import { useDispatch, useSelector } from 'react-redux';

const useValidateEmail = (email) => {
  // const {emailUser} = useSelector((state) => state.user)
    const [emailVerify, setEmailVerify] = useState("")
    // const dispatch = useDispatch()
    const ValidateEmail = (email) => {
        let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (email.match(validRegex)) {
          setEmailVerify(email)
          return emailVerify;
        } else {
          setEmailVerify(email);
          return emailVerify;      
        }
      }

  const validateEmail = ValidateEmail(email)
  console.log(validateEmail, "validation of email")
  return validateEmail
}

export default useValidateEmail
