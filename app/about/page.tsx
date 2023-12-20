import Footer from '@/Components/Micro/Footer'
import NavBar from '@/Components/Micro/Nav'
import ProfileCard from '@/Components/Micro/ProfileCard'
import VideoPlayer from '@/Components/Micro/VideoPlayer'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {}

const paraData = [
  {
    title: 'About Game',
    text: `In the dynamic realm of Panoverse, $PANO rewards are reserved for the true champions – those who emerge victorious in tournaments. Unlike traditional setups, it's not about every small triumph but the grand victories in these competitive showdowns that unlock exclusive $PANO rewards. Your journey to the top isn't just about accumulating wins; it's about conquering the tournaments and reaping the rewards that come with true gaming mastery. Are you up for the challenge? The Panoverse awaits.`
  },
  {
    title: 'Concept of Game',
    text: `Panoverse is a revolutionary gaming experience, blending cutting-edge technology and a play-to-earn model where $PANO rewards are exclusive to tournament victories. Powered by Unreal Engine and Blender, it's more than a game—it's an ecosystem fueled by the $PANO token. Exclusive NFTs, a collaboration with top-tier artists, bridge the virtual and real worlds, offering tangible advantages. Panoverse isn't just a standalone game; it's a community-driven platform with cross-platform partnerships, genuine marketing, and a strong play-to-earn focus. In essence, Panoverse is a pioneering force shaping the future of gaming, where innovation and player-centric features converge for an immersive and revolutionary gaming universe.`
  },
  {
    title: 'Introduction of $Pano',
    text: `Panoverse—a play-to-earn marvel merging realism, blockchain, and the $PANO token. Essence? Exclusive rewards for victorious tournaments, crafting a dynamic gaming landscape.
    The backend: Scalable servers, security, and real-time updates ensure a seamless experience. Panoverse, committed to realism with Unreal Engine, transcends with the $PANO token and exclusive NFTs.
    Beyond a game, Panoverse is a community-driven platform. Our team, comprising 3D artists and blockchain developers, fuels innovation and versatile play-to-earn experiences.
    As Panoverse unfolds, it emerges as a forefront player in gaming evolution—an immersive universe shaped by innovation, realism, and unwavering focus on the player experience. Welcome to the Panoverse saga.`
  },
  {
    title: 'Backend of $Pano',
    text: `Panoverse, a play-to-earn gaming universe, merges realism, blockchain, and $PANO token for exclusive rewards through victorious tournaments. The backend ensures scalability, security for crypto transactions, and real-time updates. Panoverse's commitment to realism, powered by Unreal Engine and Blender. The $PANO token influences strategic decisions in the game, while exclusive NFTs crafted with renowned artists bridge the virtual and real worlds. Beyond a game, Panoverse is a community-driven platform led by a skilled team in 3D artistry and blockchain development. It stands at the forefront of gaming evolution, promising innovation and a player-centric experience.`
  },
  {
    title: 'What make’s $Pano different ?',
    text: `Panoverse distinguishes itself through cutting-edge realism in 3D gaming, integrating blockchain with the $PANO token for in-game transactions. The Play-to-Earn model lets players earn $PANO in tournaments, fostering engagement. Exclusive NFTs, created with renowned artists, offer holders unique advantages. Panoverse's cross-platform collaborations, community-centric approach, and authentic marketing underscore its commitment to redefining the gaming experience, making it a standout in the evolving world of web3 gaming.`
  },

]

const Para = ({ title, text }: { title: string, text: string }) => {
  return (
    <div className='mb-[10vh]'>
      <p className='text-white text-[6vh] '>
        {title}
      </p>
      <p className='text-white/50 mt-[1%] leading-[6vh] z-[1] text-[2vh]'>
        {text}
      </p>
    </div>
  )
}

