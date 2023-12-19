import Image from 'next/image'
import React from 'react'

type Props = {}

const WhyTax = (props: Props) => {
  return (
    <div className='h-[100vh] w-full overflow-x-hidden bg-black flex flex-col items-center justify-center'>
      <p className='text-white text-[6vh] z-[2] mt-2'>Why <span className='text-[#fcc054]'>Tax</span> ?</p>
      <div className='h-auto bg-sha-out-1 w-full'>
        <div className='h-[70vh] relative bg-sha-1 w-full flex leading-[3.5vh] py-[2%] flex-col items-center'>
          <div style={{
            boxShadow: '0px 0px 25px 30px rgba(0,0,0,1)'
          }} className='absolute z-[1] w-full bottom-[-4%] h-[4rem] bg-black' />
          <div style={{
            boxShadow: '0px 0px 25px 30px rgba(0,0,0,1)'
          }} className='absolute z-[1] w-full top-[-4%] h-[4rem] bg-black' />
          <Image alt='bg' className='w-full absolute top-0 left-0 z-[0] object-fill h-full' height={1000} width={1000} src='/assets/images/sections/tax.png' />
          <p className='text-white text-center z-[1] text-[2vh]'>
            In the development of the game , aiding in community development, supporting <br />artists by purchasing art and marketing of the whole project.
          </p>
          <button className='px-[3rem] transition-all duration-300 hover:shadow-[0px_0px_45px_2px_rgba(244,_197,_92,_0.25)] rounded-[3rem] py-[1rem] text-white bg-[#fcc054] mt-[5%] z-[1] text-center text-[2.5vh]'>
            Buy
          </button>

        </div>
      </div>
    </div>
  )
}

export default WhyTax