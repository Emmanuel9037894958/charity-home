import Link from "next/link";
import Image from "next/image";
import { FaFacebookF, FaInstagram, FaTwitter, FaTelegramPlane } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-green-900 text-white pt-16 pb-8 mt-20">

      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-4 gap-10">

        {/* LOGO + BRAND */}
        <div>
          <div className="flex items-center gap-3">

            <Image
              src="/logo.png"
              alt="Roodel Trust Foundation Logo"
              width={50}
              height={50}
              className="rounded-full  p-1 h-15 w-15"
            />

            <h2 className="text-lg font-bold leading-tight">
              ROODEL TRUST FOUNDATION
            </h2>
          </div>

          <p className="mt-4 text-gray-300 text-sm leading-relaxed">
            We are committed to transforming lives through education,
            healthcare, and sustainable community development across
            the UK, Africa, and beyond.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="font-semibold text-lg">Quick Links</h3>

          <ul className="mt-4 space-y-2 text-gray-300 text-sm">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/programs">Programs</Link></li>
            <li><Link href="/projects">Projects</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="font-semibold text-lg">Contact</h3>

          <ul className="mt-4 space-y-2 text-gray-300 text-sm">
            <li>Email: info@roodeltrust.org</li>
            <li>Phone: +44 123 456 7890</li>
            <li>Location: UK & Global Outreach</li>
          </ul>
        </div>

        {/* SOCIAL */}
        <div>
          <h3 className="font-semibold text-lg">Follow Us</h3>

          <div className="flex gap-4 mt-4">

            <a href="#" className="bg-white/10 p-3 rounded-full hover:bg-blue-600 transition">
              <FaFacebookF />
            </a>

            <a href="#" className="bg-white/10 p-3 rounded-full hover:bg-pink-500 transition">
              <FaInstagram />
            </a>

            <a href="#" className="bg-white/10 p-3 rounded-full hover:bg-sky-400 transition">
              <FaTwitter />
            </a>

            <a href="#" className="bg-white/10 p-3 rounded-full hover:bg-blue-400 transition">
              <FaTelegramPlane />
            </a>

          </div>
        </div>

      </div>

      {/* BOTTOM */}
      <div className="text-center text-gray-400 text-sm mt-12 border-t border-white/20 pt-6">
        © {new Date().getFullYear()} Roodel Trust Foundation. All rights reserved.
      </div>

    </footer>
  );
}