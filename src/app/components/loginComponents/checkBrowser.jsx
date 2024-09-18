"use client"
import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import LoginSection from './loginSection';
import SideImages from './sideImage';
import useWindowDimensions from '../../../../utils/hooks/useWindowDimensions';

const CheckBrowser = () => {
  const browserWidth = window.innerWidth;
  const windowDimensions = useWindowDimensions(browserWidth)
  return (
    <div className='h-full'>
    {windowDimensions >= 768 ? (
        <Box sx={{ flexGrow: 1 }}>
     <Grid container spacing={2}>
       <Grid size={5}>
         <LoginSection />
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
         <LoginSection />
       </Grid>
     </Grid>
   </Box>
    )}
 
   </div>
  )
}

export default CheckBrowser
