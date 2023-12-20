import React from 'react'
import localFont from 'next/font/local'
import NavLink from '../Nav/NavLink'

const azonix = localFont({
  src: '../public/fonts/azonix.woff2',
})

//icons
import { FaTelegramPlane, } from "react-icons/fa";
import { FaMedium, FaXTwitter, FaDiscord } from "react-icons/fa6";

type Props = {}

const Footer = (props: Props) => {
  return (
    <div className='w-full px-[5%] border-t border-[#F4C55C] pt-[7vh]'>
      <div className='w-full flex justify-between'>
        <div>
          <p className={`text-white ${azonix.className} text-[4vh]`}>PANOVERSE</p>
          <p className='text-white text-[1.5vh]'>
            Copyright {
              new Date().getFullYear()
            } Panoramic

          </p>
        </div>
        <div className='flex gap-[2rem]'>
          <NavLink href='/'>FAQ</NavLink>
          <NavLink href='/'>Updates</NavLink>
          <NavLink href='/'>Contact</NavLink>
          <NavLink href='/'>Community</NavLink>
        </div>
      </div>
      <div className='w-full flex justify-end gap-[2rem] my-[2rem]'>
        <a href='https://t.me/PanoVerse' target='_blank' rel='noreferrer'>
          <FaTelegramPlane className='text-white text-[2rem]' />
        </a>
        <a href='https://twitter.com/panoverse_' target='_blank' rel='noreferrer'>
          <FaXTwitter className='text-white text-[2rem]' />
        </a>
        <a href='https://medium.com/PanoVerse' target='_blank' rel='noreferrer'>
          <FaMedium className='text-white text-[2rem]' />
        </a>
        {/* <a href='https://discord.gg/panoramic' target='_blank' rel='noreferrer'>
          <FaDiscord className='text-white text-[2rem]' />
        </a> */}


      </div>
    </div>
  )
}

export default Footer