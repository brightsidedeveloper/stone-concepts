import { cn } from '@/lib/utils'
import Image from 'next/image'
import React from 'react'
const TESTIES = [
  {
    name: 'David',
    message:
      '"I was looking for a contractor to install stone around a fireplace and someone highly recommended Stone Concepts. I met with Frank to discuss and he was an expert and easy to work with. I love how the stonework looks, and everyone that has seen it has said how beautiful it is.  I highly recommend Stone Concepts!"',
    className: 'one',
  },
  {
    name: 'Adam',
    message:
      '"I couldn’t recommend Stone Concepts any more highly!  Great communication, stellar work, and reasonable prices!  Work was done on time, and based around our busy family’s schedule.  Working with Frank and his team was a pleasure.  You won’t be disappointed!"',
    className: 'two',
  },
  {
    name: 'Duane',
    message:
      '"Frank and crew are the best! Outstanding work and good prices, great people!"',
    className: 'three',
  },
]

const LAYS = [
  {
    img: '/assets/fp.jpg',
    name: 'Fireplace',
  },
  {
    img: '/assets/after1.jpg',
    name: 'Fireplace',
  },
  {
    img: '/assets/comm.jpg',
    name: 'Fireplace',
  },
]
export default function Testies({ testies }: { testies: boolean }) {
  return (
    <section className='relative h-screen bg-stone-900/30'>
      <div
        className={cn(
          'absolute py-4 lg:py-32 z-[1] inset-0 w-full h-full flex flex-wrap items-start flex-col ml-2 lg:ml-0 lg:flex-row justify-center gap-8 lg:gap-10 transition-all duration-700',
          testies ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        {TESTIES.map(({ name, message, className }) => (
          <div
            key={name}
            className={cn(
              'flex border-stone-500 border-2 relative bg-[length:800px_800px] bg-center bg-stone-300 rounded-xl shadow-xl flex-col items-center w-full h-full max-w-[15rem] max-h-[15rem] lg:max-w-96 lg:max-h-80',
              className
            )}
          >
            <div className='w-full h-full p-4 text-center bg-stone-900/80'>
              <h1 className='text-lg font-bold text-stone-50 -mt-3 lg:mt-0 lg:mb-4'>
                {name}
              </h1>
              <p className='text-stone-50 text-xs lg:text-base'>{message}</p>
            </div>
          </div>
        ))}
      </div>
      <div
        className={cn(
          'absolute inset-0 py-4 lg:py-32 w-full h-full flex flex-wrap items-end flex-col -ml-2 lg:ml-0 lg:flex-row justify-around lg:justify-center gap-8 lg:gap-10 transition-all duration-700',
          testies ? 'translate-x-0' : '-translate-x-full'
        )}
      >
        {LAYS.map(({ name, img }) => (
          <div
            key={name}
            className='flex relative p-4 bg-white rounded-lg shadow-xl flex-col items-center w-full h-full max-w-[12rem] max-h-[12rem] lg:max-w-96 lg:max-h-80'
          >
            <Image
              src={img}
              alt='hero'
              fill
              objectFit='cover'
              objectPosition='center'
              className='my-auto rounded-lg shadow-xl '
            />
          </div>
        ))}
      </div>
    </section>
  )
}
