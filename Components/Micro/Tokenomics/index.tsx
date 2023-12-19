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
    <div style={cardStyles} className={'w-[30vw] hover:border-[#fcc054] cursor-pointer transition-all duration-300 border-white border  flex items-center justify-center h-[10vh]'}>
      {children}
    </div>
  )
}

const Tokenomics = (props: Props) => {
  const imageRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    //rotate on scroll
    const handleScroll = () => {
      if (imageRef.current) {
        imageRef.current.style.transform = `rotate(${window.scrollY / 5}deg)`
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }
    , [])

  return (
    <div className='my-[5vh] overflow-hidden px-[10%] py-[2%] relative h-[70vh] w-full'>
      <Image ref={imageRef} alt='mandal' src='/assets/images/util/coin.png' height={2000} width={2000} className='absolute top-0 right-[-18%] w-auto h-full' />
      <p className='text-white text-[6vh] '>
        Tokenomics
      </p>
      <div className='mt-[3%] flex flex-col gap-[2rem]'>
        <CardWrapper>
          <p className='text-white  text-[2vh]'>
            Max Supply: 28M $PANO
          </p>
        </CardWrapper>
        <CardWrapper>
          <p className='text-white  text-[2vh]'>
            Circulating Supply: 28M $PANO
          </p>
        </CardWrapper>
        <CardWrapper>
          <p className='text-white  text-[2vh]'>
            Buy/Sell = 5% Tax
          </p>
        </CardWrapper>
      </div>
    </div>
  )
}

export default Tokenomics