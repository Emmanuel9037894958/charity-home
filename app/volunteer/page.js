export default function Volunteer() {
  return (
    <div className="pt-24 px-4 pb-20">

      <div className="max-w-6xl mx-auto text-center">

        {/* HEADER */}
        <p className="text-green-700 font-semibold uppercase tracking-wide">
          Get Involved
        </p>

        <h1 className="text-4xl md:text-5xl font-bold text-green-900 mt-4">
          Become a Volunteer
        </h1>

        <p className="mt-6 text-gray-700 max-w-3xl mx-auto">
          Join Roodel Trust Foundation and be part of a global movement creating
          positive change. Your time, skills, and passion can help transform lives
          and build stronger communities.
        </p>

        {/* IMAGE */}
        <img
          src="/pople.jpg"
          alt="volunteer"
          className="w-full h-80 object-cover rounded-xl mt-10 shadow-lg"
        />

        {/* CONTENT */}
        <div className="mt-12 grid md:grid-cols-2 gap-10 text-left">

          <div>
            <h2 className="text-2xl font-bold text-green-900">
              Why Volunteer With Us?
            </h2>

            <ul className="mt-4 space-y-3 text-gray-700">
              <li>✔ Make a real impact in communities</li>
              <li>✔ Gain valuable experience</li>
              <li>✔ Work with a diverse global team</li>
              <li>✔ Contribute your skills to meaningful projects</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-green-900">
              How to Get Started
            </h2>

            <p className="mt-4 text-gray-700">
              Fill out our volunteer form or reach out to us directly. We will
              guide you through available opportunities and help you find a role
              that matches your passion and skills.
            </p>

            <button className="mt-6 bg-green-900 text-white px-6 py-3 rounded-lg hover:bg-green-800">
              Apply to Volunteer
            </button>
          </div>

        </div>

      </div>

    </div>
  );
}