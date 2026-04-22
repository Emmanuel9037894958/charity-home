import Link from "next/link";

export default function Donate() {
  return (
    <div className="pt-32 px-4 pb-20">

      <div className="max-w-4xl mx-auto text-center">

        {/* HEADER */}
        <p className="text-green-700 font-semibold uppercase tracking-wide">
          Support Our Mission
        </p>

        <h1 className="text-4xl md:text-5xl font-bold text-green-900 mt-4">
          Be Part of Something Meaningful
        </h1>

        <p className="mt-6 text-gray-700 leading-relaxed">
          At Roodel Trust Foundation, we are dedicated to transforming lives
          through education, healthcare, and sustainable community development
          across the UK, Africa, and beyond.
        </p>

        <p className="mt-4 text-gray-700 leading-relaxed">
          Your support helps us reach vulnerable communities, provide essential
          resources, and create opportunities for individuals to thrive. Every
          act of generosity contributes to a future filled with hope and dignity.
        </p>

        {/* IMAGE */}
        <img
          src="/donate.jpg"
          alt="donation impact"
          className="w-full h-80 object-cover rounded-xl mt-10 shadow-lg"
        />

        {/* IMPACT MESSAGE */}
        <div className="mt-12 max-w-3xl mx-auto text-gray-700">

          <h2 className="text-2xl font-bold text-green-900">
            Your Support Creates Real Impact
          </h2>

          <p className="mt-4 leading-relaxed">
            With your support, we are able to provide access to education,
            improve healthcare services, and empower communities through
            sustainable initiatives. Our work is driven by compassion,
            integrity, and a deep commitment to long-term change.
          </p>

          <p className="mt-4 leading-relaxed">
            We ensure that every contribution is used responsibly and
            transparently, making a meaningful difference in the lives
            of those we serve.
          </p>

        </div>

        {/* CTA */}
        <div className="mt-12">
          <Link href="/contact">
            <button className="bg-yellow-500 text-black px-10 py-4 rounded-lg font-semibold hover:bg-yellow-600 transition">
              Support This Mission
            </button>
          </Link>
        </div>

      </div>

    </div>
  );
}