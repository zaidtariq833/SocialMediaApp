import React from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid2';
import LoginSection from '../components/loginComponents/loginSection';

const page = () => {
  return (
    <div>
     <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid size={5}>
          {/* <Item>size=8</Item> */}
          <LoginSection />
        </Grid>

        <Grid size={7}>
          {/* <Item>size=4</Item> */}
          two
        </Grid>
      </Grid>
    </Box>
    </div>
  )
}

export default page
