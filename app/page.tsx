import { Button } from "@/components/ui/button";
import { Crown, PiggyBank } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
const Finmate = () => {
  return (
    <>
      {/* hero section starts */}
      <section className="hero">
        {/* <Spotlight /> */}
        <div className="px-2 py-8 relative z-[3]">
          <div className="text-wrapper">
            <p className="bg-finmate_primary text-finmate_secondary text-center text-lg px-2 py-4 my-6 rounded-full flex flex-row items-center justify-evenly">
              <Crown className="w-8 h-8" />
              #Finmate-MasterYourMoney
              <PiggyBank className="w-8 h-8" />
            </p>
            <h1 className="text-4xl text-center font-light">
              Smarter{" "}
              <span className="text-finmate_secondary font-bold">
                Spending.
              </span>{" "}
              Bigger{" "}
              <span className="text-finmate_secondary font-bold">Savings.</span>{" "}
              Better{" "}
              <span className="text-finmate_secondary font-bold">Future.</span>{" "}
            </h1>
            <p className="text-center font-light mt-4 mb-3">
              Track expenses, set budgets, and achieve your savings goals
              effortlessly.{" "}
              <span className="text-finmate_secondary font-bold">Finmate</span>{" "}
              helps you manage your money smarter—anytime, anywhere.
            </p>
            {/* testimonial */}
            <div className="testimonial-container p-2 my-3">
              <span className="flex flex-row items-center gap-6">
                <div className="relative w-12 h-12 rounded-full overflow-hidden bg-white">
                  <Image
                    src="/user2.jpg"
                    alt="user-image"
                    fill
                    priority
                    objectFit="cover"
                    objectPosition="center"
                  />
                </div>
                <p className="w-4/5 italic">
                  &ldquo;Since using Finmate, I&apos; saved 30 more each
                  month!&rdquo;-John Doe
                </p>
              </span>
            </div>
            {/* buttons */}
            <div className="flex flex-row items-center gap-2 p-2">
              <Link
                href={""}
                className="bg-finmate_primary text-finmate_secondary px-2 py-3 h-14 w-3/5 flex flex-row items-center justify-center rounded-full shadow-lg shadow-finmate_secondary/30"
              >
                Get started
              </Link>
              <Button className="bg-finmate_secondary text-finmate_primary px-2 py-3 h-14 w-3/5 flex flex-row items-center justify-center rounded-full shadow-lg shadow-finmate_secondary/30 hover:bg-transparent hover:delay-200 hover:transition-all hover:ease-in-out hover:text-finmate_secondary">
                How it works
              </Button>
            </div>
          </div>
          {/* image wrapper */}
          <div>
            <div className="relative w-full h-96 overflow-hidden">
              <Image
                src="/hero-img.png"
                alt="hero-image"
                fill
                priority
                objectFit="cover"
                objectPosition="center"
              />
            </div>{" "}
            <div className="relative w-full h-96 overflow-hidden hidden">
              <Image
                src="/hero-img.png"
                alt="hero-image"
                fill
                priority
                objectFit="cover"
                objectPosition="center"
              />
            </div>{" "}
            <div className="relative w-full h-96 overflow-hidden hidden">
              <Image
                src="/hero-img.png"
                alt="hero-image"
                fill
                priority
                objectFit="cover"
                objectPosition="center"
              />
            </div>
          </div>
        </div>
      </section>
      {/* hero section ends */}
    </>
  );
};

export default Finmate;
