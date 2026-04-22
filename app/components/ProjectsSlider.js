"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

export default function ProjectsSlider() {
  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
    },
    [
      Autoplay({
        delay: 2000,
        stopOnInteraction: false,
      }),
    ]
  );

  const slides = [
    "/project1.jpg",
    "/project2.jpg",
    "/project3.jpg",
    "/project4.jpg",
    "/project5.jpg",
    "/project6.jpg",
  ];

  return (
    <div className="overflow-hidden mt-12" ref={emblaRef}>
      <div className="flex xl: gap-2 sm:gap-none">
        {slides.map((img, index) => (
          <div key={index} className="min-w-full md:min-w-[33.33%]">
            <img
              src={img}
              alt="project"
              className="w-full h-64 object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}