import React from 'react'
import localFont from 'next/font/local'
import NavLink from '../Nav/NavLink'

const azonix = localFont({
  src: '../../../public/fonts/azonix.woff2',
})

//icons
import { FaTelegramPlane, } from "react-icons/fa";
import { FaMedium, FaXTwitter, FaDiscord } from "react-icons/fa6";

type Props = {}

const Footer = (props: Props) => {
  return (
    <div className='w-full px-[5%] border-t border-[#F4C55C] pt-[7vh]'>
      <div className='w-full flex md:items-start items-center md:flex-row flex-col justify-between'>
        <div className='flex flex-col md:items-start md:pb-0 pb-[2rem] items-center'>
          <p className={`text-white ${azonix.className} text-[4vh]`}>PANOVERSE</p>
          <p className='text-white text-[1.5vh]'>
            Copyright {
              new Date().getFullYear()
            } Panoramic

          </p>
        </div>
        <div className='flex gap-[2rem]'>
          <NavLink href='https://medium.com/@PanoVerse/panoverse-the-ultimate-play-to-earn-adventure-c0f5edfe21e6'>FAQ</NavLink>
          <NavLink href='/updates'>Updates</NavLink>
          <NavLink href='/'>Contact</NavLink>
          <NavLink href='/about'>About</NavLink>
          <NavLink href='/otsea'>OTSEA</NavLink>
        </div>
      </div>
      <div className='w-full flex justify-end gap-[2rem] my-[2rem]'>
        <a href='https://t.me/PanoVerse' target='_blank' rel='noreferrer'>
          <FaTelegramPlane className='text-white text-[2rem]' />
        </a>
        <a href='https://twitter.com/panoverse_' target='_blank' rel='noreferrer'>
          <FaXTwitter className='text-white text-[2rem]' />
        </a>
        <a href='https://medium.com/@PanoVerse/panoverse-the-ultimate-play-to-earn-adventure-c0f5edfe21e6' target='_blank' rel='noreferrer'>
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