"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Link from "next/link";

export default function Hero() {
  const [emblaRef] = useEmblaCarousel(
    { loop: true },
    [
      Autoplay({
        delay: 4000,
        stopOnInteraction: false,
      }),
    ]
  );

  const slides = [
      {
        image: "/slide3.jpg",
        title: "Improving Health & Wellbeing",
        text: "Supporting access to essential healthcare services for vulnerable communities.",
      },
    {
      image: "/slide1.jpg",
      title: "Building Stronger Communities",
      text: "We work hand in hand with communities to create sustainable solutions and lasting impact.",
    },
    {
      image: "/slide2.jpg",
      title: "Empowering Through Education",
      text: "Providing access to quality education and opportunities for children and young people.",
    },
    {
      image: "/slide4.jpg",
      title: "Empowering Women & Youth",
      text: "Creating opportunities through skills development and empowerment programs.",
    },
    {
      image: "/slide5.jpg",
      title: "Sustainable Development",
      text: "Promoting long-term solutions that strengthen communities and reduce poverty.",
    },
    {
      image: "/slide6.jpg",
      title: "Together We Make Impact",
      text: "With partners and volunteers, we are building a better and more inclusive future.",
    },
  ];

  return (
    <div className="overflow-hidden" ref={emblaRef}>
      <div className="flex">

        {slides.map((slide, index) => (
          <div key={index} className="min-w-full h-[90vh] relative">

            {/* IMAGE */}
            <img
              src={slide.image}
              alt="slide"
              className="w-full h-full object-cover"
            />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70 flex flex-col items-center justify-center text-white text-center px-4">

              {/* TITLE */}
              <h1 className="text-4xl md:text-6xl font-bold max-w-4xl leading-tight">
                {slide.title}
              </h1>

              {/* TEXT */}
              <p className="mt-4 text-lg md:text-xl max-w-2xl">
                {slide.text}
              </p>

              {/* TRUST LINE */}
              <p className="mt-3 text-sm text-gray-300">
                A trusted non-profit organization dedicated to transforming lives and building sustainable communities
              </p>

              {/* BUTTONS */}
              <div className="mt-6 flex gap-4 flex-wrap justify-center">

                <Link href="/donate">
                  <button className="bg-green-800 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-600 transition">
                    Donate Now
                  </button>
                </Link>

                <Link href="/about">
                  <button className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-black transition">
                    Learn More
                  </button>
                </Link>

              </div>

            </div>

          </div>
        ))}

      </div>
    </div>
  );
}