const Commnity = (props: Props) => {
  return (
    <>
      <div className='relative'>
        <div className='h-[100vh] my-shadow bg-black/20 w-full '>
          <NavBar />
          {/* <div className='w-full h-[calc(100%-100px)] flex items-center justify-center'>
            <Image alt='Welcome to Panoverse' src='/assets/svg/welcome.svg' className='md:w-[40%] ' width={700} height={700} />
          </div> */}
        </div>
        <VideoPlayer />
        <div style={{
          boxShadow: '0px 0px 25px 30px rgba(0,0,0,1)'
        }} className='absolute w-full bottom-[-2%] h-[4rem] bg-black' />
      </div>
      <div className='mt-[5vh] w-full px-[5%]'>
        {
          paraData.map((para, i) => {
            return <Para key={para.title} title={para.title} text={para.text} />
          })
        }
      </div>
      <div className='w-full px-[5%] my-[10vh]'>
        <div style={cardstyle} className='w-full h-[40vh] flex'>
          <div className='h-full p-[5%] relative w-[50%]'>
            <img src='/assets/images/util/fight.png' alt='fight' className='w-full z-0 absolute top-0 left-0 object-cover h-full opacity-10  ' />
            <div className='h-full w-full z-[1] flex flex-col justify-center p-[5%] absolute top-0 left-0'>
              <p className='text-white text-[4vh] '>
                Bridging the World of
                Art and Gaming
              </p>
              <p className='text-white/50 my-[3%] text-[2vh]'>
                At $PANO, our vision is to blend the worlds of art and gaming seamlessly, fostering a creative and immersive environment where artists and gamers can converge, collaborate, and prosper together.
              </p>
              <a href='https://medium.com/@PanoVerse/panoverse-the-ultimate-play-to-earn-adventure-c0f5edfe21e6' target='__blank' className='bg-none border-[3px] border-[#F7D079] text-white rounded-[5rem] w-fit px-[2rem] py-[0.5rem] text-[20px]'>
                Read more
              </a>
            </div>
          </div>
          <div style={{
            background: `url('/assets/images/util/welcome.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }} className='h-full w-[50%]'></div>
        </div>
      </div>
      <div className='mb-[10vh] w-full flex items-center flex-col'>
        <p className='text-white text-center text-[6vh] '>
          About Team
        </p>
        <p className='text-white text-center mt-[2%] w-[50vw] leading-[4vh] z-[1] text-[2.5vh]'>
          Introducing the A-team, the ingenious creators shaping the Panoverse. With diverse talents and unwavering passion, each member adds a unique brushstroke to our imaginative canvas. Together, we craft extraordinary experiences that transcend boundaries.

        </p>
        <div className='w-full px-[5%] flex mt-[3%] justify-between'>
          <ProfileCard handle='https://x.com/panoramic_art?s=21' name='Nishant' role='Founder & lead artist' src='/assets/images/characters/1.jpeg' />
          <ProfileCard handle='https://x.com/meenadivya18?s=21' name='Divya' role='Lead Developer and Artist' src='/assets/images/characters/2.jpeg' />
          <ProfileCard name='Windy' role='Junior Developer' src='/assets/images/characters/3.jpeg' />
          <ProfileCard handle='https://x.com/ciab0tta?s=21' name='Ciabot' role='Lead Solidity Developer' src='/assets/images/characters/4.jpeg' />
        </div>
        <div className='w-full px-[5%] flex mt-[3%] justify-between'>
          <ProfileCard name='Pranav' role='Head of Operations' src='/assets/images/characters/5.jpeg' />
          <ProfileCard name='Sorcerer' role='Head of Community' src='/assets/images/characters/6.jpeg' />
          <ProfileCard handle='https://x.com/pingugems?s=21' name='Pingu' role='Advisor' src='/assets/images/characters/7.jpeg' />
          <ProfileCard handle='https://x.com/berniefrogger?s=21' name='BernieFrogger' role='Advisor' src='/assets/images/characters/8.jpeg' />
        </div>
        <div className='w-full px-[5%] flex mt-[3%] justify-center'>
          <ProfileCard name='CryptoSimon' role='Advisor' src='/assets/images/characters/5.jpeg' />
        </div>
      </div>
      <div className='mb-[10vh] w-full flex items-center flex-col'>
        <p className='text-white text-[6vh] '>
          Contact Us
        </p>
        <p className='text-white mt-[2%] z-[1] text-[2vh]'>
          Drop us a mail at <span className='text-[#fcc054]'>inquiries@thepanoramic.art</span>
        </p>
      </div>
      <Footer />
    </>
  )
}

const cardstyle = {
  borderRadius: '7.423px',
  background: 'var(--ffffff, rgba(255, 255, 255, 0.10))',
  backdropFilter: 'blur(14.846222877502441px)'
}

export default Commnity