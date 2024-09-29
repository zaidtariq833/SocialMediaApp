"use client";
import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, Stack } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import Link from 'next/link';
import InterestsIcon from '@mui/icons-material/Interests';

const SignUpSection = () => {
  return (
    <div className='border-red-400'>
      <h1 className='text-center text-4xl font-black sm:text-md'><InterestsIcon className='text-pink-600 mr-2'/>Sign Up</h1>
      <Box
      component="form"
      sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
      noValidate
      autoComplete="off"
    >
      <div className= 'flex flex-col gap-8 !w-3/4 !mt-6 !m-auto' >
      <TextField id="outlined-basic" label="Enter Username" variant="outlined"/>
      <TextField id="outlined-basic" label="Enter Email" variant="outlined" />
      <TextField id="outlined-basic" label="Enter Password" variant="outlined" />
      <Button className='w-full text-nowrap text-sm p-3 flex gap-2 !bg-[#CF9FFF] !text-white'>Sign Up</Button>
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
