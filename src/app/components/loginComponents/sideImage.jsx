"use client"
import Image from 'next/image';
import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

// import Slider from 'react-slick'

const SideImages = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };
  return (
  <>
   <Slider {...settings}>
    <div>
      <Image src="/login-page-1.jpg" className='' width={800} height={500} alt="ss" layout='resposnive' priority/>
    </div>
    <div>
      <Image src="/login-page-1.jpg" width={800} height={50} alt="ss" layout='resposnive' priority/>
    </div>
    <div>
      <Image src="/login-page-1.jpg" width={800} height={50} alt="ss" layout='resposnive' priority/>
    </div>
  </Slider>
  </>
  )
}

export default SideImages
