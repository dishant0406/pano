'use client'

import React, { useState } from 'react'

type Props = {}

const Step = ({ title, left, completed, upcoming }: {
  title: string | JSX.Element,
  left?: boolean,
  completed?: boolean,
  upcoming?: boolean
}) => {
  const [isHover, setIsHover] = useState(false)
  return (
    <div onMouseEnter={() => {
      setIsHover(true)
    }} onMouseLeave={() => {
      setIsHover(false)
    }} className='h-[2rem] cursor-pointer relative w-[2rem] transition-all duration-300 hover:shadow-[0px_0px_45px_2px_rgba(244,_197,_92,_0.25)] rounded-full   bg-[#fcc054] flex items-center justify-center'>
      <div className={`absolute w-full flex flex-col items-end ${left ? 'left-[-250%]' : 'right-[-700%]'
        } `}>

        <p className={`text-white ${upcoming ? 'opacity-50' : (!completed && !isHover) ? 'opacity-80' : 'opacity-100'
          } whitespace-nowrap text-[3vh] transition-all duration-300 `}>{title}</p>
        <p className={`text-white ${upcoming ? 'opacity-50' : (!completed && !isHover) ? 'opacity-80' : 'opacity-100'
          } whitespace-nowrap text-[2vh] transition-all duration-300 `}>{
            upcoming ? '( Pending )' : completed ? '( Completed )' : '( On Going )'
          }</p>
      </div>
    </div>
  )
}

export default Step