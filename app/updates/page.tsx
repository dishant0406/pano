import React from 'react'
import localFont from 'next/font/local'
import NavBar from '@/Components/Micro/Nav'
import Footer from '@/Components/Micro/Footer'
import Step from '@/Components/Micro/Step'

type Props = {}

const azonix = localFont({
  src: '../../public/fonts/azonix.woff2',
})



const About = (props: Props) => {
  return (
    <div className='w-full'>
      <NavBar />
      <div className='w-full py-[10vh] flex flex-col items-center'>
        <p className={`text-white text-[5vh] ${azonix.className} font-bold`}>Roadmap</p>

      </div>
      <div className='w-full mb-[10vh] relative flex h-[200vh] justify-center'>
        <div className='absolute w-full h-full flex items-center justify-center'>
          <div style={{
            background: 'radial-gradient(103725994.26% 84.24% at 50% 49.16%, #F4C55C 0%, #000 88.54%)'
          }} className='w-[3px] h-full'></div>
        </div>
        <div className='absolute  w-full h-full flex flex-col items-center justify-between'>
          <Step left={true} completed title='Launch of Pano' />
          <Step completed title='Dextools Update' />
          <Step title='Community Development' left />
          <Step completed title='Coingeko Listing' />
          <Step title='Twitter Raids' left />
          <Step title='Increase LP Gradually' />
          <Step title='Marketing Begins' left />
          <Step title='Alpha Callers' />
          <Step left title={'AMA  + Paid Collaborations'} />
          <Step upcoming title={'Influencer Marketing'} />
        </div>
      </div>
      <div className='w-full py-[10vh] flex flex-col items-center'>
        <p className={`text-white text-[7vh] ${azonix.className} font-bold`}>Q1-24</p>

      </div>
      <div className='w-full mb-[10vh] relative flex h-[100vh] justify-center'>
        <div className='absolute w-full h-full flex items-center justify-center'>
          <div style={{
            background: 'radial-gradient(103725994.26% 84.24% at 50% 49.16%, #F4C55C 0%, #000 88.54%)'
          }} className='w-[3px] h-full'></div>
        </div>
        <div className='absolute opacity-50 w-full h-full flex flex-col items-center justify-between'>
          <Step left={true} completed title='Alpha testing' />
          <Step completed title='Beta Testing' />
          <Step completed title='Marketing for Game Begins' left />
          <Step completed title='Launch of Game' />
        </div>
      </div>
      <div className='w-full flex justify-center z-0'>
        <img src='/assets/images/mandal2.png' alt='cta' className='w-[50vw] h-auto' />
      </div>
      <Footer />
    </div>
  )
}

export default About