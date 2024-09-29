"use client"
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import React from 'react'

const SideImages = () => {
  const path = usePathname()
  return (
  <>
  {path === "/login" ? (
    <div>
      <>
      <h1 className='absolute text-white text-5xl text-center top-[200px] font-bold z-10 sm:text-3xl md:text-3xl lg:text-4xl'>Connect with your friends, family and loved ones. &#128151;</h1>
      <Image src="/login-page-3.jpg" className='w-full !h-[552px]' width={800} height={100} alt="Login Image" layout='responsive' priority/>
      </>
    </div>
  ) : (
    <div>
      <>
      <h1 className='absolute text-white text-5xl text-center top-[200px] font-bold z-10 sm:text-3xl md:text-3xl lg:text-4xl'>Sign Up to browse people stories, updates and more... &#128151;</h1>
      <Image src="/login-page-2.jpg" className='w-full h-[552px]' width={800} height={0} alt="Sign Up Image" layout='responsive' priority/>
      </>
    </div>
  )}
  </>
  )
}

export default SideImages
