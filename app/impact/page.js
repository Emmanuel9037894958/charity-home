export default function Impact() {
  return (
    <div className="p-6 md:p-12">

      {/* HERO IMAGE */}
      <div className="max-w-6xl mx-auto">
        <img
          src="/impact1.png"
          alt="impact"
          className="w-full h-[300px] md:h-[450px] object-cover rounded-xl shadow-lg"
        />
      </div>

      {/* TITLE */}
      <div className="text-center mt-10 max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-green-900">
          Our Impact
        </h1>

        <p className="mt-4 text-lg text-gray-700">
          At Roodel Trust Foundation, we are committed to transforming lives
          through sustainable programs in education, healthcare, and community
          development. Every effort we make is driven by compassion, purpose,
          and the vision of a better future.
        </p>
      </div>

      {/* STATS SECTION */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 max-w-5xl mx-auto text-center">
        
        <div className="bg-green-100 p-6 rounded-xl shadow">
          <h2 className="text-3xl font-bold text-green-900">5,000+</h2>
          <p className="mt-2 text-gray-700">Lives Impacted</p>
        </div>

        <div className="bg-green-100 p-6 rounded-xl shadow">
          <h2 className="text-3xl font-bold text-green-900">1,200+</h2>
          <p className="mt-2 text-gray-700">Children Educated</p>
        </div>

        <div className="bg-green-100 p-6 rounded-xl shadow">
          <h2 className="text-3xl font-bold text-green-900">800+</h2>
          <p className="mt-2 text-gray-700">Health Support Cases</p>
        </div>

        <div className="bg-green-100 p-6 rounded-xl shadow">
          <h2 className="text-3xl font-bold text-green-900">15+</h2>
          <p className="mt-2 text-gray-700">Communities Reached</p>
        </div>

      </div>

      {/* STORY SECTION */}
      <div className="mt-16 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-green-900">
          Real Change, Real Stories
        </h2>

        <p className="mt-4 text-gray-700 leading-relaxed">
          Through our initiatives, we have helped young girls gain access to
          education, supported families with essential healthcare services, and
          empowered communities through sustainable programs. Our work is not
          just about numbers — it is about real people, real change, and real
          impact.
        </p>
      </div>

      {/* CALL TO ACTION */}
      <div className="mt-16 bg-green-900 text-white p-10 rounded-xl text-center max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold">Be Part of the Impact</h2>

        <p className="mt-4">
          Join us in making a difference. Your support helps us reach more
          people and create lasting change.
        </p>

        <button className="mt-6 bg-yellow-500 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-600">
          Donate Now
        </button>
      </div>

    </div>
  );
}