"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Transition } from "@headlessui/react";
import noiseBg from '@/public/assets/svg/noise.svg';
import { ArrowUpRight } from 'lucide-react';

interface Testimonial {
  img: string;
  quote: string;
  name: string;
  role: string;
}

export const Component = ({
  testimonials,
}: {
  testimonials: Testimonial[];
}) => {
  const testimonialsRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState<number>(0);
  const [autorotate, setAutorotate] = useState<boolean>(true);
  const autorotateTiming: number = 7000;

  useEffect(() => {
    if (!autorotate) return;
    const interval = setInterval(() => {
      setActive(
        active + 1 === testimonials.length ? 0 : (active) => active + 1,
      );
    }, autorotateTiming);
    return () => clearInterval(interval);
  }, [active, autorotate, testimonials.length]);

  const heightFix = () => {
    if (testimonialsRef.current && testimonialsRef.current.parentElement)
      testimonialsRef.current.parentElement.style.height = `${testimonialsRef.current.clientHeight}px`;
  };

  useEffect(() => {
    heightFix();
  }, []);

  return (
    <div className="mx-auto w-full max-w-3xl text-center">
      <div className="relative h-32">
        <div className="pointer-events-none absolute left-1/2 top-0 h-[480px] w-[480px] -translate-x-1/2 before:absolute before:inset-0 before:-z-10 before:rounded-full before:bg-gradient-to-b before:from-white/20 before:via-white/5 before:via-25% before:to-white/0 before:to-75%">
          <div className="h-32 [mask-image:_linear-gradient(0deg,transparent,theme(colors.white)_20%,theme(colors.white))]">
            {testimonials.map((testimonial, index) => (
              <Transition
                as="div"
                key={index}
                show={active === index}
                className="absolute inset-0 -z-10 h-full w-full"
                enter="transition ease-[cubic-bezier(0.68,-0.3,0.32,1)] duration-700 order-first"
                enterFrom="opacity-0 -rotate-[60deg]"
                enterTo="opacity-100 rotate-0"
                leave="transition ease-[cubic-bezier(0.68,-0.3,0.32,1)] duration-700"
                leaveFrom="opacity-100 rotate-0"
                leaveTo="opacity-0 rotate-[60deg]"
                beforeEnter={() => heightFix()}
              >
                {/* using classic img to avoid unconfigured Next.js Image loader domain issues, replacing <Image> for stability */}
                <img
                  className="absolute left-1/2 top-11 -translate-x-1/2 rounded-full object-cover border-2 border-white/20 shadow-xl"
                  src={testimonial.img}
                  width={56}
                  height={56}
                  alt={testimonial.name}
                />
              </Transition>
            ))}
          </div>
        </div>
      </div>
      <div className="mb-9 transition-all delay-300 duration-150 ease-in-out">
        <div className="relative flex flex-col items-center" ref={testimonialsRef}>
          {testimonials.map((testimonial, index) => (
            <Transition
              as="div"
              key={index}
              show={active === index}
              enter="transition ease-in-out duration-500 delay-200 order-first"
              enterFrom="opacity-0 -translate-x-4"
              enterTo="opacity-100 translate-x-0"
              leave="transition ease-out duration-300 delay-300 absolute w-full"
              leaveFrom="opacity-100 translate-x-0"
              leaveTo="opacity-0 translate-x-4"
              beforeEnter={() => heightFix()}
            >
              <div className="text-2xl font-serif font-light text-white before:content-['\201C'] after:content-['\201D'] px-4 leading-relaxed tracking-wide">
                {testimonial.quote}
              </div>
            </Transition>
          ))}
        </div>
      </div>
      <div className="-m-1.5 flex flex-wrap justify-center overflow-visible pb-10">
        {testimonials.map((testimonial, index) => (
          <button
            key={index}
            className={`m-1.5 inline-flex justify-center whitespace-nowrap rounded-full px-4 py-2 text-sm shadow-sm transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring focus-visible:ring-gray-300 ${
              active === index
                ? "bg-white text-black shadow-white/20 font-medium scale-105"
                : "bg-transparent text-gray-400 border border-white/10 hover:bg-white/5 hover:text-white"
            }`}
            onClick={() => {
              setActive(index);
              setAutorotate(false);
            }}
          >
            <span>{testimonial.name}</span>{" "}
            <span
              className={`mx-2 ${
                active === index ? "text-gray-400" : "text-gray-600"
              }`}
            >
              -
            </span>{" "}
            <span>{testimonial.role}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export const TestimonialSlider = () => {
  const testimonials = [
    {
      img: "/assets/images/denis.png",
      quote: "Beacon Studio built an incredible website for my agency, Klaudium. Their expertise in both high-end web development and AI agent integration helped us scale our operations instantly.",
      name: "Denis",
      role: "Founder, Klaudium",
    },
    {
      img: "https://randomuser.me/api/portraits/women/12.jpg",
      quote: "Implementing this ERP was smooth and quick. The customizable, user-friendly interface made team training effortless.",
      name: "Nick V",
      role: "IT Manager",
    },
    {
      img: "https://randomuser.me/api/portraits/men/45.jpg",
      quote: "The seamless integration enhanced our business operations. Highly recommend for its intuitive interface.",
      name: "Omar R",
      role: "CEO",
    },
  ];

  return (
    <section className="bg-black py-20 relative overflow-hidden z-10 w-full group">
      {/* Premium Film Grain Effect */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.08] mix-blend-overlay z-0" 
        style={{ 
          backgroundImage: `url(${noiseBg.src})`,
          backgroundRepeat: 'repeat',
        }}
      ></div>

      <div className="container mx-auto px-6 max-w-[1400px] relative z-10">
        <div className="flex flex-col items-center justify-center max-w-[540px] mx-auto text-white mb-20 text-center">
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-3 py-1.5">
              <div className="bg-white text-black rounded-full p-1 leading-none flex items-center justify-center">
                <ArrowUpRight size={12} strokeWidth={3} />
              </div>
              <span className="text-[11px] font-bold tracking-widest text-gray-200 uppercase pr-2">Success Stories</span>
            </div>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[44px] leading-[1.05] font-medium tracking-tight mt-2 text-white">
            Hear from our leaders
          </h2>
        </div>
        <div className="w-full relative flex justify-center pb-12">
          <Component testimonials={testimonials} />
        </div>
      </div>
    </section>
  );
};
