export default function FinalStatement() {
  return (
    <section className="bg-green-900 text-white px-4">

      <div className="max-w-4xl mx-auto text-center">

        {/* TITLE */}
        <h2 className="text-3xl md:text-4xl font-bold leading-tight pt-9">
          Building Hope. Transforming Lives. Creating a Sustainable Future.
        </h2>

        {/* TEXT */}
        <p className="mt-6 text-gray-200 leading-relaxed">
          At Roodel Trust Foundation, we believe that real change begins with
          compassion, commitment, and collective action. Across communities in
          the United Kingdom, Africa, and beyond, we are dedicated to addressing
          inequality, empowering individuals, and creating opportunities that
          lead to lasting transformation.
        </p>

        <p className="mt-4 text-gray-200 leading-relaxed">
          From improving access to quality education and healthcare to supporting
          sustainable livelihoods and community development, our work is driven
          by a vision of a world where every individual has the chance to thrive
          with dignity and purpose.
        </p>

        <p className="mt-4 text-gray-200 leading-relaxed">
          Together with our partners, volunteers, and supporters, we are building
          a future defined not by limitations, but by possibilities. Every action
          we take today contributes to a stronger, more inclusive, and more
          resilient tomorrow.
        </p>

        {/* CTA */}
        <div className="mt-8 pb-9">
          <a
            href="/contact"
            className="inline-block bg-yellow-500 text-black px-8 py-3 rounded-lg font-semibold hover:bg-yellow-600 transition"
          >
            Be Part of the Change
          </a>
        </div>

      </div>

    </section>
  );
}