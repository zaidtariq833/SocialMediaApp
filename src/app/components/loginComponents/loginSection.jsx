import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, Stack } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import Link from 'next/link';
import Style from './Style.module.css'
import cn from "classnames"

const LoginSection = () => {
  return (
    <div>
      <h1 className='text-center text-7xl font-black'>Login</h1>
      <Box
      component="form"
      sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
      noValidate
      autoComplete="off"
    >
      <div className= {cn('flex flex-col gap-8', Style.loginDiv)} >
      <TextField id="outlined-basic" label="Enter Email" variant="outlined" />
      <TextField id="outlined-basic" label="Enter Password" variant="outlined" />
      <Stack spacing={2}>
      <Button variant="contained" className='w-full text-nowrap text-sm p-5'><GoogleIcon />Continue with Google</Button>
      <Button variant="contained" className='w-full text-sm p-5 text-nowrap'><LocalPhoneIcon/>Continue with Phone</Button>
      </Stack>
       <Link href = {`/forgot-password`} className= "text-end relative top-[-5] text-sm">Forgot your password?</Link>
      </div>
    </Box>
    </div>
  )
}

export default LoginSection
