'use client'
import Image from 'next/image'
import React, { useState } from 'react'

type Props = {}





const details = [
  {
    title: 'True Ownership',
    description: <span>
      With <span className='text-[#fcc054]'>PANOVERSE</span>, players enjoy true ownership of in-game assets, including characters, items, and skins, stored securely on the blockchain. No more ephemeral digital possessions; now, your victories and acquisitions are yours to keep and trade as you see fit.
    </span>,
    img: '/assets/images/sections/details1.jpeg'
  },
  {
    title: 'Play-to-Earn Rewards',
    description: <span>
      The heart of our gaming ecosystem is the principle of <span className='text-[#fcc054]'>"Play to Earn."</span> By participating in our immersive gaming experience, players can earn $PANO tokens as they conquer challenges, complete quests, and excel in tournaments.
    </span>,
    img: '/assets/images/sections/details2.jpeg'
  },
  {
    title: 'Community-Driven Development',
    description: <span>
      <span className='text-[#fcc054]'>We believe</span> in the wisdom of the crowd. $PANO holders are not just players; they are also stakeholders who can influence the development of our gaming universe. Your voice matters, and we actively seek your input to shape the future of our project.
    </span>,
    img: '/assets/images/sections/details3.jpeg'
  },
  {
    title: 'Transparency & Security',
    description: <span>
      <span className='text-[#fcc054]'>Powered by blockchain</span> technology, $PANO ensures transparency, security, and fairness in every transaction. Say goodbye to cheats, hacks, and unfair advantages as we prioritize a level playing field for all.
    </span>,
    img: '/assets/images/sections/details4.jpeg',
    position: 'bottom'
  }
]

const Detail = ({ title, description, image }: { title: string, description: any, image: string }) => {
  const [isHover, setIsHover] = useState(false)
  return (
    <div onMouseEnter={() => {
      setIsHover(true)
    }} onMouseLeave={() => {
      setIsHover(false)
    }} className='w-full cursor-pointer h-[50vh] relative px-[5%] flex items-center justify-end'>
      <Image alt='bg'
        className={`w-full ${isHover ? 'opacity-100' : 'opacity-0'
          } absolute top-0 transition-all duration-300 left-0 z-[0] object-cover h-full`}
        height={1000} width={1000} src={image} />
      <div className='w-full h-full absolute top-0 left-0 bg-black/50 z-[1]'></div>
      <div className='z-[2] w-[40vw]'>
        <p className='text-white text-[6vh] '>
          {title}
        </p>
        <p className='text-white mt-[2%] z-[1] text-[2vh]'>
          {description}
        </p>
      </div>
    </div>
  )
}

const Details = (props: Props) => {
  const [isHover, setIsHover] = useState(false)
  return (
    <div className='w-full bg-black py-[5vh]'>
      {
        details.map((detail, i) => {
          return <Detail image={detail.img} key={detail.title} title={detail.title} description={detail.description} />
        })
      }
    </div>
  )
}

export default Details