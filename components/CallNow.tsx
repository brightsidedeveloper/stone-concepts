'use client'

import { useEffect, useState } from 'react'
import { Button } from './ui/button'

export default function CallNow() {
  const [showNumber, setShowNumber] = useState(false)
  useEffect(() => {
    const onClickOutside = (e: any) => {
      if (showNumber) setShowNumber(false)
    }

    document.addEventListener('click', onClickOutside)

    return () => document.removeEventListener('click', onClickOutside)
  }, [showNumber])

  return (
    <>
      <a className='md:hidden' href='tel:9132065030'>
        <Button className='bg-red-500 hover:bg-red-600 hover:shadow-2xl transition-all'>
          Call NOW
        </Button>
      </a>
      <div className='hidden md:block relative overflow-visible'>
        <Button
          onClick={() => setShowNumber(!showNumber)}
          className='bg-red-500 hover:bg-red-600 hover:shadow-2xl transition-all'
        >
          Call NOW
        </Button>
        <div
          className={`absolute mememe origin-top rounded-md z-10 right-0 transition-all p-2 h-fit duration-500 -bottom-12 pointer-events-none bg-white/90 ${
            showNumber ? 'scale-y-100' : 'scale-y-0'
          }`}
        >
          <p
            className={`w-[10rem] text-center text-rose-500 text-lg font-bold  `}
          >
            (913) 206-5030
          </p>
        </div>
      </div>
    </>
  )
}
