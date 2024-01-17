import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

export default function Hero({
  onViewGallery,
  onFreeQuote,
}: {
  onViewGallery: () => void
  onFreeQuote: () => void
}) {
  return (
    <section className={'relative h-screen flex justify-center items-center'}>
      <Image
        src='/assets/hero.webp'
        alt='hero'
        layout='fill'
        objectFit='cover'
        objectPosition='center'
        className='absolute z-[-1]'
      />
      <div className='flex flex-col gap-10 p-10 bg-stone-900/40 w-full max-w-4xl items-center justify-center h-fit rounded-lg'>
        <h1 className='text-4xl lg:text-6xl font-bold text-white text-center'>
          Stone Veneer
        </h1>
        <p className='text-white text-center'>
          We are a family owned and operated business with over 40 years of
          experience in the stone veneer industry. Stone Concepts manufactures
          high quality stone veneer, used to upgrade home fronts, fireplaces,
          indoor/outdoor living areas and commercial buildings.
        </p>
        <div className='flex gap-10 items-center justify-center'>
          <Button
            onClick={onViewGallery}
            className='bg-red-500 hover:bg-red-600 hover:shadow-2xl transition-all'
          >
            View Gallery
          </Button>

          <Button
            onClick={onFreeQuote}
            className='bg-white text-stone-800 hover:bg-gray-200 hover:shadow-2xl transition-all'
          >
            FREE QUOTE
          </Button>
        </div>
      </div>
    </section>
  )
}
