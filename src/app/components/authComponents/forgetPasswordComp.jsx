"use client";
import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, Grid } from '@mui/material';
import InterestsIcon from '@mui/icons-material/Interests';
import Image from 'next/image';

const ForgetPassword = () => {
  return (
    <>
    <Box sx={{ flexGrow: 1 }}>
    <Grid container spacing={2} className='flex justify-center'>
    <Grid size={12}>
    <div className='border-red-400 flex flex-col items-center gap-6 justify-center h-[600px]'>
      <Image src = {"/logo.png"} width = {200} height = {200} />
      <h1 className='text-center text-4xl font-black mobile:text-base largephone:text-4xl'><InterestsIcon className='text-pink-600 mr-2'/>Forget Password</h1>
      <div className= 'flex flex-col gap-8 justify-center mobile:w-2/3 largephone:w-[300px]' >
      <TextField id="outlined-basic" label="Enter Email" variant="outlined" />
      <Button className='w-full text-nowrap text-sm p-3 flex gap-2 !bg-[#CF9FFF] !text-white'>Reset Password</Button>
      </div>
    </div>
    </Grid> 
    </Grid>
    </Box>
    </>
  )
}

export default ForgetPassword
