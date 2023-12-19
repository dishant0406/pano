'use client'

import React, { useState } from 'react'

type Props = {}

const Step = ({ title, top }: {
  title: string,
  top?: boolean
}) => {
  const [isHover, setIsHover] = useState(false)
  return (
    <div onMouseEnter={() => {
      setIsHover(true)
    }} onMouseLeave={() => {
      setIsHover(false)
    }} className='h-[2rem] cursor-pointer relative w-[2rem] transition-all duration-300 hover:shadow-[0px_0px_45px_2px_rgba(244,_197,_92,_0.25)] rounded-full   bg-[#fcc054] flex items-center justify-center'>
      <p className={`text-white ${isHover ? 'opacity-100' : 'opacity-50'
        } whitespace-nowrap absolute text-[3vh] transition-all duration-300 ${top ? 'top-[-8vh]' : 'bottom-[-8vh]'
        } `}>{title}</p>
    </div>
  )
}

const RoadMap = (props: Props) => {
  return (
    <div className='h-[40vh] relative w-full flex items-center justify-center'>
      <div style={{
        background: 'radial-gradient(103725994.26% 84.24% at 50% 49.16%, #F4C55C 0%, #000 88.54%)'
      }} className='w-[95%] h-[2px]' />
      <div className='absolute flex top-0 left-0 h-full w-full items-center justify-center'>
        <div className='w-[95%] flex justify-around'>
          <Step title='Launch of Pano' />
          <Step title='Alpha Testing' top={true} />
          <Step title='Beta Testing' />
          <Step title='Launch of Game' top={true} />
        </div>
      </div>
    </div>
  )
}

export default RoadMap