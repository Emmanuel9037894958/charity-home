"use client";

import { useState } from "react";
import { auth } from "../../lib/firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useRouter } from "next/navigation";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);

  const router = useRouter();

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);

      await updateProfile(user.user, {
        displayName: name,
      });

      alert("Signup successful 🎉 Redirecting to login...");

      router.push("/login");

    } catch (err) {
      // 🔥 IF EMAIL ALREADY EXISTS
      if (err.code === "auth/email-already-in-use") {
        alert("Account already exists. Redirecting to login...");
        router.push("/login");
      } else {
        alert(err.message);
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 via-purple-700 to-indigo-800 px-4">

      <form
        onSubmit={handleSignup}
        className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-xl w-full max-w-md border border-white/20"
      >

        {/* TITLE */}
        <h2 className="text-3xl font-bold text-center text-white">
          Create Account
        </h2>

        <p className="text-center text-gray-200 mt-2 text-sm">
          Join Roodel Trust Foundation
        </p>

        {/* NAME */}
        <input
          type="text"
          placeholder="Full Name"
          className="w-full mt-6 p-3 rounded-lg bg-white/20 text-white placeholder-gray-300 outline-none focus:ring-2 focus:ring-yellow-400"
          onChange={(e) => setName(e.target.value)}
          required
        />

        {/* EMAIL */}
        <input
          type="email"
          placeholder="Email Address"
          className="w-full mt-4 p-3 rounded-lg bg-white/20 text-white placeholder-gray-300 outline-none focus:ring-2 focus:ring-yellow-400"
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        {/* PASSWORD */}
        <div className="relative mt-4">
          <input
            type={show ? "text" : "password"}
            placeholder="Password"
            className="w-full p-3 pr-12 rounded-lg bg-white/20 text-white placeholder-gray-300 outline-none focus:ring-2 focus:ring-yellow-400"
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          {/* FIXED ICON */}
          <button
            type="button"
            onClick={() => setShow(!show)}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white text-purple-700 p-2 rounded-full shadow-md hover:scale-105 transition"
          >
            {show ? <FaEyeSlash size={16} /> : <FaEye size={16} />}
          </button>
        </div>

        {/* BUTTON */}
        <button className="w-full mt-6 bg-yellow-500 text-black py-3 rounded-lg font-semibold hover:bg-yellow-600 transition">
          Sign Up
        </button>

        {/* LOGIN LINK */}
        <p className="mt-4 text-center text-sm text-gray-200">
          Already have an account?{" "}
          <span
            onClick={() => router.push("/login")}
            className="text-yellow-400 cursor-pointer font-semibold"
          >
            Login
          </span>
        </p>

      </form>

    </div>
  );
}