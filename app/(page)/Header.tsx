import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import React from 'react'

export default function Header({ hasScrolled }: { hasScrolled: boolean }) {
  return (
    <div className='sticky top-[-44px] w-full z-20'>
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
  )
}
