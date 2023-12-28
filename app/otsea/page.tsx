import Footer from '@/Components/Micro/Footer'
import NavBar from '@/Components/Micro/Nav'
import React from 'react'

type Props = {}

const OTSEA = (props: Props) => {
  return (
    <div>
      <NavBar />
      <div className='w-full min-h-[70vh] py-[10vh] flex items-center justify-center'>
        <iframe
          style={{ borderRadius: 24 }}
          width={400} height={540}
          allow="ethereum"
          src="https://otsea.io/mini-market?tokenAddress=0x3850952491606A0E420Eb929B1a2E1A450d013F1"
        />
      </div>
      <Footer />
    </div>
  )
}

export default OTSEA