import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

export default function BeforeAndAfter() {
  return (
    <section className='relative h-screen '>
      <div className='flex w-full h-full'>
        <div className='h-full w-full'>
          <div className='relative w-full h-1/2 border-stone-500 border-[3px] border-r-[1.5px] border-b-[1.5px]'>
            <Image
              src='/assets/b4.jpg'
              alt='hero'
              layout='fill'
              objectFit='cover'
              objectPosition='center'
              className='absolute z-[-1]'
            />
          </div>
          <div className='relative w-full h-1/2 border-stone-500 border-[3px] border-r-[1.5px] border-t-[1.5px]'>
            <Image
              src='/assets/after1.jpg'
              alt='hero'
              layout='fill'
              objectFit='cover'
              objectPosition='center'
              className='absolute z-[-1]'
            />
          </div>
        </div>
        <div
          className='absolute z-[10] w-[90%] md:max-w-3xl bg-stone-100/90 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg shadow-xl p-4 lg:p-10 flex flex-col items-center justify-center gap-4 
          lg:gap-10'
        >
          <h3 className='text-3xl font-bold text-stone-900'>
            Before and After
          </h3>
          <p>
            Stone Concepts offers a variety of styles, colors and lays to
            perfect your project!
          </p>
          <a href='tel:9136363773'>
            <Button className='bg-red-500 hover:bg-red-600 hover:shadow-2xl transition-all'>
              FREE QUOTE
            </Button>
          </a>
        </div>
        <div className='h-full w-full'>
          <div className='relative w-full h-1/2 border-stone-500 border-[3px] border-l-[1.5px] border-b-[1.5px]'>
            <Image
              src='/assets/after1.jpg'
              alt='hero'
              layout='fill'
              objectFit='cover'
              objectPosition='center'
              className='absolute z-[-1]'
            />
          </div>
          <div className='relative w-full h-1/2 border-stone-500 border-[3px] border-l-[1.5px] border-t-[1.5px]'>
            <Image
              src='/assets/after1.jpg'
              alt='hero'
              layout='fill'
              objectFit='cover'
              objectPosition='center'
              className='absolute z-[-1]'
            />
          </div>
        </div>
      </div>
    </section>
  )
}