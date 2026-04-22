export default function ImpactPreview() {
  return (
    <section className=" bg-gray-100 text-center px-4">

      <h2 className="text-3xl md:text-4xl font-bold text-green-900">
        Our Impact
      </h2>

      <p className="mt-4 max-w-2xl mx-auto text-gray-700">
        We have impacted thousands of lives through education, healthcare,
        and sustainable community development programs.
      </p>

      {/* SMALL STATS */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10 max-w-4xl mx-auto">

        <div>
          <h3 className="text-2xl font-bold text-green-900">5,000+</h3>
          <p>Lives Impacted</p>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-green-900">1,200+</h3>
          <p>Children Educated</p>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-green-900">800+</h3>
          <p>Health Support</p>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-green-900">15+</h3>
          <p>Communities</p>
        </div>

      </div>

      {/* BUTTON */}
      <a href="/impact">
        <button className="mt-8 bg-green-900 text-white px-6 py-3 rounded-lg hover:bg-green-800">
          Learn More
        </button>
      </a>

    </section>
  );
}