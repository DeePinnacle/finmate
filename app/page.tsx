import { Button } from "@/components/ui/button";
import { Crown, PiggyBank } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { features, steps } from "@/data/data";
import { Check } from "lucide-react";
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

      {/* feature section starts here */}
      <section className="feature-section">
        {/* content */}
        <div className="w-full py-6 flex flex-col items-center justify-center">
          <h1 className="text-3xl text-center">
            Features{" "}
            <span className="text-finmate_secondary">That Empower Your</span>{" "}
            Finances
          </h1>
          <p className=" my-2 text-lg">What Sets FinMate Apart</p>
          {/* feature contents */}
          <div className="w-full p-2">
            {features?.map((feature) => (
              <div
                key={feature.id}
                className="w-full bg-finmate_secondary px-2 py-6 my-3"
              >
                {
                  <feature.icon className="text-finmate_primary my-3 text-5xl block mx-auto" />
                }
                <p className="text-finmate_primary text-3xl mb-3 text-center">
                  {feature.title}
                </p>
                <p className="text-finmate_primary text-center text-lg">
                  {feature.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* feature section ends here */}
      {/* How it works section starts here */}
      <section className="w-full">
        {/* content */}
        <div className="w-full py-6 flex flex-col items-center justify-center">
          <h1 className="text-3xl text-center">
            How <span className="text-finmate_secondary">FinMate</span> Works
          </h1>
          <p className=" my-2 text-lg">Your path to Financial Mastery</p>
          {/* feature contents */}
          <div className="w-full p-2">
            {steps?.map((step) => (
              <div key={step.id} className="w-full px-2 py-6 my-3">
                <p className="text-finmate_secondary text-2xl">
                  Step {step.id}: {step.title}
                </p>

                <p className="my-4 font-light font-inter leading-normal">
                  {step.description}
                </p>
                {/* {
                  step?.lists.map((list)=>(
                    <span key={list.id} className="flex flex-row gap-2 mt-2">
                      <Check className="text-finmate_secondary" />
                      <p className="text-finmate_secondary my-2">{list.title}: <span>{list.content}</span></p>
                    </span>
                  ))
                } */}
                <div className="w-full h-72 relative overflow-hidden">
                  <Image
                    src={`/${step.image}`}
                    alt={step.image}
                    fill
                    priority
                    objectFit="cover"
                    objectPosition="center"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* ends here */}

      {/* CTA Section starts here */}  
      <div className="w-full bg-finmate_secondary pb-7">
        <div className="w-full px-2">
         {/* cta content */}
          <div className="w-full py-8">
            <p className="text-5xl text-finmate_primary font-semibold mb-4">Take Charge of Your Finances Today!</p>
            <p className="my-3 text-lg">Transform your financial future with FinMate. Join thousands of users who are taking control of their money through smart tracking, dynamic budgeting, and actionable insights.</p>
            <Link href={""} className="bg-finmate_primary px-2 py-5 h-16 w-3/5 my-3 text-lg text-finmate_secondary font-light flex flex-row items-center justify-center hover:bg-finmate_primary">Get Started for Free</Link>
          </div>
          {/* cta image */}
          <div className="w-full h-96 bg-finmate_primary rounded-lg my-4"></div>
        </div>
      </div>
      {/* CTA Section ends here */}
    </>
  );
};

export default Finmate;
