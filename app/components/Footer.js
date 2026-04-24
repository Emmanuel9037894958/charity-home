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
        <Link href="/">
        <Image
              src="/logo.png"
              alt="Roodel Trust Foundation Logo"
              width={50}
              height={50}
              className="rounded-full h-15 w-20"
            />
        </Link >

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

          <ul className="mt-4 space-y-3 text-gray-300 text-sm">

            {[
              { name: "Home", link: "/" },
              { name: "About", link: "/about" },
              { name: "Programs", link: "/programs" },
              { name: "Projects", link: "/projects" },
              { name: "Contact", link: "/contact" },
            ].map((item, index) => (
              <li key={index} className="relative group w-fit">

                <Link
                  href={item.link}
                  className="inline-block transition-all duration-300 group-hover:text-yellow-400 group-hover:translate-x-1"
                >
                  {item.name}
                </Link>

                {/* 🔥 GLOW UNDERLINE */}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-yellow-400 transition-all duration-300 group-hover:w-full shadow-[0_0_10px_#facc15]"></span>

              </li>
            ))}

          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="font-semibold text-lg">Contact</h3>

          <ul className="mt-4 space-y-2 text-gray-300 text-sm">
            <li className="hover:text-yellow-400 transition">Email: info@roodeltrust.org</li>
            <li className="hover:text-yellow-400 transition">Phone: +44 123 456 7890</li>
            <li className="hover:text-yellow-400 transition">Address: 5 Brayford square LONDON E1 0SG</li>
          </ul>
        </div>

        {/* SOCIAL */}
        <div>
          <h3 className="font-semibold text-lg">Follow Us</h3>

          <div className="flex gap-4 mt-4">

            <a href="#" className="bg-white/10 p-3 rounded-full hover:bg-blue-600 hover:scale-110 transition duration-300">
              <FaFacebookF />
            </a>

            <a href="#" className="bg-white/10 p-3 rounded-full hover:bg-pink-500 hover:scale-110 transition duration-300">
              <FaInstagram />
            </a>

            <a href="#" className="bg-white/10 p-3 rounded-full hover:bg-sky-400 hover:scale-110 transition duration-300">
              <FaTwitter />
            </a>

            <a href="#" className="bg-white/10 p-3 rounded-full hover:bg-blue-400 hover:scale-110 transition duration-300">
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