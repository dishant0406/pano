'use client'

import Image from 'next/image'
import React, { useEffect, useRef } from 'react'

type Props = {}

const cardStyles = {
  borderRadius: '20px',
  background: 'var(--ffffff, rgba(255, 255, 255, 0.10))',
  backdropFilter: 'blur(12.601908683776855px)'
}



const CardWrapper = ({ children }: any) => {
  return (
    <div style={cardStyles} className={'md:w-[30vw] w-[90vw] hover:border-[#fcc054] cursor-pointer transition-all duration-300 border-white border  flex items-center justify-center h-[10vh]'}>
      {children}
    </div>
  )
}

const Tokenomics = (props: Props) => {
  const imageRef = useRef<HTMLImageElement>(null)
  const imageRef2 = useRef<HTMLImageElement>(null)

  useEffect(() => {
    //rotate on scroll
    const handleScroll = () => {
      if (imageRef.current) {
        imageRef.current.style.transform = `rotate(${window.scrollY / 5}deg)`
      }
      if (imageRef2.current) {
        imageRef2.current.style.transform = `rotate(-${window.scrollY / 5}deg)`
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }
    , [])

  return (
    <div className='my-[5vh] overflow-hidden px-[10%] py-[2%] relative md:h-[70vh] w-full'>
      <Image ref={imageRef} alt='mandal' src='/assets/images/util/coin.png' height={2000} width={2000} className='absolute md:inline-block hidden top-0 right-[-18%] w-auto h-full' />
      <Image ref={imageRef2} alt='mandal' src='/assets/images/util/coin.png' height={2000} width={2000} className='absolute md:inline-block hidden top-0 left-[-18%] w-auto h-full' />
      <p className='text-white w-full text-center text-[6vh] '>
        Tokenomics
      </p>
      <div className='mt-[3%] flex items-center flex-col gap-[2rem]'>
        <CardWrapper>
          <p className='text-white  text-[2.5vh]'>
            Max Supply: 28M $PANO
          </p>
        </CardWrapper>
        <CardWrapper>
          <p className='text-white  text-[2.5vh]'>
            Circulating Supply: 28M $PANO
          </p>
        </CardWrapper>
        <CardWrapper>
          <p className='text-white  text-[2.5vh]'>
            Buy/Sell = 5% Tax
          </p>
        </CardWrapper>
      </div>
    </div>
  )
}

export default Tokenomics