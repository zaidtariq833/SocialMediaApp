"use client";
import React, { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, Stack } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import Link from 'next/link';
import InterestsIcon from '@mui/icons-material/Interests';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useValidateEmail from '../../../../utils/hooks/useValidateEmail';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';


const LoginSection = () => {
  const { emailUser } = useSelector((state) => state.user)
  const [emailVerified, setEmailVerified] = useState("")
  const [emailErr, setEmailErr] = useState("")
  const [passwordVerified, setPasswordVerified] = useState("")
  const [passwordErr, setPasswordErr] = useState("")
  const {push} = useRouter()
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

  const submitUserDetails = (e) => {
    e.preventDefault()
    push("/feed")
  }

  const errorAuth = emailErr !== "" || passwordErr !== ""
  const authEmpty = emailVerified === "" || passwordVerified === ""
  const detailsCheck = errorAuth || authEmpty 

  return (
    <div className='border-red-400'>
      <h1 className='text-center text-4xl font-black sm:text-md mt-6'><InterestsIcon className='text-pink-600 mr-2'/>Login</h1>
      <Box
      component="form"
      sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
      noValidate
      autoComplete="off"
      onSubmit={submitUserDetails}
    >
      <div className= 'flex flex-col gap-8 !w-3/4 !mt-6 !m-auto' >
      <TextField id="outlined-basic" label="Enter Email" variant="outlined" name = "emailVerified" value = {emailVerified} onChange={(e) => emailValidation(e)}/>
      {emailVerified !== "" && emailErr !== "" && <span className='error'>{emailErr}</span>}
      <TextField id="outlined-basic" label="Enter Password" variant="outlined" name = "passwordVerified" value = {passwordVerified} onChange={(e) => passwordValidation(e)}/>
      {passwordVerified !== "" && passwordErr !== "" && <span className='error'>{passwordErr}</span>}
      <Button className={`w-full text-nowrap text-sm p-3 flex gap-2 ${detailsCheck ? "!bg-slate-600" : "!bg-[#CF9FFF]"} !text-white select-none ${detailsCheck ? "!cursor-not-allowed" : "cursor-pointer"}`} disabled = {detailsCheck} type='submit'>Login</Button>
      <Stack spacing={2}>
      <Button variant="contained" className='w-full text-nowrap text-sm p-3 flex gap-2 !bg-[#800080]'><GoogleIcon />Continue with Google</Button>
      <Button variant="contained" className='w-full text-sm p-3 text-nowrap flex gap-2 !bg-[#800080]'><LocalPhoneIcon/>Continue with Phone</Button>
      </Stack>
      <div className='flex justify-between relative top-[-5px]'>
      <Link href={ "/sign-up" } className= "text-sm underline text-[#800080] font-bold">New member ? Sign up</Link>
       <Link href = {`/forgot-password`} className= "text-sm underline text-[#800080] font-bold">Forgot your password?</Link>
       </div>
      </div>
    </Box>
    </div>
  )
}

export default LoginSection
