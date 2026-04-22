"use client";

import { useEffect, useState } from "react";
import { auth } from "../../lib/firebase";
import { onAuthStateChanged } from "firebase/auth";
import AuthModal from "./AuthModal";

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  // 🔥 SHOW LOADER WHILE CHECKING USER
  if (loading) {
    return (
      <div className="fixed inset-0 bg-black flex flex-col items-center justify-center z-[999]">
        
        <div className="w-14 h-14 border-4 border-green-900 border-t-yellow-400 rounded-full animate-spin"></div>

        <p className="mt-4 text-green-900 font-semibold">
          Loading Roodel Trust...
        </p>

      </div>
    );
  }

  return (
    <>
      {!user && <AuthModal />}
      {user && children}
    </>
  );
}