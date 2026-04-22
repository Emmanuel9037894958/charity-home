export default function About() {
  return (
    <div className="pt-24 px-4">

      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="text-center">
          <p className="text-green-700 font-semibold uppercase tracking-wide">
            About Us
          </p>

          <h1 className="text-4xl md:text-5xl font-bold text-green-900 mt-4">
            Who We Are
          </h1>

          <p className="mt-6 text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Roodel Trust Foundation is a purpose-driven organisation committed to
            transforming lives and building sustainable communities across the UK,
            Africa, and beyond. We focus on empowering individuals, supporting
            vulnerable groups, and creating opportunities for long-term growth.
          </p>
        </div>

        {/* IMAGE */}
        <img
          src="/aboutUs2.png"
          alt="about"
          className="w-full h-96 object-cover rounded-xl mt-10 shadow-lg"
        />

        {/* STORY */}
        <div className="mt-16 grid md:grid-cols-2 gap-10">

          <div>
            <h2 className="text-2xl font-bold text-green-900">
              Our Story
            </h2>

            <p className="mt-4 text-gray-700 leading-relaxed">
              Roodel Trust Foundation was established with a clear vision — to
              create a world where everyone, regardless of background, has access
              to opportunities that allow them to thrive. Our journey began with
              a passion for helping underserved communities and has grown into a
              global mission impacting lives across different regions.
            </p>

            <p className="mt-4 text-gray-700 leading-relaxed">
              Through collaboration, innovation, and dedication, we continue to
              expand our reach and deliver meaningful change where it is needed most.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-green-900">
              Our Mission
            </h2>

            <p className="mt-4 text-gray-700 leading-relaxed">
              Our mission is to build confidence for a sustainable future by
              empowering individuals through education, improving access to
              healthcare, and supporting community-led development initiatives.
            </p>

            <h2 className="text-2xl font-bold text-green-900 mt-8">
              Our Vision
            </h2>

            <p className="mt-4 text-gray-700 leading-relaxed">
              We envision a world where every individual is given equal
              opportunities to succeed, where communities are strengthened,
              and where dignity, equality, and inclusion are at the centre
              of development.
            </p>
          </div>

        </div>

        {/* VALUES */}
        <div className="mt-20 text-center">

          <h2 className="text-3xl font-bold text-green-900">
            Our Core Values
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mt-10">

            <div className="bg-white shadow-lg p-6 rounded-xl">
              <h3 className="font-bold text-lg text-green-900">
                Integrity
              </h3>
              <p className="mt-3 text-gray-600">
                We operate with transparency, honesty, and accountability in all
                that we do.
              </p>
            </div>

            <div className="bg-white shadow-lg p-6 rounded-xl">
              <h3 className="font-bold text-lg text-green-900">
                Compassion
              </h3>
              <p className="mt-3 text-gray-600">
                We are driven by empathy and a deep commitment to improving lives.
              </p>
            </div>

            <div className="bg-white shadow-lg p-6 rounded-xl">
              <h3 className="font-bold text-lg text-green-900">
                Sustainability
              </h3>
              <p className="mt-3 text-gray-600">
                We focus on long-term solutions that create lasting impact.
              </p>
            </div>

          </div>

        </div>

        {/* CALL TO ACTION */}
        <div className="mt-20 text-center bg-green-900 text-white p-10 rounded-xl">

          <h2 className="text-3xl font-bold">
            Join Us in Making a Difference
          </h2>

          <p className="mt-4 max-w-2xl mx-auto">
            Together, we can create a better future. Whether through volunteering,
            partnerships, or donations, your support helps us continue our mission.
          </p>

          <a
            href="/contact"
            className="inline-block mt-6 bg-yellow-500 text-black px-8 py-3 rounded-lg font-semibold hover:bg-yellow-600"
          >
            Get Involved
          </a>

        </div>

      </div>

    </div>
  );
}