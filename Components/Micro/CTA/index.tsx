import React from 'react'

type Props = {}

const CTA = (props: Props) => {
  return (
    <div className='w-full flex flex-col items-center overflow-hidden relative h-[90vh] mt-[10vh]'>
      <div className='w-full flex justify-center z-0 bottom-[-60%] left-0 absolute'>
        <img src='/assets/images/util/coin.png' alt='cta' className='w-[50vw] h-auto' />
      </div>
      <p className='text-white text-center text-[6vh] '>
        Bringing the World of <br /> Art and Gaming
      </p>
      <p className='text-white text-center mt-[2%] z-[1] text-[2vh]'>
        At $PANO, our vision is to blend the worlds of art and gaming seamlessly, fostering a creative and immersive<br /> environment where artists and gamers can converge, collaborate, and prosper together.
      </p>
      <button className='bg-none mt-[3%] z-[1] border-[3px] transition-all duration-300 hover:shadow-[0px_0px_45px_2px_rgba(244,_197,_92,_0.25)] border-[#F7D079] text-white rounded-[5rem] px-[3rem] py-[1rem] text-[20px]'>
        Join Us
      </button>
    </div>
  )
}

export default CTA