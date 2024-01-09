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
import ClosingForm from './(page)/ClosingForm'
import Footer from './(page)/Footer'

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
      <ClosingForm />
      <Footer />
    </div>
  )
}
