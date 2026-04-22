"use client";

export default function Loader() {
  return (
    <div className="fixed inset-0 bg-black flex flex-col items-center justify-center text-white z-[9999]">

      {/* SPINNER */}
      <div className="w-16 h-16 border-4 border-white border-t-yellow-400 rounded-full animate-spin"></div>

      {/* TEXT */}
      <h2 className="mt-6 text-xl font-semibold">
        Roodel Trust Foundation
      </h2>

      <p className="mt-2 text-gray-300 text-sm">
        Transforming lives, building futures...
      </p>

    </div>
  );
}