export default function VisionSection() {
  return (
    <section className="py-16 px-4 bg-gray-50">

      <div className="max-w-6xl mx-auto text-center">

        {/* TITLE */}
        <h2 className="text-3xl md:text-4xl font-bold text-green-900">
          Our Core Values
        </h2>

        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          We are guided by strong values that shape our mission and define our impact in communities.
        </p>

        {/* CARDS */}
        <div className="grid md:grid-cols-3 gap-8 mt-12">

          {/* VISION */}
          <div className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-xl transition">
            <img
              src="/vision.jpeg"
              alt="vision"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-green-900">Our Vision</h3>
              <p className="mt-4 text-gray-700">
                To create a world where every individual has access to opportunities that enable them to live a meaningful and sustainable life.
              </p>
            </div>
          </div>

          {/* FOCUS */}
          <div className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-xl transition">
            <img
              src="/focus1.jpg"
              alt="focus"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-green-900">Our Focus</h3>
              <p className="mt-4 text-gray-700">
                We focus on education, healthcare, and community development to empower individuals and improve living conditions.
              </p>
            </div>
          </div>

          {/* VALUES */}
          <div className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-xl transition">
            <img
              src="/value.jpg"
              alt="values"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-green-900">Our Values</h3>
              <p className="mt-4 text-gray-700">
                Integrity, compassion, and accountability guide everything we do as we serve communities with dedication and transparency.
              </p>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
}