"use client";

import { useEffect, useState } from "react";

export default function Gallery() {
  const [pageLoading, setPageLoading] = useState(true);
  const [loaded, setLoaded] = useState({});

  useEffect(() => {
    const timer = setTimeout(() => {
      setPageLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const images = [
    { src: "/gallery1.jpg", alt: "community outreach" },
    { src: "/gallery2.jpg", alt: "hospital support" },
    { src: "/gallery3.jpg", alt: "education support" },
    { src: "/gallery4.jpg", alt: "food donation" },
    { src: "/gallery5.jpg", alt: "volunteers helping" },
    { src: "/gallery6.jpg", alt: "charity impact" },
    { src: "/gallery7.jpg", alt: "medical support" },
    { src: "/gallery8.jpg", alt: "community development" },
    { src: "/gallery9.jpg", alt: "children support" },
    { src: "/gallery10.jpg", alt: "charity outreach" },
    { src: "/gallery11.jpg", alt: "women empowerment" },
    { src: "/gallery12.jpg", alt: "healthcare outreach" },
    { src: "/gallery13.jpg", alt: "food assistance" },
    { src: "/gallery14.jpg", alt: "volunteer service" },
    { src: "/gallery15.jpg", alt: "foundation impact" },
  ];

  /* PAGE LOADER FIRST */
  if (pageLoading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-4 text-center bg-white">
        <div className="w-16 h-16 border-4 border-green-900 border-t-transparent rounded-full animate-spin"></div>

        <h2 className="mt-6 text-2xl font-bold text-green-900">
          Loading Gallery...
        </h2>

        <p className="mt-3 text-gray-600">
          Please wait while images are being prepared for you.
        </p>
      </div>
    );
  }

  return (
    <div className="pt-24 px-4 pb-20 min-h-screen">

      <div className="max-w-6xl mx-auto">

        {/* TITLE */}
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-green-900">
            Our Gallery
          </h1>

          <p className="mt-6 text-gray-700 max-w-3xl mx-auto">
            Explore moments from our outreach programs, healthcare support,
            education projects, and community impact.
          </p>
        </div>

        {/* GRID */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mt-12">

          {images.map((image, index) => (
            <div
              key={index}
              className="relative h-72 rounded-xl overflow-hidden shadow-lg bg-gray-100"
            >
              {!loaded[index] && (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-white z-10">
                  <div className="w-10 h-10 border-4 border-green-900 border-t-transparent rounded-full animate-spin"></div>

                  <p className="mt-4 text-green-900 font-semibold animate-pulse">
                    Images Loading...
                  </p>
                </div>
              )}

              <img
                src={image.src}
                alt={image.alt}
                onLoad={() =>
                  setLoaded((prev) => ({ ...prev, [index]: true }))
                }
                className="w-full h-full object-cover hover:scale-110 transition duration-500"
              />
            </div>
          ))}

        </div>

        {/* LOAD MORE */}
        <div className="text-center mt-14">
          <button className="bg-green-900 text-white px-8 py-3 rounded-lg font-semibold flex items-center gap-3 mx-auto">
            <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
            Loading More...
          </button>
        </div>

      </div>

    </div>
  );
}