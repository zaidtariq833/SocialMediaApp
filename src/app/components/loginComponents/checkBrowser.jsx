"use client"
import React, { useMemo } from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import LoginSection from './loginSection';
import SideImages from './sideImage';
import useWindowDimensions from '../../../../utils/hooks/useWindowDimensions';

const CheckBrowser = () => {
//   const browserWidth = window.innerWidth;
  const windowDimension = useWindowDimensions()
//   console.log(browserWidth, "browser width")
//   const windowDimensions = useMemo(() => {
    //   return windowDimension
//   }, [browserWidth])
  
  return (
    <div className='h-full'>
    {windowDimension >= 768 ? (
        <Box sx={{ flexGrow: 1 }}>
     <Grid container spacing={2}>
       <Grid size={5}>
       <div className = "p-7">
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
        <div className='p-7'>
         <LoginSection />
         </div>
       </Grid>
     </Grid>
   </Box>
    )} 

   </div>
  )
}

export default CheckBrowser
