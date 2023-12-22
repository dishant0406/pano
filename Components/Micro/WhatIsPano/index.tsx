import Image from 'next/image'
import React from 'react'

type Props = {}

const WhatIsPano = (props: Props) => {
  return (
    <div className='h-[70vh] w-full overflow-x-hidden bg-black flex flex-col items-center justify-center'>
      <p className='text-white text-center text-[5vh] md:text-[6vh] '>What is <span className='text-[#fcc054]'>$PANO</span> ?</p>
      <div className='h-auto bg-sha-out-1 w-full'>
        <div className='h-[50vh] relative bg-sha-1 w-full flex leading-[3.5vh] py-[2%] flex-col items-center'>
          <Image alt='bg' className='w-full absolute top-0 left-0 z-[0] object-fill h-full' height={1000} width={1000} src='/assets/images/sections/whatpano.png' />
          <p className='text-white md:px-0 px-[2%] text-center z-[1] text-[2vh]'>
            $PANO is not just another cryptocurrency; it is the lifeblood of our immersive gaming universe. As an artist-driven project,<br /> we are creating a unique gaming experience where players can immerse themselves in captivating virtual worlds, conquer<br /> challenges, and earn real rewards powered by $PANO .
          </p>
          <a href='https://medium.com/@PanoVerse/panoverse-the-ultimate-play-to-earn-adventure-c0f5edfe21e6' target='__blank' className='text-[#fcc054] mt-[2%] z-[1] text-center text-[2vh]'>
            read more
          </a>
        </div>
      </div>
    </div>
  )
}

export default WhatIsPano