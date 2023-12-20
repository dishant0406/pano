'use client'

import Image from 'next/image'
import React, { useState } from 'react'
import AvatarCard from '../AvatarCard'

type Props = {}



const Avatar = (props: Props) => {
  const [isHover, setIsHover] = useState(false)
  return (
    <div onMouseEnter={() => {
      setIsHover(true)
    }} onMouseLeave={() => {
      setIsHover(false)
    }} className='h-[70vh] w-full overflow-x-hidden bg-black flex items-center justify-center'>
      <div className='h-[40vh] relative flex items-center px-[5%] bg-avatar w-full'>
        <div className={`absolute transition-all ${isHover ? 'right-[-2%]' : 'right-[-70%]'
          } duration-500 flex gap-[2rem] w-full items-center  top-[-2.5vh] `}>
          <AvatarCard gif='/assets/gif/1.gif' src='/assets/images/characters/c1.png' name='IncomeSharks' role='Assault' handle='@IncomeSharks' />
          <AvatarCard gif='/assets/gif/2.gif' src='/assets/images/characters/c2.png' name='Unihax0r' role='Assault' handle='@0XUnihax0r' />
          <AvatarCard gif='/assets/gif/3.gif' src='/assets/images/characters/c3.png' name='CryptoWizardd' role='Assault' handle='@CryptoWizardd' />
          <AvatarCard gif='/assets/gif/4.gif' src='/assets/images/characters/c4.png' name='CryptoSkullx' role='Assault' handle='@CryptoSkullx' />
          <AvatarCard gif='/assets/gif/5.gif' src='/assets/images/characters/c5.png' name='Martaverse' role='Assault' handle='@MartaVerse' />
        </div>
        <p className={`text-white transition-all ${isHover ? 'opacity-0' : 'opacity-100'
          } duration-300 text-[7vh] tracking-wide font-medium`}>Create Your <br /> Team</p>
      </div>
    </div>
  )
}

export default Avatar