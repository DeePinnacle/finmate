"use client";
import { Button } from "@/components/ui/button";
import { Crown, PiggyBank, PhoneCall, Send, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { features, steps, testimonial, faqs } from "@/data/data";
import { FaStar, FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

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
import Navbar from "@/components/Navbar";

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
        <div className="px-2 py-8 relative z-[3] lg:flex lg:flex-col lg:items-center lg:justify-center">
          <Navbar />
          <p className="bg-finmate_primary text-finmate_secondary text-center text-lg px-2 py-4 my-6 rounded-full flex flex-row items-center justify-evenly md:text-3xl lg:text-base lg:w-1/2">
            <Crown className="w-8 h-8 lg:w-6 lg:h-6" />
            #Finmate-MasterYourMoney
            <PiggyBank className="w-8 h-8 lg:w-6 lg:h-6" />
          </p>
          <div className="w-full max-w-6xl lg:flex lg:flex-row gap-6">
            <div className="text-wrapper  lg:w-full lg:max-w-2xl">
              <h1 className="text-4xl text-center font-light md:text-6xl md:leading-normal lg:text-7xl lg:text-left">
                Smarter{" "}
                <span className="text-finmate_secondary font-bold">
                  Spending.
                </span>{" "}
                Bigger{" "}
                <span className="text-finmate_secondary font-bold">
                  Savings.
                </span>{" "}
                Better{" "}
                <span className="text-finmate_secondary font-bold">
                  Future.
                </span>{" "}
              </h1>
              <p className="text-center font-light mt-4 mb-3 md:text-3xl lg:text-left lg:text-base">
                Track expenses, set budgets, and achieve your savings goals
                effortlessly.{" "}
                <span className="text-finmate_secondary font-bold">
                  Finmate
                </span>{" "}
                helps you manage your money smarter—anytime, anywhere.
              </p>
              {/* testimonial */}
              <div className="testimonial-container p-2 my-3">
                <span className="flex flex-row items-center gap-6">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden bg-white md:w-16 md:h-16">
                    <Image
                      src="/user2.jpg"
                      alt="user-image"
                      fill
                      priority
                      objectFit="cover"
                      objectPosition="center"
                    />
                  </div>
                  <p className="w-4/5 italic md:text-3xl md:font-light lg:text-base">
                    &ldquo;Since using Finmate, I&apos; saved 30 more each
                    month!&rdquo;-John Doe
                  </p>
                </span>
              </div>
              {/* buttons */}
              <div className="flex flex-row items-center gap-2 p-2">
                <Link
                  href={""}
                  className="get__started__style"
                >
                  Get started
                </Link>
                <Button className="bg-finmate_secondary text-finmate_primary px-2 py-3 h-14 w-3/5 flex flex-row items-center justify-center rounded-full shadow-lg shadow-finmate_secondary/30 hover:bg-transparent hover:delay-200 hover:transition-all hover:ease-in-out hover:text-finmate_secondary md:h-20 md:text-3xl lg:text-base">
                  How it works
                </Button>
              </div>
            </div>
            {/* image wrapper */}
            <div className="relative w-full h-96 overflow-hidden md:h-[35rem] lg:overflow-visible">
              <Image
                src="/hero-img.png"
                alt="hero-image"
                fill
                priority
                objectFit="cover"
                objectPosition="center"
              />
            </div>{" "}
            {/* <div className="lg:max-w-7xl lg:w-full">
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
            </div> */}
          </div>
        </div>
      </section>
      {/* hero section ends */}

      {/* feature section starts here */}
      <section className="feature-section lg:flex lg:flex-col lg:items-center lg:justify-center">
        {/* content */}
        <div className="w-full py-6 flex flex-col items-center justify-center lg:max-w-6xl">
          <h1 className="text-3xl text-center md:text-5xl lg:text-4xl">
            Features{" "}
            <span className="text-finmate_secondary">That Empower Your</span>{" "}
            Finances
          </h1>
          <p className=" my-2 text-lg md:text-3xl lg:text-base">What Sets FinMate Apart</p>
          {/* feature contents */}
          <div className="w-full p-2 md:px-4 lg:grid lg:grid-cols-3 lg:gap-4">
            {features?.map((feature) => (
              <div
                key={feature.id}
                className="w-full bg-finmate_secondary px-2 py-6 my-3 md:py-9"
              >
                {
                  <feature.icon className="text-finmate_primary my-3 text-5xl block mx-auto" />
                }
                <p className="text-finmate_primary font-semibold text-3xl mb-3 text-center md:text-4xl lg:text-2xl">
                  {feature.title}
                </p>
                <p className="text-finmate_primary text-center text-lg md:text-3xl md:leading-relaxed lg:text-base lg:leading-normal">
                  {feature.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* feature section ends here */}

      {/* How it works section starts here */}
      <section className="w-full lg:flex lg:flex-row lg:items-center lg:justify-center">
        {/* content */}
        <div className="w-full py-6 flex flex-col items-center justify-center lg:max-w-6xl">
          <h1 className="text-3xl text-center md:text-5xl lg:text-4xl">
            How <span className="text-finmate_secondary">FinMate</span> Works
          </h1>
          <p className=" my-2 text-lg md:text-3xl lg:text-base">
            Your path to Financial Mastery
          </p>
          {/* feature contents */}
          <div className="w-full p-2 lg:grid lg:grid-cols-2 lg:gap-4 lg:items-center lg:justify-center">
            {steps?.map((step) => (
              <div key={step.id} className="w-full px-2 py-6 my-3 lg:w-4/5 lg:mx-auto">
                <p className="text-finmate_secondary text-2xl md:text-4xl md:font-semibold lg:text-3xl">
                  Step {step.id}: {step.title}
                </p>

                <p className="my-4 font-light font-inter leading-normal text-lg md:text-3xl md:font-light md:leading-relaxed lg:text-base">
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
                <div className="w-full h-72 relative overflow-hidden md:h-[35rem] lg:h-80 lg:overflow-visible">
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
      <div className="w-full bg-finmate_secondary pb-7 md:py-9 lg:py-9">
        <div className="w-full px-2 lg:flex lg:flex-row">
          {/* cta content */}
          <div className="w-full py-8">
            <p className="text-5xl text-finmate_primary font-semibold mb-4 md:text-8xl">
              Take Charge of Your Finances Today!
            </p>
            <p className="my-3 text-lg md:text-3xl md:leading-relaxed lg:text-base lg:w-4/5">
              Transform your financial future with FinMate. Join thousands of
              users who are taking control of their money through smart
              tracking, dynamic budgeting, and actionable insights.
            </p>
            <Link
              href={""}
              className="bg-finmate_primary px-2 py-5 h-16 w-3/5 my-3 text-lg text-finmate_secondary font-light flex flex-row items-center justify-center hover:bg-finmate_primary md:h-24 md:text-3xl lg:text-base lg:h-16"
            >
              Get Started for Free
            </Link>
          </div>
          {/* cta image */}
          <div className="w-full h-96 bg-finmate_primary rounded-lg my-4 pt-8 overflow-hidden md:h-[50rem] lg:h-[35rem]">
            <div className="w-full h-96 relative overflow-hidden md:h-[50rem] lg:h-[35rem]">
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
        <div className="w-full p-2">
          <h1 className="text-4xl font-semibold md:text-5xl lg:text-center">
            Hear it From Our Users
          </h1>
          <p className="my-3 text-lg md:text-3xl md:font-light md:leading-relaxed lg:text-center lg:text-base lg:w-2/4 lg:mx-auto">
            Discover how FinMate is empowering everyday Nigerians to master
            their finances and achieve their dreams.
          </p>
          <div className="slider__carousel">
            <div className="slider__viewport" ref={sliderRef}>
              <div className="slider__track my-6">
                {testimonial?.map((item) => (
                  <div
                    key={item.id}
                    className="slider__carousel__item px-3 md:py-6"
                  >
                    <div className="flex flex-row items-center gap-2">
                      <div className="relative w-14 h-14 rounded-full overflow-hidden md:w-24 md:h-24">
                        <Image
                          src="/user2.jpg"
                          alt="testimonial-image"
                          fill
                          priority
                          objectFit="cover"
                          objectPosition="center"
                        />
                      </div>
                      <p className="md:text-3xl">{item.name}</p>
                    </div>
                    <p className="my-5 font-light md:text-3xl md:leading-normal lg:text-base">
                      {item.testimony}
                    </p>
                    <span className="flex flex-row items-center gap-2 mb-2">
                      <FaStar className="text-yellow-500 text-2xl md:text-3xl" />
                      <FaStar className="text-yellow-500 text-2xl md:text-3xl" />
                      <FaStar className="text-yellow-500 text-2xl md:text-3xl" />
                      <FaStar className="text-yellow-500 text-2xl md:text-3xl" />
                      <FaStar className="text-yellow-500 text-2xl md:text-3xl" />
                    </span>
                    <p className="md:text-3xl">{item.location}</p>
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
      <div className="w-full my-9 lg:flex lg:flex-row lg:items-center lg:justify-center">
        <div className="w-full max-w-6xl px-2 py-4 lg:flex lg:flex-row lg:gap-4">
          <div className="lg:w-[900px]">
            <h1 className="text-4xl font-semibold md:text-6xl">
              Frequently Asked Questions
            </h1>
            <p className="my-3 text-lg md:text-3xl md:font-light md:leading-normal lg:text-base">
              Your top questions about FinMate answered—learn how to make the
              most of your financial journey.
            </p>
            <div className="w-full h-80 relative overflow-hidden md:my-4 md:h-[40rem] lg:h-96 lg:overflow-hidden">
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
              <div className="lg:grid lg:grid-cols-2 lg:gap-2">
                {faqs?.map((faq) => (
                  <AccordionItem key={faq.id} value={`item-${faq.id}`}>
                    <AccordionTrigger className="my-4 text-lg hover:text-finmate_secondary md:text-3xl md:font-light lg:text-base">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="font-light text-lg border-b-finmate_secondary md:text-3xl md:font-light md:leading-relaxed lg:text-base">
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
      <div className="w-full px-2 py-6 bg-finmate_primary/20 lg:grid lg:grid-cols-3 lg:gap-6 lg:py-9 lg:px-8">
        <span className="my-4 block">
          <p className="text-2xl font-semibold md:text-4xl lg:text-2xl">About FinMate</p>
          <p className="leading-normal font-light font-inter text-lg mt-3 md:text-3xl md:font-light md:leading-normal lg:text-base">
            FinMate is a comprehensive personal finance tracker designed to help
            you log expenses, manage budgets, set savings goals, and generate
            detailed financial reports—all in one user-friendly platform.
          </p>
        </span>
        <ul className="my-3 footer-ui lg:my-0">
          <li className="text-2xl font-semibold mb-3 md:text-4xl md:mt-6 lg:mt-0 lg:text-2xl">
            Quick Links
          </li>
          <li>
            <Link href="" className="text-lg md:text-3xl md:font-light lg:text-base">
              About
            </Link>
          </li>{" "}
          <li>
            <Link href="" className="text-lg md:text-3xl md:font-light lg:text-base">
              Features
            </Link>
          </li>{" "}
          <li>
            <Link href="" className="text-lg md:text-3xl md:font-light lg:text-base">
              How it Works
            </Link>
          </li>{" "}
          <li>
            <Link href="" className="text-lg md:text-3xl md:font-light lg:text-base">
              FAQs
            </Link>
          </li>
        </ul>{" "}
        <ul className="my-3 footer-ui lg:my-0">
          <li className="text-2xl font-semibold mb-3 md:text-4xl lg:text-2xl">Contacts</li>
          <li>
            <Link
              href=""
              className="flex flex-row items-center gap-2 text-lg md:text-3xl md:font-light lg:text-base"
            >
              <PhoneCall /> About
            </Link>
          </li>{" "}
          <li>
            <Link
              href=""
              className="flex flex-row items-center gap-2 text-lg md:text-3xl md:font-light lg:text-base"
            >
              <Send /> support@finmate.com
            </Link>
          </li>{" "}
          <li>
            <Link
              href=""
              className="flex flex-row items-center gap-2 text-lg md:text-3xl md:font-light lg:text-base"
            >
              <Mail /> admin@finmate.com
            </Link>
          </li>{" "}
          <li className="block text-2xl font-semibold my-3 md:text-4xl md:mt-6 lg:text-2xl">
            Socials
          </li>
          <span className="flex flex-row items-center gap-4">
            <li>
              <Link href="">
                <FaInstagram className="text-3xl text-[#E4405F] md:text-5xl lg:text-2xl" />
              </Link>
            </li>{" "}
            <li>
              <Link href="">
                <FaFacebook className="text-3xl text-[#1877F2] md:text-5xl lg:text-2xl" />
              </Link>
            </li>{" "}
            <li>
              <Link href="">
                <FaXTwitter className="text-3xl md:text-5xl lg:text-2xl" />
              </Link>
            </li>{" "}
            <li>
              <Link href="">
                <FaLinkedin className="text-3xl text-[#0077B5] md:text-5xl lg:text-2xl" />
              </Link>
            </li>
          </span>
        </ul>
      </div>
      {/* footer section ends */}
    </>
  );
};

export default Finmate;
