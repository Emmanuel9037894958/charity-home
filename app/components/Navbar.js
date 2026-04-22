"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

// AUTH
import useAuth from "../hooks/useAuth";
import { signOut } from "firebase/auth";
import { auth } from "../../lib/firebase";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState(null);

  const user = useAuth();

  const handleLogout = async () => {
    await signOut(auth);
    location.reload();
  };

  // ❌ BLOG REMOVED HERE
  const navItems = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Programs", link: "/programs" },
    { name: "Impact", link: "/impact" },
    { name: "Gallery", link: "/gallery" },
    { name: "Contact", link: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-green-900 text-white px-4 py-3 flex justify-between items-center z-50 shadow-md">

      {/* LOGO */}
      <Link href="/" className="flex items-center gap-3">
        <Image
          src="/logo.png"
          alt="logo"
          width={45}
          height={45}
          className="rounded-full"
        />
        <h1 className="font-bold text-sm md:text-lg">
          ROODEL TRUST FOUNDATION
        </h1>
      </Link>

      {/* DESKTOP MENU */}
      <ul className="hidden md:flex gap-8">
        {navItems.map((item, index) => (
          <li key={index} className="relative group">
            <Link
              href={item.link}
              className="transition-all duration-300 group-hover:scale-110 group-hover:text-yellow-400"
            >
              {item.name}
            </Link>

            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-yellow-400 transition-all duration-300 group-hover:w-full shadow-[0_0_10px_#facc15]"></span>
          </li>
        ))}
      </ul>

      {/* USER SECTION */}
      <div className="hidden md:flex items-center gap-4">
        {user ? (
          <>
            <img
              src={user.photoURL || "/default-avatar.png"}
              alt="profile"
              className="w-9 h-9 rounded-full object-cover border-2 border-white"
            />

            <span className="text-sm font-medium">
              {user.displayName || "User"}
            </span>

            <button
              onClick={handleLogout}
              className="bg-red-500 px-3 py-1 rounded text-sm hover:bg-red-600"
            >
              Logout
            </button>
          </>
        ) : (
          <Link href="/login">
            <button className="bg-yellow-500 px-4 py-2 rounded hover:bg-yellow-600">
              Login
            </button>
          </Link>
        )}
      </div>

      {/* MOBILE BUTTON */}
      <button onClick={() => setOpen(true)} className="md:hidden text-2xl">
        ☰
      </button>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4 }}
            className="fixed top-0 right-0 w-[85%] h-full bg-white text-black p-6 z-50 shadow-lg flex flex-col"
          >

            {/* TOP */}
            <div className="flex justify-between items-center mb-6">
              <h2 className="font-bold text-lg text-green-900">Menu</h2>
              <button onClick={() => setOpen(false)}>✕</button>
            </div>

            {/* USER */}
            {user && (
              <div className="flex items-center gap-3 mb-6 border-b pb-4">
                <img
                  src={user.photoURL || "/default-avatar.png"}
                  className="w-10 h-10 rounded-full"
                />
                <span className="font-semibold">
                  {user.displayName || "User"}
                </span>
              </div>
            )}

            {/* LINKS */}
            <ul className="space-y-6 text-lg">

              <li><Link href="/" onClick={() => setOpen(false)}>Home</Link></li>
              <li><Link href="/about" onClick={() => setOpen(false)}>About</Link></li>

              <li>
                <div
                  onClick={() =>
                    setDropdown(dropdown === "what" ? null : "what")
                  }
                  className="flex justify-between cursor-pointer font-semibold"
                >
                  What We Do <span>⌄</span>
                </div>

                {dropdown === "what" && (
                  <ul className="ml-4 mt-2 space-y-2 text-gray-600">
                    <li><Link href="/programs#education">Education</Link></li>
                    <li><Link href="/programs#health">Health</Link></li>
                    <li><Link href="/programs#enterprise">Social Enterprise</Link></li>
                  </ul>
                )}
              </li>

              <li>
                <div
                  onClick={() =>
                    setDropdown(dropdown === "opp" ? null : "opp")
                  }
                  className="flex justify-between cursor-pointer font-semibold"
                >
                  Opportunities <span>⌄</span>
                </div>

                {dropdown === "opp" && (
                  <ul className="ml-4 mt-2 space-y-2 text-gray-600">
                    <li><Link href="/volunteer">Volunteering</Link></li>
                    <li><Link href="/donate">Donate</Link></li>
                  </ul>
                )}
              </li>

              <li><Link href="/projects">Projects</Link></li>
              <li><Link href="/contact">Contact</Link></li>

            </ul>

            {/* LOGOUT */}
            {user && (
              <button
                onClick={handleLogout}
                className="mt-auto bg-red-500 text-white py-3 rounded-lg"
              >
                Logout
              </button>
            )}

          </motion.div>
        )}
      </AnimatePresence>

    </nav>
  );
}