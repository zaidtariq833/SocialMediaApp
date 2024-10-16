"use client";
import React, { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, Stack } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import Link from 'next/link';
import InterestsIcon from '@mui/icons-material/Interests';
import { useRouter } from 'next/navigation';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { signUpUser } from '../../../../utils/firebaseUtils/auth';

const SignUpSection = () => {
  const [usernameVerified, setUserNameVerified] = useState("")
  const [userNameErr, setUserNameErr] = useState("")
  const [emailVerified, setEmailVerified] = useState("")
  const [emailErr, setEmailErr] = useState("")
  const [passwordVerified, setPasswordVerified] = useState("")
  const [passwordErr, setPasswordErr] = useState("")
  const {push} = useRouter()
  const userNames = ["zaid_02", "zaid_22", "zaid456", "zaid999"]

  const userNameValidation = (e) => {
    const value = e.target.value
    setUserNameVerified(value)
    const lowerCaseValue = value.toLowerCase()
    if(userNames.includes(lowerCaseValue)){
      setUserNameErr("This username already exist! please try another!")
    } else {
      setUserNameErr("")
    }
  }

  const emailValidation = (e) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const email = e.target.value
    setEmailVerified(email)
    console.log(email, "email verified")
    if(email.match(emailRegex)){
      setEmailErr("")
    } else {
      setEmailErr("Invalid Email Address!")
    }
  }
  const passwordValidation = (e) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const password = e.target.value
    setPasswordVerified(password)
    if(password.match(passwordRegex)){
      setPasswordErr("")
    } else{
      setPasswordErr("Password must be at least 8 characters long, at least one lowercase letter, at least one uppercase letter, at least one special character")
      setPasswordVerified(password)
    }
  }

  const submitUserDetails = () => {
    e.preventDefault()
    const abc = signUpUser(emailVerified, passwordVerified)
    console.log(abc, "abcdef")
    push("/login")
  }

  
  const errorAuth = emailErr !== "" || passwordErr !== ""
  const authEmpty = emailVerified === "" || passwordVerified === ""
  const detailsCheck = errorAuth || authEmpty 

  return (
    <div className='border-red-400'>
      <h1 className='text-center text-4xl font-black sm:text-md'><InterestsIcon className='text-pink-600 mr-2'/>Sign Up</h1>
      <Box
      component="form"
      sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
      noValidate
      autoComplete="off"
      onSubmit={submitUserDetails}
    >
      <div className= 'flex flex-col gap-8 !w-3/4 !mt-6 !m-auto' >
      <TextField id="outlined-basic" label="Enter Username" variant="outlined" name='usernameVerified' value={usernameVerified} onChange={(e) => userNameValidation(e)}/>
      {usernameVerified !== "" && userNameErr !== "" && <p className='error'>{userNameErr}</p>}
      <TextField id="outlined-basic" label="Enter Email" variant="outlined" name='emailVerified' value={emailVerified} onChange={(e) => emailValidation(e)}/>
      {emailVerified !== "" && emailErr !== "" && <p className='error'>{emailErr}</p>}
      <TextField id="outlined-basic" label="Enter Password" variant="outlined" name='passwordVerified' value={passwordVerified} onChange={(e) => passwordValidation(e)}/>
      {passwordVerified !== "" && passwordErr !== "" && <p className='error'>{passwordErr}</p>}
      <Button className={`w-full text-nowrap text-sm p-3 flex gap-2 ${detailsCheck ? "!bg-slate-600" : "!bg-[#CF9FFF]"} !text-white select-none ${detailsCheck ? "!cursor-not-allowed" : "cursor-pointer"}`} disabled = {detailsCheck} type='submit'>Sign Up</Button>
      <Stack spacing={2}>
      <Button variant="contained" className='w-full text-nowrap p-2 text-sm flex gap-2 !bg-[#800080]'><GoogleIcon />Signup with Google</Button>
      <Button variant="contained" className='w-full text-sm p-2 text-nowrap flex gap-2 !bg-[#800080]'><LocalPhoneIcon/>Signup with Phone</Button>
      </Stack>
      <div className='flex justify-between relative top-[-5px]'>
      <Link href={ "/login" } className= "text-sm underline text-[#800080] font-bold">Already a member ? Login</Link>
       <Link href = {`/forgot-password`} className= "text-sm underline text-[#800080] font-bold">Forgot your password?</Link>
       </div>
      </div>
    </Box>
    </div>
  )
}

export default SignUpSection
