"use client"
import React, { useMemo } from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import LoginSection from './loginSection';
import SideImages from './sideImage';
import useWindowDimensions from '../../../../utils/hooks/useWindowDimensions';
import { usePathname } from 'next/navigation';
import SignUpSection from './signUpSection';

const CheckBrowser = () => {
  const windowDimension = useWindowDimensions()
  const path = usePathname() 
  return (
    <>
    {path === "/login" ? (
      <>
      <div className='h-full'>
      {windowDimension >= 768 ? (
          <Box sx={{ flexGrow: 1 }}>
       <Grid container spacing={2}>
         <Grid size={5}>
         <div className = "p-3">
           <LoginSection />
           </div>
         </Grid>
         <Grid size={7}>
           <SideImages />
         </Grid>
       </Grid>
     </Box>
       ) : (
          <Box sx={{ flexGrow: 1 }}>
       <Grid container spacing={2}>
         <Grid size={12}>
          <div className='p-3'>
           <LoginSection />
           </div>
         </Grid>
       </Grid>
     </Box>
      )} 
      </div>
      </>
    ) : (
      <>
      <div className='h-full'>
      {windowDimension >= 768 ? (
          <Box sx={{ flexGrow: 1 }}>
       <Grid container spacing={2}>
         <Grid size={5}>
         <div className = "p-3">
           <SignUpSection />
           </div>
         </Grid>
         <Grid size={7}>
           <SideImages />
         </Grid>
       </Grid>
     </Box>
       ) : (
          <Box sx={{ flexGrow: 1 }}>
       <Grid container spacing={2}>
         <Grid size={12}>
          <div className='p-7'>
           <SignUpSection />
           </div>
         </Grid>
       </Grid>
     </Box>
      )} 
      </div>
</>
    )}
    </>
  )
}

export default CheckBrowser
