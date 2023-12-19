import Image from 'next/image'
import React from 'react'

type Props = {
  src: string
  name: string
  handle: string
  role: string
}


const AvatarCard = ({
  handle,
  name,
  role,
  src
}: Props) => {
  return (
    <div style={cardStyles} className='min-h-[45vh] transition-all duration-300 hover:shadow-[0px_0px_45px_2px_rgba(244,_197,_92,_0.25)] cursor-pointer border border-white hover:border-[#F7D079] p-[1rem] w-[17vw]'>
      <Image src={src} height={300} width={300} className='w-full rounded-[12.5px] h-auto' alt='Martaverse' />
      <div className='flex justify-between px-[2%] w-full mt-[5%]'>
        <p className='text-white text-[1.5rem] font-medium'>{name}</p>
        <p className='text-[#fcc054] text-[1.5rem] font-bold'>{role}</p>
      </div>
      <div className='flex justify-between px-[2%] w-full '>
        <p className='text-[rgba(255,255,255,0.5)] text-[1rem]'>{handle}</p>

      </div>
    </div>
  )
}

const cardStyles = {
  borderRadius: '25px',
  background: 'var(--ffffff, rgba(255, 255, 255, 0.10))',
  backdropFilter: 'blur(12.601908683776855px)'
}


export default AvatarCard