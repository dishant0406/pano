'use client'

import React, { useState } from 'react'

type Props = {}

/*
<div onMouseEnter={() => {
      setIsHover(true)
    }} onMouseLeave={() => {
      setIsHover(false)
    }} className='h-[2rem] cursor-pointer relative w-[2rem] transition-all duration-300 hover:shadow-[0px_0px_45px_2px_rgba(244,_197,_92,_0.50)] rounded-full   bg-[#fcc054] flex items-center justify-center'>
      <div className={`absolute w-full flex flex-col items-end ${left ? 'left-[-250%]' : 'right-[-700%]'
        } `}>

        <p className={`text-white ${upcoming ? 'opacity-50' : (!completed && !isHover) ? 'opacity-80' : 'opacity-100'
          } whitespace-nowrap text-[3vh] transition-all duration-300 `}>{title}</p>
        {!noSubText && <p className={`text-white ${upcoming ? 'opacity-50' : (!completed && !isHover) ? 'opacity-80' : 'opacity-100'
          } whitespace-nowrap text-[2vh] transition-all duration-300 `}>{
            upcoming ? '( Pending )' : completed ? '( Completed )' : '( On Going )'
          }</p>}
      </div>
    </div>
*/

const Step = ({ title, left, completed, upcoming, noSubText }: {
  title: string | JSX.Element,
  left?: boolean,
  completed?: boolean,
  upcoming?: boolean,
  noSubText?: boolean
}) => {
  const [isHover, setIsHover] = useState(false)
  return (
    <div className='md:w-[40vw] w-[90vw] flex relative items-center justify-center'>
      <div className='h-[2rem] cursor-pointer relative w-[2rem] transition-all duration-300 hover:shadow-[0px_0px_45px_2px_rgba(244,_197,_92,_0.50)] rounded-full   bg-[#fcc054] flex items-center justify-center'></div>
      {
        !left && <div className='absolute w-full hidden md:flex flex-col items-end'>
          <p className={`text-white ${upcoming ? 'opacity-50' : (!completed && !isHover) ? 'opacity-80' : 'opacity-100'
            } whitespace-nowrap text-[3vh] transition-all duration-300 `}>{title}</p>
          {!noSubText && <p className={`text-white ${upcoming ? 'opacity-50' : (!completed && !isHover) ? 'opacity-80' : 'opacity-100'
            } whitespace-nowrap text-[2vh] transition-all duration-300 `}>{
              upcoming ? '( Pending )' : completed ? '( Completed )' : '( On Going )'
            }</p>}
        </div>
      }


      {
        left && <div className='absolute w-full hidden md:flex flex-col items-start'>
          <p className={`text-white ${upcoming ? 'opacity-50' : (!completed && !isHover) ? 'opacity-80' : 'opacity-100'
            } whitespace-nowrap text-[3vh] transition-all duration-300 `}>{title}</p>
          {!noSubText && <p className={`text-white ${upcoming ? 'opacity-50' : (!completed && !isHover) ? 'opacity-80' : 'opacity-100'
            } whitespace-nowrap text-[2vh] transition-all duration-300 `}>{
              upcoming ? '( Pending )' : completed ? '( Completed )' : '( On Going )'
            }</p>}
        </div>
      }
      {
        <div className='absolute w-full md:hidden bg-black top-[-9vh] flex flex-col items-center'>
          <p className={`text-white ${upcoming ? 'opacity-50' : (!completed && !isHover) ? 'opacity-80' : 'opacity-100'
            } whitespace-nowrap text-[3vh] transition-all duration-300 `}>{title}</p>
          {!noSubText && <p className={`text-white ${upcoming ? 'opacity-50' : (!completed && !isHover) ? 'opacity-80' : 'opacity-100'
            } whitespace-nowrap text-[2vh] transition-all duration-300 `}>{
              upcoming ? '( Pending )' : completed ? '( Completed )' : '( On Going )'
            }</p>}
        </div>
      }
    </div>
  )
}

export default Step