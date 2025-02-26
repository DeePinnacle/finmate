import React from "react";
import { LockKeyhole } from "lucide-react";
import Link from "next/link"
import { Button } from "@/components/ui/button";
const ForgotPassword = () => {
  return (
    <div className="w-full h-screen bg-white flex flex-col items-center justify-center px-2">
      <div className="flex flex-col items-center justify-center mb-6">
        <div className="w-24 h-24 bg-finmate_primary mx-auto rounded-full mb-3 flex flex-col items-center justify-center">
          <LockKeyhole className="text-finmate_secondary w-14 h-14" />
        </div>
        <p className="text-center text-finmate_primary text-2xl font-bold mb-2">
          Forgot Your Password?
        </p>
        <p className="text-center text-finmate_secondary text-lg">
          No, worries we&apos;ve got you covered! Reset your password in just a
          few easy steps and regain access to your FinMate account.
        </p>
      </div>
      <div className="bg-white w-full max-w-xl shadow-xl shadow-slate-50 rounded-lg py-24 px-2">
        <form>
          <div className="flex flex-col">
            <label htmlFor="email" className="text-lg text-finmate_primary">Email address:</label>
            <input
              type="text"
              id="email"
              placeholder="Enter your email address"
              className="text-finmate_primary text-lg w-full px-2 py-3 my-3 border border-solid border-finmate_primary rounded-md outline-none mt-3"
            />
            <div className="flex flex-row items-center justify-between my-2">
                <Link href={"/sign-in"} className="text-lg text-finmate_primary font-semibold">Sign in</Link>
                <Link href={"/sign-in"} className="text-lg text-finmate_primary font-semibold">Sign up</Link>
            </div>
            <Button className="bg-finmate_primary text-lg w-full h-12 my-3 hover:bg-finmate_primary">Reset Password</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
