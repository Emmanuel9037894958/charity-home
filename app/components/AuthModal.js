"use client";

import { useState } from "react";
import { auth } from "../../lib/firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function AuthModal() {
  // 🔥 SIGNUP FIRST
  const [isLogin, setIsLogin] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);

  const handleAuth = async (e) => {
    e.preventDefault();

    try {
      if (isLogin) {
        await signInWithEmailAndPassword(auth, email, password);
      } else {
        const user = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );

        await updateProfile(user.user, {
          displayName: name,
        });
      }
    } catch (err) {
      // 🔥 AUTO SWITCH IF USER EXISTS
      if (err.code === "auth/email-already-in-use") {
        alert("Account already exists. Please login.");
        setIsLogin(true);
      } else {
        alert(err.message);
      }
    }
  };

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 flex items-center justify-center z-[999] px-4">

      <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-xl w-full max-w-md border border-white/20">

        {/* TITLE */}
        <h2 className="text-3xl font-bold text-center text-white">
          {isLogin ? "Welcome Back" : "Create Account"}
        </h2>

        <p className="text-center text-gray-200 mt-2 text-sm">
          {isLogin
            ? "Login to continue"
            : "Join Roodel Trust Foundation"}
        </p>

        <form onSubmit={handleAuth}>

          {/* NAME */}
          {!isLogin && (
            <input
              type="text"
              placeholder="Full Name"
              className="w-full mt-6 p-3 rounded-lg bg-white/20 text-white placeholder-gray-300 outline-none focus:ring-2 focus:ring-yellow-400"
              onChange={(e) => setName(e.target.value)}
              required
            />
          )}

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

            <button
              type="button"
              onClick={() => setShow(!show)}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white text-purple-700 p-2 rounded-full shadow-md"
            >
              {show ? <FaEyeSlash size={16} /> : <FaEye size={16} />}
            </button>
          </div>

          {/* BUTTON */}
          <button className="w-full mt-6 bg-yellow-500 text-black py-3 rounded-lg font-semibold hover:bg-yellow-600 transition">
            {isLogin ? "Login" : "Sign Up"}
          </button>

        </form>

        {/* SWITCH */}
        <p className="mt-5 text-center text-sm text-gray-200">
          {isLogin ? "Don't have an account?" : "Already have an account?"}

          <span
            onClick={() => setIsLogin(!isLogin)}
            className="text-yellow-400 cursor-pointer ml-1 font-semibold"
          >
            {isLogin ? "Sign Up" : "Login"}
          </span>
        </p>

      </div>
    </div>
  );
}