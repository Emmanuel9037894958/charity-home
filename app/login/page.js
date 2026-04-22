"use client";

import { useState } from "react";
import { auth, provider } from "../../lib/firebase";
import {
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useRouter } from "next/navigation";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  // 🔐 EMAIL LOGIN
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await signInWithEmailAndPassword(auth, email, password);

      setTimeout(() => {
        router.push("/");
      }, 1500);

    } catch (err) {
      setLoading(false);

      if (err.code === "auth/user-not-found") {
        alert("No account found. Redirecting to sign up...");
        router.push("/signup");
      } else if (err.code === "auth/wrong-password") {
        alert("Incorrect password.");
      } else {
        alert(err.message);
      }
    }
  };

  // 🔥 GOOGLE LOGIN
  const handleGoogleLogin = async () => {
    try {
      setLoading(true);

      await signInWithPopup(auth, provider);

      setTimeout(() => {
        router.push("/");
      }, 1500);

    } catch (err) {
      setLoading(false);
      alert(err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 via-purple-700 to-indigo-800 px-4">

      {/* LOADER */}
      {loading && (
        <div className="fixed inset-0 bg-black/80 flex flex-col items-center justify-center text-white z-[999]">
          <div className="w-14 h-14 border-4 border-white border-t-yellow-400 rounded-full animate-spin"></div>
          <p className="mt-4">Logging you in...</p>
        </div>
      )}

      <form
        onSubmit={handleLogin}
        className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-xl w-full max-w-md border border-white/20"
      >

        {/* TITLE */}
        <h2 className="text-3xl font-bold text-center text-white">
          Welcome Back
        </h2>

        <p className="text-center text-gray-200 mt-2 text-sm">
          Login to continue
        </p>

        {/* EMAIL */}
        <input
          type="email"
          placeholder="Email Address"
          className="w-full mt-6 p-3 rounded-lg bg-white/20 text-white placeholder-gray-300 outline-none focus:ring-2 focus:ring-yellow-400"
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

          <button
            type="button"
            onClick={() => setShow(!show)}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white text-purple-700 p-2 rounded-full shadow-md hover:scale-105 transition"
          >
            {show ? <FaEyeSlash size={16} /> : <FaEye size={16} />}
          </button>
        </div>

        {/* LOGIN BUTTON */}
        <button className="w-full mt-6 bg-yellow-500 text-black py-3 rounded-lg font-semibold hover:bg-yellow-600 transition">
          Login
        </button>

        {/* DIVIDER */}
        <div className="flex items-center gap-2 mt-6">
          <div className="flex-1 h-[1px] bg-white/30"></div>
          <span className="text-sm text-gray-300">OR</span>
          <div className="flex-1 h-[1px] bg-white/30"></div>
        </div>

        {/* GOOGLE BUTTON */}
        <button
          type="button"
          onClick={handleGoogleLogin}
          className="w-full mt-4 bg-white text-black py-3 rounded-lg flex items-center justify-center gap-3 hover:bg-gray-200 transition font-medium"
        >
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="google"
            className="w-5 h-5"
          />
          Continue with Google
        </button>

        {/* SIGNUP LINK */}
        <p className="mt-4 text-center text-sm text-gray-200">
          Don’t have an account?{" "}
          <span
            onClick={() => router.push("/signup")}
            className="text-yellow-400 cursor-pointer font-semibold"
          >
            Sign Up
          </span>
        </p>

      </form>

    </div>
  );
}