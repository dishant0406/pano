import Avatar from '@/Components/Micro/Avatar'
import CTA from '@/Components/Micro/CTA'
import Details from '@/Components/Micro/Details'
import Footer from '@/Components/Micro/Footer'
import NavBar from '@/Components/Micro/Nav'
import NavLink from '@/Components/Micro/Nav/NavLink'
import RoadMap from '@/Components/Micro/RoadMap'
import Tokenomics from '@/Components/Micro/Tokenomics'
import VideoPlayer from '@/Components/Micro/VideoPlayer'
import WhatIsPano from '@/Components/Micro/WhatIsPano'
import WhyTax from '@/Components/Micro/WhyTax'
import Image from 'next/image'


export default function Home() {
  return (
    <>

      <div className='relative'>
        <div className='h-[100vh] my-shadow bg-black/20 w-full '>
          <NavBar />
          <div className='w-full h-[calc(100%-100px)] flex items-center justify-center'>
            <Image alt='Welcome to Panoverse' src='/assets/svg/welcome.svg' className='md:w-[40%] ' width={700} height={700} />
          </div>
        </div>
        <VideoPlayer />
        <div style={{
          boxShadow: '0px 0px 25px 30px rgba(0,0,0,1)'
        }} className='absolute w-full bottom-[-2%] h-[4rem] bg-black' />
      </div>
      <Avatar />
      <WhatIsPano />
      <Details />
      <Tokenomics />
      <WhyTax />
      <div className='relative'>
        <img src='/assets/svg/bg-grad.svg' alt='bg' className='h-[100%] w-auto absolute top-0 right-0' />
        {/* <RoadMap /> */}
        <CTA />
      </div>
      <Footer />
    </>
  )
}
