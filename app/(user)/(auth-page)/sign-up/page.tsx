import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="pb-9">
      <div className="flex flex-col items-center justify-center px-4 py-7">
        <h1 className="text-center text-finmate_primary text-2xl font-bold mb-2">
          Join Finmate Today! ❤️{" "}
        </h1>
        <p className="text-center text-lg">
          Sign up now and take your first stop towards smarter money management. Experience a world where penny counts.
        </p>
      </div>
      <form action="">
        <div className="flex flex-col px-2 form-wrapper">
          <div className="flex flex-col mb-2">
            <label htmlFor="firstname" className="mb-2">
              Firstname:
            </label>
            <input
              type="text"
              id="firstname"
              placeholder="Enter your email address"
            />
          </div>{" "}
          <div className="flex flex-col mb-2">
            <label htmlFor="lastname" className="mb-2">
              Lastname:
            </label>
            <input
              type="text"
              id="lastname"
              placeholder="Enter your email address"
            />
          </div>{" "}
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
              Password:
            </label>
            <input
              type="text"
              id="password"
              placeholder="Enter your email address"
            />
          </div>{" "}
          <div className="flex flex-col mb-2">
            <label htmlFor="confirmPassword" className="mb-2">
              Password
            </label>
            <input
              type="text"
              id="confirmPassword"
              placeholder="Enter your password"
            />
          </div>
          <Link href="/forgot-password" className="text-right font-semibold my-2 underline cursor-pointer">
            Forgot password
          </Link>
          <Button className="bg-finmate_primary h-12 text-lg">Sign in</Button>
          <span className="text-center my-2 block">
            Already have an account? <Link href="/sign-in" className="font-semibold">Sign up</Link>
          </span>
        </div>
      </form>
    </div>
  );
};

export default page;
