'use client'

import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import { useCallback, useEffect, useRef, useState } from 'react'
import Header from './(page)/Header'
import Hero from './(page)/Hero'
import Testies from './(page)/Testies'
import BeforeAndAfter from './(page)/BeforeAndAfter'
import Gallery from './(page)/Gallery'

export default function Home() {
  const [hasScrolled, setHasScrolled] = useState(false)
  const [testies, setTesties] = useState(false)
  const [showGallery, setShowGallery] = useState(false)

  const onScroll = useCallback((e: any) => {
    setHasScrolled(e.target.scrollTop > 0)
    if (e.target.scrollTop <= document.body.clientHeight - 300)
      return setTesties(false)
    setTesties(true)
    if (e.target.scrollTop <= document.body.clientHeight * 3 - 350)
      return setShowGallery(false)
    setShowGallery(true)
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
      }, 5)
    }, 20_010)
    return () => clearInterval(interval)
  }, [])

  return (
    <div
      ref={scrollRef}
      onScroll={onScroll}
      className='overflow-y-auto overflow-x-hidden relative w-screen h-screen'
    >
      <Header hasScrolled={hasScrolled} />
      <Hero onViewGallery={onViewGallery} />
      <Testies testies={testies} />
      <BeforeAndAfter />
      <Gallery neverEnding={neverEnding} showGallery={showGallery} />
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
    </div>
  )
}
