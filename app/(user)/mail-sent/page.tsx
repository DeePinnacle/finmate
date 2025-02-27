import React from "react";
import Image from "next/image";
import Link from "next/link";
const MailSent = () => {
  return (
    <div className="bg-white w-full min-h-screen px-2 flex flex-col items-center justify-center">
      <div className="w-full max-w-4xl flex flex-col items-center justify-center">
        <div className="relative w-52 h-52 overflow-hidden">
          <Image
            src={"/sent5.png"}
            alt="mail-sent-photo"
            fill
            priority
            objectFit="cover"
            objectPosition="center"
          />
        </div>
        <p className="text-center text-finmate_primary text-2xl font-semibold my-2">Check Your Email!</p>
        <p className="text-finmate_secondary text-center text-lg">A password reset link has been sent to your inbox.</p>
        <p className="text-finmate_primary text-center text-base my-2">
          We&apos;ve just sent a password reset link to the email address you
          provided. Please check your inbox and follow the instructions to reset
          your password. If you don&apos;t see the email within a few minutes,
          be sure to check your spam folder or click &apos;Resend Email&apos;
          below.
        </p>
        <span className="flex flex-row items-center gap-4">
          <Link href={"/sign-in"} className="text-lg text-finmate_secondary">&larr; Back to Login</Link>
          <Link href={"/sign-in"} className="text-lg text-finmate_secondary">Resend Link &rarr; </Link>
        </span>
      </div>
    </div>
  );
};

export default MailSent;
