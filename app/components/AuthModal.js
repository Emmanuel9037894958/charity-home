"use client";

import { useState } from "react";
import { auth } from "../../lib/firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

export default function AuthModal() {
  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
      alert(err.message);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-[999]">

      <div className="bg-white p-8 rounded-xl shadow-xl w-full max-w-md">

        <h2 className="text-2xl font-bold text-center text-green-900">
          {isLogin ? "Login" : "Create Account"}
        </h2>

        <form onSubmit={handleAuth}>

          {!isLogin && (
            <input
              type="text"
              placeholder="Full Name"
              className="w-full mt-4 p-3 border rounded"
              onChange={(e) => setName(e.target.value)}
              required
            />
          )}

          <input
            type="email"
            placeholder="Email"
            className="w-full mt-4 p-3 border rounded"
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full mt-4 p-3 border rounded"
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button className="w-full mt-6 bg-green-900 text-white py-3 rounded hover:bg-green-800">
            {isLogin ? "Login" : "Sign Up"}
          </button>

        </form>

        {/* SWITCH */}
        <p className="mt-4 text-center text-sm">
          {isLogin ? "Don't have an account?" : "Already have an account?"}

          <span
            onClick={() => setIsLogin(!isLogin)}
            className="text-green-700 cursor-pointer ml-1 font-semibold"
          >
            {isLogin ? "Sign Up" : "Login"}
          </span>
        </p>

      </div>
    </div>
  );
}