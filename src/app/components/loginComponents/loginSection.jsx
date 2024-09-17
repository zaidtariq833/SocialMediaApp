import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, Stack } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import Link from 'next/link';
import InterestsIcon from '@mui/icons-material/Interests';

const LoginSection = () => {
  return (
    <div>
      <h1 className='text-center text-4xl font-black sm:text-md mt-6'><InterestsIcon className='text-pink-600 mr-2'/>Login</h1>
      <Box
      component="form"
      sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
      noValidate
      autoComplete="off"
    >
      <div className= 'flex flex-col gap-8 !w-3/4 !mt-6 !m-auto' >
      <TextField id="outlined-basic" label="Enter Email" variant="outlined" />
      <TextField id="outlined-basic" label="Enter Password" variant="outlined" />
      <Stack spacing={2}>
      <Button variant="contained" className='w-full text-nowrap text-sm p-5 flex gap-2'><GoogleIcon />Continue with Google</Button>
      <Button variant="contained" className='w-full text-sm p-5 text-nowrap flex gap-2'><LocalPhoneIcon/>Continue with Phone</Button>
      </Stack>
      <div className='flex justify-between relative top-[-5px]'>
      <Link href={ "/signup" } className= "text-sm underline text-red-500">New member ? Sign up</Link>
       <Link href = {`/forgot-password`} className= "text-sm underline text-red-500">Forgot your password?</Link>
       </div>
      </div>
    </Box>
    </div>
  )
}

export default LoginSection
