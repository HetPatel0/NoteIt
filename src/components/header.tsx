import { shadow } from '@/styles/util'
import Image from 'next/image'
import Link from 'next/link'
import React, { use } from 'react'
import { Button } from './ui/button';
import DarkModeToggle from './DarkmodeToggle';
import LogOutButton from './LogOutButton';
import { getUser } from '@/auth/server';
import { SidebarTrigger } from './ui/sidebar';

 async function header() {
  const users = await getUser();
  return (
    <header className=' relative flex h-24 w-full items-center justify-between bg-popover sm:px-8 ' 
    style={{boxShadow: shadow}}>

        <SidebarTrigger className=' absolute top-1 left-1 '/>
        <Link href="/" className='flex items-end gap-2'>
        <Image src="/logo.jpg" height={60} width={60} alt='logo' className='rounded-full' priority />
        <h1 className='flex flex-col pb-1 text-2xl font-semibold leading-6  '>
            Note <span>In</span>
        </h1>
        </Link>

        <div className='flex gap-4'>
           {
            users ? (
           <LogOutButton />
            ):(
              <>
                 <Button asChild>
                <Link href="/sign-up" className='hidden sm:block  '>   signup</Link>

              </Button>
              <Button asChild variant="outline">
                <Link href="/login">Login</Link>

              </Button>
              </>
            )
           }
           <DarkModeToggle />

        </div>
    </header>
  )
}

export default header