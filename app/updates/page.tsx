import React from 'react'

type Props = {}

const About = (props: Props) => {
  return (
    <div className='md:hidden h-[100vh] w-[100vw] flex items-center flex-col gap-[1rem] justify-center'>
      <img src='/assets/images/logo.png' alt='logo' className='w-[3rem] h-[3rem]' />
      <p className='text-white text-center text-[2rem]'>Under Construction</p>

    </div>
  )
}

export default About