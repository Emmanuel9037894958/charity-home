"use client";

import { useState, useEffect } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Loader from "./components/Loader";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // ⏱️ 3 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full light antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-black">

        {loading && <Loader />}

        {!loading && (
          <>
            <Navbar />
            <main className="flex-grow">{children}</main>
            <Footer />
          </>
        )}

      </body>
    </html>
  );
}