'use client'

import { Toaster } from 'react-hot-toast'
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

  const g1Ref = useRef<HTMLDivElement>(null)
  const g2Ref = useRef<HTMLDivElement>(null)
  const onFreeQuote = useCallback(() => {
    if (!scrollRef.current) return console.error('no scroll ref')
    const heights = [g1Ref.current?.clientHeight, g2Ref.current?.clientHeight]
    const galleryHeight =
      heights?.reduce((acc: number, h) => (h ? acc + h : acc), 0) ?? 0
    const magicNumber = 50
    scrollRef.current.scrollTo({
      top: document.body.clientHeight * 3 + galleryHeight + magicNumber,
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
      <Hero onViewGallery={onViewGallery} onFreeQuote={onFreeQuote} />
      <Testies testies={testies} />
      <BeforeAndAfter onFreeQuote={onFreeQuote} />
      <Gallery
        neverEnding={neverEnding}
        showGallery={showGallery}
        onFreeQuote={onFreeQuote}
        g1Ref={g1Ref}
        g2Ref={g2Ref}
      />
      <ClosingForm />
      <Footer />
      <Toaster />
    </div>
  )
}
