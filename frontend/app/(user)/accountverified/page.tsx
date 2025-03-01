import React from "react";
import Image from "next/image";
import LinkComponent from "@/components/LinkComponent";
const AccountVerified = () => {
  return (
    <div className="bg-white w-full min-h-screen px-2 flex flex-col items-center justify-center">
      <div className="w-full max-w-3xl flex flex-col items-center justify-center">
        <div className="relative w-52 h-52 overflow-hidden md:w-68 md:h-68">
          <Image
            src={"/verified.png"}
            alt="mail-sent-photo"
            fill
            priority
            objectFit="cover"
            objectPosition="center"
          />
        </div>
        <p className="text-center text-finmate_primary text-2xl font-semibold my-2 md:text-4xl lg:text-2xl">
          Account Verified Successfully!
        </p>
        <p className="text-finmate_secondary text-center text-lg md:text-2xl lg:text-lg">
          Thank you for confirming your email.
        </p>
        <p className="text-finmate_primary text-center text-base text-normal my-2 md:text-2xl lg:text-base lg:w-1/2"> 
          Your account has been successfully verified. You can now log in to
          access all the features of FinMate. Welcome aboard!
        </p>
        <LinkComponent
          title1="Back to Login"
          href1="signin"
        />
      </div>
    </div>
  );
};

export default AccountVerified;
