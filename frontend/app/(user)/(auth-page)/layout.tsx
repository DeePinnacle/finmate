"use client"
import React from 'react'
import Image from 'next/image'
import { usePathname } from "next/navigation"
const Layout = ({ children }:{ children: React.ReactNode}) => {
  const pathname = usePathname()
  return (
    <div className="lg:flex lg:flex-col lg:items-center lg:justify-center lg:py-10">
    <div className="w-full max-w-6xl bg-gradient-to-br from-finmate_secondary to-finmate_primary lg:flex lg:flex-row lg:rounded-lg">
        <div className={`relative w-full h-96 md:h-[35rem] ${ pathname ==="/signin" ? "lg:h-[37rem]" : "lg:h-[57rem]" } `}>
            <Image 
                src={`${ pathname !== "/signin" ? "/register.png" : "/login.png" }`} 
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