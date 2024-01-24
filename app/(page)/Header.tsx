import CallNow from '@/components/CallNow'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import React from 'react'

export default function Header({ hasScrolled }: { hasScrolled: boolean }) {
  return (
    <div className='sticky overflow-visible top-[-44px] w-full z-20'>
      <div className='bg-stone-950 flex items-center justify-center text-center py-3'>
        <p className='text-white text-sm'>Stone Veneer Done Right</p>
      </div>
      <header
        className={cn(
          'flex overflow-visible items-center backdrop-blur-sm sticky top-0 justify-center transition-all duration-700 text-white',
          hasScrolled ? 'bg-stone-900/30' : 'bg-stone-900'
        )}
      >
        <div className='px-4 lg:px-20 py-3 flex items-center overflow-visible justify-between w-full max-w-[95rem]'>
          <Image
            priority
            src='/assets/LOGO.png'
            alt='logo'
            width={150}
            height={100}
          />
          <CallNow />
        </div>
      </header>
    </div>
  )
}
