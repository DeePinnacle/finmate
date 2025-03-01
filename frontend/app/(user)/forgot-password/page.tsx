import React from "react";
import { LockKeyhole } from "lucide-react";
import { Button } from "@/components/ui/button";
import LinkComponent from "@/components/LinkComponent";
const ForgotPassword = () => {
  return (
    <div className="w-full h-screen bg-white flex flex-col items-center justify-center px-2">
      <div className="flex flex-col items-center justify-center mb-6">
        <div className="w-24 h-24 bg-finmate_primary mx-auto rounded-full mb-3 flex flex-col items-center justify-center">
          <LockKeyhole className="text-finmate_secondary w-14 h-14" />
        </div>
        <p className="text-center text-finmate_primary text-2xl font-bold mb-2 md:text-3xl lg:text-2xl">
          Forgot Your Password?
        </p>
        <p className="text-center text-finmate_secondary text-lg md:text-2xl md:md:w-3/4 lg:text-base lg:w-1/2">
          No, worries we&apos;ve got you covered! Reset your password in just a
          few easy steps and regain access to your FinMate account.
        </p>
      </div>
      <div className="bg-white w-full max-w-xl shadow-xl shadow-slate-50 rounded-lg py-16 px-2 md:px-4 lg:py-6">
        <form>
          <div className="flex flex-col">
            <label htmlFor="email" className="text-lg text-finmate_primary font-semibold md:text-3xl lg:text-lg">Email address:</label>
            <input
              type="text"
              id="email"
              placeholder="Enter your email address"
              className="text-finmate_primary text-lg w-full px-2 py-3 my-3 border border-solid border-finmate_primary rounded-md outline-none mt-3 md:py-4 md:text-2xl lg:text-base"
            />
            <Button className="bg-finmate_primary text-lg w-full h-12 my-4 hover:bg-finmate_primary md:h-16 md:text-2xl lg:text-base">Reset Password</Button>
            <LinkComponent 
              title1="Back to Login"
              title2="Back to Register"
              href1="signin"
              href2="signup"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
