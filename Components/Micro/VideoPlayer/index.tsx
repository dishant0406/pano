'use client'

import React, { useEffect, useRef } from 'react'

type Props = {}

const VideoPlayer = (props: Props) => {
  const videoRef = useRef<HTMLVideoElement>(null)

  //listerner so 1 second before video ends, it restarts
  useEffect(() => {
    const video = videoRef.current
    if (video) {
      video.addEventListener('timeupdate', () => {
        if (video.currentTime > video.duration - 1) {
          video.currentTime = 0
        }
      })
    }
  }, [])

  return (
    <video ref={videoRef} autoPlay loop muted className='object-cover z-[-1]  absolute top-0 left-0 w-full h-[100vh]'>
      <source src='/assets/video/hero.webm' type='video/webm' />
    </video>
  )
}

export default VideoPlayer