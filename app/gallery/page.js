"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Gallery() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex items-center justify-center px-4 text-center">

      <div className="max-w-2xl">

        {/* TITLE */}
        <h1 className="text-4xl md:text-5xl font-bold text-green-900">
          Gallery Coming Soon
        </h1>

        {/* DESCRIPTION */}
        <p className="mt-6 text-gray-700 leading-relaxed">
          We are currently working on building our gallery to showcase images
          and stories from our projects, community outreach programs, and the
          impact we are making across different regions.
        </p>

        <p className="mt-4 text-gray-700 leading-relaxed">
          Please check back soon to explore moments that reflect our commitment
          to transforming lives and supporting communities.
        </p>

        {/* BUTTON */}
       <Link href="/">
       <button
          onClick={() => router.back()}
          className="mt-8 bg-green-900 text-white px-6 py-3 rounded-lg hover:bg-green-800 transition animate-pulse"
        >
          ← Go Back
        </button>
       </Link> 

      </div>

    </div>
  );
}