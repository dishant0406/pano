import Image from 'next/image'
import React from 'react'
import NavLink from './NavLink'
import Link from 'next/link'

type Props = {}

const NavBar = (props: Props) => {
  return (
    <div className='glass w-full h-[100px] flex items-center justify-between px-[5%]'>
      <Link href='/'>

        <Image alt='Panoverse Logo' src='/assets/images/logo.png' width={50} height={50} />
      </Link>
      <div className='flex gap-[2rem]'>
        <NavLink href='/about'>about</NavLink>
        <NavLink href='/updates'>roadmap</NavLink>
        <NavLink href='/updates'>updates</NavLink>
      </div>
      <a href='https://app.uniswap.org/swap?&chain=mainnet&use=v2&outputCurrency=0x3850952491606a0e420eb929b1a2e1a450d013f1' target='__blank' className='bg-none border-[3px] border-[#F7D079] text-white rounded-[5rem] px-[2rem] py-[0.5rem] text-[20px]'>
        Buy $PANO
      </a>
    </div>
  )
}

export default NavBar