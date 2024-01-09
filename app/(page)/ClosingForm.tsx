import Image from 'next/image'
import React from 'react'

export default function ClosingForm() {
  return (
    <section
      className={
        'relative h-screen bg-stone-800/40 flex justify-center items-center'
      }
    >
      <Image
        src='/assets/SC.png'
        alt='hero'
        layout='fill'
        objectFit='cover'
        objectPosition='center'
        className='absolute z-[-1]'
      />
      <div className='flex flex-col gap-10 p-10 bg-stone-900/40 w-full max-w-4xl items-center justify-center h-fit rounded-lg'>
        <h1 className='text-4xl lg:text-6xl font-bold text-white text-center'>
          Learn More - Transform Today
        </h1>
        <div className='flex gap-10 items-center justify-center'></div>
      </div>
    </section>
  )
}
