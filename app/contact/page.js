export default function Contact() {
  return (
    <div className="pt-24 px-4 pb-16">

      <div className="max-w-6xl mx-auto">

        {/* TITLE */}
        <h1 className="text-4xl font-bold text-green-900 text-center">
          Contact Us
        </h1>

        <p className="mt-4 text-center text-gray-600 max-w-2xl mx-auto">
          We would love to hear from you. Whether you want to support, partner,
          volunteer, or learn more about our work, feel free to reach out.
        </p>

        {/* CONTENT GRID */}
        <div className="grid md:grid-cols-2 gap-10 mt-12">

          {/* CONTACT INFO */}
          <div>
            <h2 className="text-2xl font-bold text-green-900">
              Get In Touch
            </h2>

            <p className="mt-4 text-gray-700">
              Roodel Trust Foundation is always open to collaboration and support.
              Reach out to us through any of the channels below.
            </p>

            <div className="mt-6 space-y-3 text-gray-700">
              <p><strong>Email:</strong> ............email needed</p>
              <p><strong>Phone:</strong> +447311487402 </p>
              <p><strong>Location:</strong> United Kingdom & Global Outreach</p>
            </div>
          </div>

          {/* FORM */}
          <form className="bg-white shadow-lg rounded-xl p-6 space-y-4">

            <input
              type="text"
              placeholder="Your Name"
              className="w-full border p-3 rounded-lg"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full border p-3 rounded-lg"
            />

            <textarea
              placeholder="Your Message"
              rows="5"
              className="w-full border p-3 rounded-lg"
            ></textarea>

            <button className="bg-green-900 text-white px-6 py-3 rounded-lg hover:bg-green-800 animate-bounce">
              Send Message
            </button>

          </form>

        </div>

      </div>

    </div>
  );
}