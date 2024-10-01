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


const LoginSection = () => {
  const emailUser  = useSelector((state) => state.user.emailUser)
  console.log(emailUser, "email userss")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const emailValidation = (e) => {
    console.log(e.target.value, "event value")
    setEmail(e.target.value)
    const emailValidate = useValidateEmail(e.target.value)
    console.log(emailValidate, "emails")
    
  }
  console.log(email, "email target value")

  const passwordValidation = (e) => {
    console.log(e.target.value, "password validation")
  }

  const submitUserDetails = () => {
    alert("hello world")
  }

  const detailsCheck = email === "" || password === ""

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
      <TextField id="outlined-basic" label="Enter Email" variant="outlined" name = "email" value = {email} onChange={(e) => emailValidation(e)}/>
      <TextField id="outlined-basic" label="Enter Password" variant="outlined" name = "password" value = {password} onChange={passwordValidation}/>
      <Button className={`w-full text-nowrap text-sm p-3 flex gap-2 ${detailsCheck ? "!bg-slate-600" : "!bg-[#CF9FFF]"} !text-white select-none ${detailsCheck ? "!cursor-not-allowed" : "cursor-pointer"}`} disabled = {detailsCheck}>Login</Button>
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
