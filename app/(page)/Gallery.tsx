import { cn } from '@/lib/utils'
import Image from 'next/image'
import React from 'react'

export default function Gallery({
  neverEnding,
  showGallery,
}: {
  neverEnding: number
  showGallery: boolean
}) {
  return (
    <>
      <section className='relative h-screen backdrop-blur-sm bg-stone-900/30 border-b-2 border-stone-500'>
        <div className='w-full relative h-[15rem]'>
          <div
            className={cn(
              'absolute top-0 left-0 h-[15rem] w-[1903px] transition-all ease-linear',
              neverEnding === 0
                ? 'translate-x-0 duration-0'
                : '-translate-x-full dur-20'
            )}
          >
            <Image src='/assets/pan.png' alt='hero' layout='fill' />
          </div>
          <div
            className={cn(
              'absolute top-0 left-0 h-[15rem] w-[1903px] transition-all ease-linear',
              neverEnding === 0
                ? 'translate-x-full duration-0'
                : 'translate-x-0 dur-20'
            )}
          >
            <Image src='/assets/pan.png' alt='hero' layout='fill' />
          </div>
        </div>
        <div
          className={cn(
            'flex flex-col mt-20 md:flex-row gap-10 justify-center items-center transition-all duration-500',
            showGallery ? 'scale-1 opacity-1' : 'scale-75 opacity-0'
          )}
        >
          <div className='relative w-4/5 border-2 border-stone-800 md:w-1/3 aspect-[16/9]'>
            <Image src='/assets/AFTER.png' alt='hero' layout='fill' />
          </div>
          <div className='relative w-4/5 border-2 border-stone-800 md:w-1/3 aspect-[16/9]'>
            <Image src='/assets/comm.jpg' alt='hero' layout='fill' />
          </div>
        </div>
      </section>
      <section className='relative h-screen backdrop-blur-sm bg-stone-900/30'>
        {/* <video
          className='mx-auto w-[300px] aspect-[9/16] border-2 border-stone-800'
          muted
          autoPlay
          playsInline
          loop
          src='/assets/Reel1Final.mp4'
        /> */}
      </section>
    </>
  )
}
