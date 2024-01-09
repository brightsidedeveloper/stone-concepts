import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
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
      <div className='flex flex-col gap-10 p-10 bg-stone-900/40 w-full max-w-xl items-center justify-center h-fit rounded-lg'>
        <h1 className='text-2xl lg:text-4xl font-bold text-white text-center'>
          GET STARTED TODAY
        </h1>
        <a href='tel:9136363773'>
          <Button className='bg-red-500 hover:bg-red-600 hover:shadow-2xl transition-all'>
            Call NOW
          </Button>
        </a>
        <div className='flex w-full text-stone-300 items-center gap-4'>
          <div className='h-0.5 w-full bg-stone-300 rounded-full' /> or{' '}
          <div className='h-0.5 w-full bg-stone-300 rounded-full' />
        </div>
        <p className='text-stone-300 text-center'>
          We are here to help you transform your space. Leave your details and
          we’ll get in touch.
        </p>
        <div className='flex flex-col w-full gap-5 items-center justify-center'>
          <Input placeholder='Name' className='bg-stone-300' />
          <Input placeholder='Phone' className='bg-stone-300' />
          <Textarea placeholder='Message' className='bg-stone-300' />
          <Button className='ml-auto bg-stone-300 text-stone-800'>
            Submit
          </Button>
        </div>
      </div>
    </section>
  )
}
