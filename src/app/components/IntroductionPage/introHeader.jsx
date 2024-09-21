import { Button, Grid } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import IntroCardSection from './introCardSection';


const IntroHeader = () => {
  return (
    <main className=''>
      <header className='bg-[#800080]'>
      <div className='flex items-center justify-center'>
      <i className='text-center  p-2 text-white'>
      Welcome to Connectly! Chat with your friends, family and loved ones!
      </i>
      <p>&#128151;</p>
      </div> 
      </header>
      <nav>
      {/* <Grid container spacing={2}> */}
      <div className='flex items-center justify-between p-10'>
        <Image src={"/logo.png"} width={150} height={150} alt='Connectly Logo' className=''/>
        <Button className = "!bg-[#CF9FFF] text-white hover:bg-[#800080] transition-all">Join Now</Button>
        </div>
       
     {/* </Grid> */}
      </nav>
      <section>
      <Grid className='px-10'>
        <div className='flex justify-between'>
          <Grid size = {8}>
          <b className='text-sm'>MAKE YOUR CONTENT TODAY</b>
          <h1 className='text-7xl font-bold tracking-wider'>Scaling Up Content <p className='!text-[#CF9FFF]'>Influencer</p>Campaigns</h1>
          <p className='mt-5'> <i>Welcome to <i className='text-[#CF9FFF] font-bold'>Connectly</i>, where connections flourish and every voice matters! Join us in sharing stories, discovering new perspectives, and building a vibrant community.</i></p>
          <Button className = "!bg-[#CF9FFF] text-white hover:bg-[#800080] transition-all mt-5">Join Now</Button>
          </Grid>
          <Grid size = {4}>
          <Image src = {"/social-media-into.jpg"} width={500} height={400} className='rounded-lg h-96 object-cover'/>
          </Grid>
          </div>
        </Grid>
      </section>
      <section>
        <IntroCardSection />
      </section>
    </main>
  )
}

export default IntroHeader
