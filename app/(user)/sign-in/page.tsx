import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="pb-9">
      <div className="flex flex-col items-center justify-center px-4 py-7">
        <h1 className="text-center text-finmate_primary text-2xl font-bold mb-2">
          Hello! Welcome back{" "}
        </h1>
        <p className="text-center text-lg">
          Log in to unlock a smarter way to manage your money and take control
          of your financial future.
        </p>
      </div>
      <form action="">
        <div className="flex flex-col px-2 login-wrapper">
          <div className="flex flex-col mb-2">
            <label htmlFor="email" className="mb-2">
              Email address:
            </label>
            <input
              type="text"
              id="email"
              placeholder="Enter your email address"
            />
          </div>{" "}
          <div className="flex flex-col mb-2">
            <label htmlFor="password" className="mb-2">
              Password
            </label>
            <input
              type="text"
              id="password"
              placeholder="Enter your password"
            />
          </div>
          <Link href="" className="text-right font-semibold my-2 underline">Forgot password</Link>
          <Button className="bg-finmate_primary h-12 text-lg">Sign in</Button>
          <span className="text-center my-2 block">Don&apos;t have an account yet? <Link href="/sign-up" className="font-semibold">Sign up</Link></span>
        </div>
      </form>
    </div>
  );
};

export default page;
