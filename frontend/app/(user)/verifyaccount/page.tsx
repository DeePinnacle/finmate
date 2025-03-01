import React from "react";
import Image from "next/image";
import LinkComponent from "@/components/LinkComponent";
const VerifyAccount = () => {
  return (
    <div className="bg-white w-full min-h-screen px-2 flex flex-col items-center justify-center">
      <div className="w-full max-w-3xl flex flex-col items-center justify-center">
        <div className="relative w-52 h-52 overflow-hidden">
          <Image
            src={"/sent4.png"}
            alt="mail-sent-photo"
            fill
            priority
            objectFit="cover"
            objectPosition="center"
          />
        </div>
        <p className="text-center text-finmate_primary text-2xl font-semibold my-2 md:text-4xl lg:text-2xl">
          Registration Successful!
        </p>
        <p className="text-finmate_secondary text-center text-lg md:text-2xl lg:text-lg">
          Please check your email to verify your account.
        </p>
        <p className="text-finmate_primary text-center text-base leading-normal my-2 md:text-2xl lg:text-base lg:w-2/3">
          We&apos;ve sent a verification email to the address you provided
          during registration. Click the link in the email to complete your
          account setup. If you don&apos;t see the email in your inbox within a
          few minutes, please check your spam folder or click &apos;Resend
          Email&apos;. below.
        </p>
        <LinkComponent
          title1="Back to Login"
          title2="Resend Link"
          href1="signin"
          href2="signup"
        />
      </div>
    </div>
  );
};

export default VerifyAccount;
