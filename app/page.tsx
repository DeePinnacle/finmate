"use client";
import { Button } from "@/components/ui/button";
import { Crown, PiggyBank } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { features, steps, testimonial, faqs } from "@/data/data";
import { FaStar } from "react-icons/fa";

// embla imports
import useEmblaCarousel from "embla-carousel-react";
import { EmblaOptionsType } from "embla-carousel";
import {} from "embla-carousel-autoplay";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "@/components/ui/EmblaButtons";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Finmate = () => {
  // configuring the embla options
  const OPTIONS: EmblaOptionsType = {
    slidesToScroll: 1,
    containScroll: "trimSnaps",
    loop: false,
  };
  const [sliderRef, emblaApi] = useEmblaCarousel(OPTIONS);
  // button configuration
  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);
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
            <p className="text-5xl text-finmate_primary font-semibold mb-4">
              Take Charge of Your Finances Today!
            </p>
            <p className="my-3 text-lg">
              Transform your financial future with FinMate. Join thousands of
              users who are taking control of their money through smart
              tracking, dynamic budgeting, and actionable insights.
            </p>
            <Link
              href={""}
              className="bg-finmate_primary px-2 py-5 h-16 w-3/5 my-3 text-lg text-finmate_secondary font-light flex flex-row items-center justify-center hover:bg-finmate_primary"
            >
              Get Started for Free
            </Link>
          </div>
          {/* cta image */}
          <div className="w-full h-96 bg-finmate_primary rounded-lg my-4 pt-8 overflow-hidden">
            <div className="w-full h-96 relative overflow-hidden">
              <Image
                src="/chart_1.png"
                alt="chat"
                fill
                priority
                objectFit="cover"
                objectPosition="center"
              />
            </div>
          </div>
        </div>
      </div>
      {/* CTA Section ends here */}
      {/* testimonial section starts here */}
      <div className="w-full py-7 px-2 bg-finmate_primary">
        <div className="w-full p-2 bg-finmate_primary text-finmate_secondary">
          <h1>Hear it From Our Users</h1>
          <p>
            Discover how FinMate is empowering everyday Nigerians to master
            their finances and achieve their dreams.
          </p>
          <div className="slider__carousel">
            <div className="slider__viewport" ref={sliderRef}>
              <div className="slider__track my-6">
                {testimonial?.map((item) => (
                  <div key={item.id} className="slider__carousel__item">
                    <div className="flex flex-row items-center gap-2">
                      <div className="relative w-14 h-14 rounded-full overflow-hidden">
                        <Image
                          src="/user2.jpg"
                          alt="testimonial-image"
                          fill
                          priority
                          objectFit="cover"
                          objectPosition="center"
                        />
                      </div>
                      <p>{item.name}</p>
                    </div>
                    <p className="my-5 font-light">{item.testimony}</p>
                    <span className="flex flex-row items-center gap-2 mb-2">
                      <FaStar className="text-yellow-500 text-2xl" />
                      <FaStar className="text-yellow-500 text-2xl" />
                      <FaStar className="text-yellow-500 text-2xl" />
                      <FaStar className="text-yellow-500 text-2xl" />
                      <FaStar className="text-yellow-500 text-2xl" />
                    </span>
                    <p>{item.location}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="embla__controls">
            <div className="embla__buttons">
              <PrevButton
                onClick={onPrevButtonClick}
                disabled={prevBtnDisabled}
              />
              <NextButton
                onClick={onNextButtonClick}
                disabled={nextBtnDisabled}
              />
            </div>
          </div>
        </div>
      </div>
      {/* ends here */}
      {/* faq section starts here */}
      <div className="w-full my-9">
        <div className="w-full max-w-6xl px-2 py-4">
          <div>
            <h1 className="text-4xl font-semibold">
              Frequently Asked Questions
            </h1>
            <p className="my-3">
              Your top questions about FinMate answered—learn how to make the
              most of your financial journey.
            </p>
            <div className="w-full h-80 relative overflow-hidden">
              <Image
                src="/faq.png"
                alt="faq-image"
                fill
                priority
                objectFit="cover"
                objectPosition="center"
              />
            </div>
          </div>
          <div className="mt-4">
            <Accordion type="single" collapsible className="w-full">
              <div>
                {faqs?.map((faq) => (
                  <AccordionItem key={faq.id} value={`item-${faq.id}`}>
                    <AccordionTrigger className="text-lg">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="font-light text-lg">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </div>
            </Accordion>
          </div>
        </div>
      </div>
      {/* ends here */}

      {/* footer section */}
      <div className="w-full">
        <span>
          <p>FinMate</p>
          <p>
            FinMate is a comprehensive personal finance tracker designed to help
            you log expenses, manage budgets, set savings goals, and generate
            detailed financial reports—all in one user-friendly platform.
          </p>
        </span>
        <ul>
          <li>Quick Link</li>
          <li>
            <Link href="">About</Link>
          </li>{" "}
          <li>
            <Link href="">Features</Link>
          </li>{" "}
          <li>
            <Link href="">How it Works</Link>
          </li>{" "}
          <li>
            <Link href="">FAQs</Link>
          </li>
        </ul>
      </div>
      {/* footer section ends */}
    </>
  );
};

export default Finmate;
