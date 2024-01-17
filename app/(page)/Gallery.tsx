import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import React from 'react'

export default function Gallery({
  neverEnding,
  showGallery,
  onFreeQuote,
  g1Ref,
  g2Ref,
}: {
  neverEnding: number
  showGallery: boolean
  onFreeQuote: () => void
  g1Ref: React.RefObject<HTMLDivElement>
  g2Ref: React.RefObject<HTMLDivElement>
}) {
  return (
    <>
      <section
        ref={g1Ref}
        className='relative h-fit pb-2 backdrop-blur-sm bg-stone-900/30 border-b-2 border-stone-500'
      >
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
            'flex flex-col mt-2 md:flex-row gap-2 md:gap-10 justify-center items-center transition-all duration-1000',
            showGallery ? 'scale-1 opacity-1' : 'scale-75 opacity-0'
          )}
        >
          <div className='relative w-full border-2 border-stone-800 md:w-1/3 aspect-[16/11]'>
            <Image src='/assets/duel.png' alt='hero' layout='fill' />
          </div>
          <div className='relative w-full border-2 border-stone-800 md:w-1/3 aspect-[16/10]'>
            <Image src='/assets/pool.jpg' alt='hero' layout='fill' />
          </div>
          <Button className='lg:hidden' onClick={onFreeQuote}>
            Learn More
          </Button>
        </div>
      </section>
      <section
        ref={g2Ref}
        className='relative h-fit pb-2 backdrop-blur-sm bg-stone-900/30'
      >
        {/* <video
          className='mx-auto w-[300px] aspect-[9/16] border-2 border-stone-800'
          muted
          autoPlay
          playsInline
          loop
          src='/assets/Reel1Final.mp4'
        /> */}
        <div
          className={cn(
            'flex flex-col mt-2 md:flex-row gap-2 md:gap-10 justify-center items-center transition-all duration-500',
            showGallery ? 'scale-1 opacity-1' : 'scale-75 opacity-0'
          )}
        >
          <div className='relative w-full border-2 border-stone-800 md:w-1/3 aspect-[16/11]'>
            <Image src='/assets/back.jpeg' alt='hero' layout='fill' />
          </div>
          <div className='relative w-full border-2 border-stone-800 md:w-1/3 aspect-[16/11]'>
            <Image src='/assets/dentist.jpg' alt='hero' layout='fill' />
          </div>
          <div className='relative w-full border-2 border-stone-800 md:w-1/3 aspect-[16/11]'>
            <Image src='/assets/out.png' alt='hero' layout='fill' />
          </div>
        </div>
      </section>
    </>
  )
}
