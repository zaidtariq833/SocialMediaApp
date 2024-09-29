import { Button, Grid } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import IntroCardSection from './introCardSection';
import Link from 'next/link';


const IntroHeader = () => {
  return (
    <main className=''>
      <header className='bg-[#800080]'>
      <div className='flex items-center justify-center'>
      <i className='text-center  p-2 text-white mobile:text-xs'>
      Welcome to Connectly! Chat with your friends, family and loved ones!
      </i>
      <p>&#128151;</p>
      </div> 
      </header>
      <nav>
      {/* <Grid container spacing={2}> */}
      <div className='flex mobile:flex-col largephone:flex-row items-center justify-between p-10'>
        <Image src={"/logo.png"} width={150} height={150} alt='Connectly Logo' className=''/>
        <Link href={"/sign-up"} className = "!bg-[#CF9FFF] p-3 rounded-md text-white hover:bg-[#800080] transition-all mobile:mt-5">Join Now</Link>
        </div>
       
     {/* </Grid> */}
      </nav>
      <section>
      <Grid className='px-10'>
        <div className='flex mobile:flex-col largephone:gap-2 tablet:flex-row justify-between'>
          <Grid size = {8}>
          <div className='mobile:whitespace-nowrap mobile:text-center mobile:mb-3 tablet:text-left'>
          <b className='text-sm mobile:text-md largephone:3xl desktop:text-4xl'>MAKE YOUR CONTENT TODAY</b>
          </div>
          <h1 className='text-7xl font-bold tracking-wider mobile:text-xl mobile:text-center largephone:tracking-normal tablet:text-left tablet:text-4xl laptop:text-5xl desktop:text-7xl'>Scaling Up Content <p className='!text-[#CF9FFF] mobile:text-4xl largephone:text-5xl desktop:text-7xl'>Influencer</p>Campaigns</h1>
          <p className='mt-5 mobile:text-justify'> <i>Welcome to <i className='text-[#CF9FFF] font-bold'>Connectly</i>, where connections flourish and every voice matters! Join us in sharing stories, discovering new perspectives, and building a vibrant community.</i></p>
          <Link href={"sign-up"} className = "!bg-[#CF9FFF] p-3 rounded-md text-white hover:bg-[#800080] transition-all mt-5 mobile:block mobile:w-2/4 mobile:m-auto mobile:mt-5 mobile:mb-5 laptop:w-fit laptop:m-0 laptop:mt-5">Join Now</Link>
          </Grid>
          <Grid size = {4}>
          <div className='largephone:block largephone:w-auto largephone:m-auto'>
          <Image src = {"/social-media-into.jpg"} width={500} height={400} className='rounded-lg h-96 object-cover'/>
          </div>
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
