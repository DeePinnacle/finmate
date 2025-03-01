import React from 'react'
import Image from "next/image"
import LinkComponent from '@/components/LinkComponent'
import { Button } from '@/components/ui/button'
const ResetPassword = () => {
  return (
    <div className="bg-white w-full min-h-screen px-2 flex flex-col items-center justify-center">
    <div className="w-full max-w-4xl flex flex-col items-center justify-center">
      <div className="relative w-52 h-52 overflow-hidden">
        <Image
          src={"/reset.png"}
          alt="mail-sent-photo"
          fill
          priority
          objectFit="cover"
          objectPosition="center"
        />
      </div>
      <p className="text-center text-finmate_primary text-2xl font-semibold my-2 md:text-4xl lg:text-3xl">Reset Your Password</p>
      <p className="text-finmate_secondary text-center text-lg md:text-2xl lg:text-lg lg:w-1/2">Enter your new password below and confirm it to update your account.</p>
      <form>
        <div className='flex flex-col my-2 w-full'>
          <label htmlFor="password" className="text-finmate_primary text-lg font-semibold md:text-2xl lg:text-base">New Password:</label>
          <input type="password" id="password" className="outline-none border border-solid border-finmate_primary my-1 p-2 py-3 rounded-md text-lg text-finmate_primary md:text-2xl lg:tex-base" />
          <label htmlFor="confirm-password" className="text-finmate_primary text-lg font-semibold md:text-2xl lg:text-base">Confirm New Password:</label>
          <input type="password" id="confirm-password" className="outline-none border border-solid border-finmate_primary my-1 p-2 rounded-md text-lg text-finmate_primary md:text-2xl lg:text-base" />
          <Button className="my-2 h-12 text-lg cursor-pointer hover:bg-finmate_primary lg:text-base">Reset Password</Button>
        </div>
      </form>
      <LinkComponent 
        title1="Back to Login"
        title2='Back to Register'
        href1='signin'
        href2='signup'
      />
    </div>
  </div>
  )
}

export default ResetPassword;