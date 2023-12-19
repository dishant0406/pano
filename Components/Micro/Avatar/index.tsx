import Image from 'next/image'
import React from 'react'
import AvatarCard from '../AvatarCard'

type Props = {}



const Avatar = (props: Props) => {
  return (
    <div className='h-[70vh] w-full overflow-x-hidden bg-black flex items-center justify-center'>
      <div className='h-[40vh] relative flex items-center px-[5%] bg-avatar w-full'>
        <div className='absolute flex gap-[2rem] top-[-2.5vh] right-[-5%]'>
          <AvatarCard src='/assets/images/characters/unihexzer.png' name='Unihexzer' role='Assault' handle='@loidonsaf' />
          <AvatarCard src='/assets/images/characters/martaverse.png' name='Martaverse' role='Assault' handle='@loidonsaf' />
        </div>
        <p className='text-white text-[6vh] tracking-wide font-medium'>Create Your <br /> Team</p>
      </div>
    </div>
  )
}

export default Avatar