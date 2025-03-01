import Link from 'next/link';
import React from 'react'
import { FaPiggyBank } from 'react-icons/fa'
const Navbar = () => {
  return (
    <div className='w-full py-4 bg-finmate_primary flex flex-row items-center justify-between px-2 ring-offset-primary-foreground'>
        <div className='flex flex-row items-center gap-1'>
            <FaPiggyBank className='text-finmate_secondary w-7 h-7' />
            <p className="text-finmate_secondary hidden">Finmate</p>
        </div>
        <div className='flex flex-row items-center gap-2'>
          <Link href={"/signin"} className='text-finmate_secondary cursor-pointer'>Sign-in</Link> 
          <span className="text-finmate_secondary">/</span>
          <Link href={"/signup"} className='text-finmate_secondary cursor-pointer'>Sign-up</Link> 
        </div>
    </div>
  )
}

export default Navbar;