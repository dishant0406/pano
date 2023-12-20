'use client'

import Link from 'next/link'
import React, { useState } from 'react'

type Props = {
  children: React.ReactNode,
  href: string
}

const NavLink = ({ children, href }: Props) => {
  const [onHover, setOnHover] = useState(false)
  return (
    <div onMouseEnter={() => {
      setOnHover(true)
    }} onMouseLeave={() => {
      setOnHover(false)
    }} className='flex flex-col gap-[0.1rem] items-center'>
      <Link className='text-[18px] uppercase font-bold text-white' href={href}>{children}</Link>
      <div className={`transition-all duration-200 ${onHover ? 'w-[95%]' : 'w-[0%]'
        } h-[2px] rounded-full bg-[#F4C55C]`}></div>
    </div>
  )
}

export default NavLink