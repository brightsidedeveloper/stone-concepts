'use client'

import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import { useCallback, useEffect, useRef, useState } from 'react'

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

  const [neverEnding, setNeverEnding] = useState(0)
  useEffect(() => {
    setNeverEnding(1)
    const interval = setInterval(() => {
      setNeverEnding(0)
      setTimeout(() => {
        setNeverEnding(1)
      }, 1)
    }, 20_000)
    return () => clearInterval(interval)
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
          <div className='px-4 lg:px-20 py-3 flex items-center justify-between w-full max-w-[95rem]'>
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
          <h1 className='text-4xl lg:text-6xl font-bold text-white text-center'>
            Stone Veneer
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
            <a href='tel:9136363773'>
              <Button className='bg-white text-stone-800 hover:bg-gray-200 hover:shadow-2xl transition-all'>
                FREE QUOTE
              </Button>
            </a>
          </div>
        </div>
      </section>
      <section className='relative h-screen bg-stone-900/30'>
        <div
          className={cn(
            'absolute py-4 lg:py-32 z-[1] inset-0 w-full h-full flex flex-wrap items-start flex-col ml-2 lg:ml-0 lg:flex-row justify-center gap-8 lg:gap-10 transition-all duration-700',
            testies ? 'translate-x-0' : 'translate-x-full'
          )}
        >
          {TESTIES.map(({ name, message }) => (
            <div
              key={name}
              className='flex p-4 relative bg-stone-300 rounded-lg shadow-xl flex-col items-center w-full h-full max-w-[15rem] max-h-[15rem] lg:max-w-96 lg:max-h-80'
            >
              <h1 className='text-lg font-bold text-stone-900 -mt-3 lg:mt-0 lg:mb-4'>
                {name}
              </h1>
              <p className='text-xs lg:text-base'>{message}</p>
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
      <section className='relative  h-screen'>
        <div className='flex w-full h-full'>
          <div className='h-full w-full'>
            <div className='relative w-full h-1/2'>
              <Image
                src='/assets/b4.jpg'
                alt='hero'
                layout='fill'
                objectFit='cover'
                objectPosition='center'
                className='absolute z-[-1]'
              />
            </div>
            <div className='relative w-full h-1/2'>
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
          <div className='absolute bg-stone-100/90 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg shadow-xl p-4 lg:p-10 flex flex-col items-center justify-center gap-4 lg:gap-10'>
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
            <div className='relative w-full h-1/2'>
              <Image
                src='/assets/after1.jpg'
                alt='hero'
                layout='fill'
                objectFit='cover'
                objectPosition='center'
                className='absolute z-[-1]'
              />
            </div>
            <div className='relative w-full h-1/2'>
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
      <section className='relative h-screen backdrop-blur-sm bg-stone-900/30'>
        <p>GALLERY TODO</p>
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
      </section>
    </div>
  )
}
