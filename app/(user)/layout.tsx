import React from 'react'
import Image from 'next/image'
const layout = ({ children }:{ children: React.ReactNode}) => {
  return (
    <div className="lg:flex lg:flex-col lg:items-center lg:justify-center">
    <div className="w-full min-h-screen bg-gradient-to-br from-finmate_secondary to-finmate_primary p-2">
        <div className='relative w-full h-96'>
            <Image 
                src="/login.png" 
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

export default layout