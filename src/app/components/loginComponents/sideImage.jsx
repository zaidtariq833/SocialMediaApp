"use client"
import Image from 'next/image';
import React from 'react'

const SideImages = () => {
  return (
  <>
    <div>
      <>
      <h1 className='absolute text-white text-5xl text-center top-[200px] font-bold z-10 sm:text-3xl md:text-3xl lg:text-4xl'>Connect with your friends, family and loved ones. &#128151;</h1>
      <Image src="/login-page-1.jpg" className='w-full h-[552px]' width={800} height={100} alt="ss" layout='resposnive' priority/>
      </>
    </div>
  </>
  )
}

export default SideImages
