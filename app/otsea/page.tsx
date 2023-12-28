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
          src="https://otsea.io/mini-market?tokenAddress=0x37DA9DE38c4094e090c014325f6eF4baEB302626"
        />
      </div>
      <Footer />
    </div>
  )
}

export default OTSEA