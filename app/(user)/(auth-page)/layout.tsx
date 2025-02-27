"use client"
import React from 'react'
import Image from 'next/image'
import { usePathname } from "next/navigation"
const Layout = ({ children }:{ children: React.ReactNode}) => {
  const pathname = usePathname()
  return (
    <div className="lg:flex lg:flex-col lg:items-center lg:justify-center">
    <div className="w-full min-h-screen bg-gradient-to-br from-finmate_secondary to-finmate_primary p-2">
        <div className='relative w-full h-96'>
            <Image 
                src={`${ pathname !== "/sign-in" ? "/register.png" : "/login.png" }`} 
                alt="login-image" 
                fill 
                priority 
                objectFit='cover'
                objectPosition='center'
            />
        </div>
        { children }
    </div>
    </div>
  )
}

export default Layout