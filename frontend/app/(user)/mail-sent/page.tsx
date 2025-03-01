import React from "react";
import Image from "next/image";
import LinkComponent from "@/components/LinkComponent";
const MailSent = () => {
  return (
    <div className="bg-white w-full min-h-screen px-2 flex flex-col items-center justify-center">
      <div className="w-full max-w-3xl flex flex-col items-center justify-center">
        <div className="relative w-52 h-52 overflow-hidden md:w-64 md:h-64">
          <Image
            src={"/sent5.png"}
            alt="mail-sent-photo"
            fill
            priority
            objectFit="cover"
            objectPosition="center"
          />
        </div>
        <p className="text-center text-finmate_primary text-2xl font-semibold my-2 md:text-4xl lg:text-2xl">Check Your Email!</p>
        <p className="text-finmate_secondary text-center text-lg md:text-2xl lg:text-lg">A password reset link has been sent to your inbox.</p>
        <p className="text-finmate_primary text-center text-base leading-normal my-2 md:text-2xl lg:text-base lg:w-3/5">
          We&apos;ve just sent a password reset link to the email address you
          provided. Please check your inbox and follow the instructions to reset
          your password. If you don&apos;t see the email within a few minutes,
          be sure to check your spam folder or click &apos;Resend Email&apos;
          below.
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

export default MailSent;
