'use client'

import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import { useCallback, useRef, useState } from 'react'

const TESTIES = [
  {
    name: 'David',
    message:
      '"I was looking for a contractor to install stone around a fireplace and someone highly recommended Stone Concepts. I met with Frank to discuss and he was an expert and easy to work with. I love how the stonework looks, and everyone that has seen it has said how beautiful it is.  I highly recommend Stone Concepts!"',
  },
  {
    name: 'Adam',
    message:
      '"I couldn’t recommend Stone Concepts any more highly!  Great communication, stellar work, and reasonable prices!  Work was done on time, and based around our busy family’s schedule.  Working with Frank and his team was a pleasure.  You won’t be disappointed!"',
  },
  {
    name: 'Duane',
    message:
      '"Frank and crew are the best! Outstanding work and good prices, great people!"',
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

export default function Home() {
  const [hasScrolled, setHasScrolled] = useState(false)
  const [testies, setTesties] = useState(false)

  const onScroll = useCallback((e: any) => {
    setHasScrolled(e.target.scrollTop > 0)
    if (e.target.scrollTop <= document.body.clientHeight - 300)
      return setTesties(false)
    else setTesties(true)
  }, [])

  const scrollRef = useRef<HTMLDivElement>(null)
  const onViewGallery = useCallback(() => {
    if (!scrollRef.current) return console.error('no scroll ref')
    scrollRef.current.scrollTo({
      top: document.body.clientHeight * 3 + 50,
      behavior: 'smooth',
    })
  }, [])

  return (
    <div
      ref={scrollRef}
      onScroll={onScroll}
      className='overflow-y-auto overflow-x-hidden relative w-screen h-screen'
    >
      <div className='sticky top-[-44px] w-full z-10'>
        <div className='bg-stone-950 flex items-center justify-center text-center py-3'>
          <p className='text-white text-sm'>Stone Veneer Done Right</p>
        </div>
        <header
          className={cn(
            'flex items-center backdrop-blur-sm sticky top-0 justify-center transition-all duration-700 text-white',
            hasScrolled ? 'bg-stone-900/30' : 'bg-stone-900'
          )}
        >
          <div className=' px-20 py-3 flex items-center justify-between w-full max-w-[95rem]'>
            <Image src='/assets/LOGO.png' alt='logo' width={150} height={100} />
            <a href='tel:9136363773'>
              <Button className='bg-red-500 hover:bg-red-600 hover:shadow-2xl transition-all'>
                Call NOW
              </Button>
            </a>
          </div>
        </header>
      </div>
      <section className={'h-screen relative flex justify-center items-center'}>
        <Image
          src='/assets/hero.webp'
          alt='hero'
          layout='fill'
          objectFit='cover'
          objectPosition='center'
          className='absolute z-[-1]'
        />
        <div className='flex flex-col gap-10 p-10 bg-stone-900/40 w-full max-w-4xl items-center justify-center h-fit rounded-lg'>
          <h1 className='text-6xl font-bold text-white'>
            Stone Veneer Done Right
          </h1>
          <p className='text-white text-center'>
            Stone Concepts Offers Incredible Veneer with a variety of Styles,
            Colors and Lays to Perfect your Project! We are a family owned and
            operated business with over 40 years of experience in the stone
            veneer industry.
          </p>
          <div className='flex gap-10 items-center justify-center'>
            <Button
              onClick={onViewGallery}
              className='bg-red-500 hover:bg-red-600 hover:shadow-2xl transition-all'
            >
              View Gallery
            </Button>
            <Button className='bg-white text-stone-800 hover:bg-gray-200 hover:shadow-2xl transition-all'>
              FREE QUOTE
            </Button>
          </div>
        </div>
      </section>
      <section className='relative h-screen bg-stone-900/30'>
        {/* <h2
          className={cn(
            'text-4xl p-2 bg-stone-800/40 rounded-xl w-fit mx-auto translate-y-3 font-bold text-center text-white py-10 transition-all duration-700',
            testies ? 'scale-1 opacity-100' : 'scale-[.7] opacity-0'
          )}
        >
          Testimonials 😊
        </h2> */}
        <div
          className={cn(
            'absolute py-32 inset-0 w-full h-full flex flex-wrap items-start justify-center gap-10 transition-all duration-700',
            testies ? 'translate-x-0' : 'translate-x-full'
          )}
        >
          {TESTIES.map(({ name, message }) => (
            <div
              key={name}
              className='flex p-4 bg-stone-300 rounded-lg shadow-xl flex-col items-center w-full h-full max-w-96 max-h-80'
            >
              <h1 className='text-xl font-bold text-stone-900 mb-4'>{name}</h1>
              <p>{message}</p>
            </div>
          ))}
        </div>
        <div
          className={cn(
            'absolute inset-0 py-32 w-full h-full flex flex-wrap items-end justify-center gap-10 transition-all duration-700',
            testies ? 'translate-x-0' : '-translate-x-full'
          )}
        >
          {LAYS.map(({ name, img }) => (
            <div
              key={name}
              className='flex relative p-4 bg-white rounded-lg shadow-xl flex-col items-center w-full h-full max-w-96 max-h-80'
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
      <section className='relative  h-screen'>
        <Image
          src='/assets/after1.jpg'
          alt='hero'
          layout='fill'
          objectFit='cover'
          objectPosition='center'
          className='absolute z-[-1]'
        />
      </section>
      <section className='relative h-screen'>
        <p>GALLERY TODO</p>
      </section>
    </div>
  )
}
