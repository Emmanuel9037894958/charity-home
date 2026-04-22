export default function Programs() {
  return (
    <div className="pt-35 px-4 pb-20">

      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="text-center">
          <p className="text-green-700 font-semibold uppercase tracking-wide">
            What We Do
          </p>

          <h1 className="text-4xl md:text-5xl font-bold text-green-900 mt-4">
            Our Programs & Initiatives
          </h1>

          <p className="mt-6 text-gray-700 max-w-3xl mx-auto leading-relaxed">
            At Roodel Trust Foundation, we implement sustainable, community-driven
            programs designed to create long-term impact across education, healthcare,
            and economic empowerment. Our initiatives are tailored to meet the needs
            of diverse communities across the UK, Africa, and beyond.
          </p>
        </div>

        {/* EDUCATION */}
        <section id="education" className="mt-20 grid md:grid-cols-2 gap-10 items-center">

          <img
            src="/social.jpg"
            alt="education"
            className="w-full h-80 object-cover rounded-xl shadow-lg"
          />

          <div>
            <h2 className="text-3xl font-bold text-green-900">
              Education Development
            </h2>

            <p className="mt-4 text-gray-700 leading-relaxed">
              We believe education is the foundation for a sustainable future.
              Our programs focus on improving access to quality education for
              children and young people, particularly those from underserved
              and vulnerable communities.
            </p>

            <ul className="mt-4 space-y-2 text-gray-700">
              <li>✔ Scholarships and financial support</li>
              <li>✔ School materials and learning resources</li>
              <li>✔ Mentorship and academic guidance</li>
              <li>✔ Advocacy for inclusive and equitable education</li>
            </ul>

            <p className="mt-4 text-gray-600">
              Our goal is to empower the next generation with knowledge, confidence,
              and opportunities to succeed globally.
            </p>
          </div>

        </section>

        {/* HEALTH */}
        <section id="health" className="mt-20 grid md:grid-cols-2 gap-10 items-center">

          <div>
            <h2 className="text-3xl font-bold text-green-900">
              Health & Wellbeing
            </h2>

            <p className="mt-4 text-gray-700 leading-relaxed">
              Our health initiatives are designed to improve access to essential
              healthcare services and promote overall wellbeing in communities.
              We focus on preventive care, awareness, and direct medical support.
            </p>

            <ul className="mt-4 space-y-2 text-gray-700">
              <li>✔ Community health outreach programs</li>
              <li>✔ Maternal and child health support</li>
              <li>✔ Disease prevention and awareness campaigns</li>
              <li>✔ Access to basic medical services</li>
            </ul>

            <p className="mt-4 text-gray-600">
              Through partnerships and local engagement, we aim to create healthier,
              more resilient communities worldwide.
            </p>
          </div>

          <img
            src="/health.jpg"
            alt="health"
            className="w-full h-80 object-cover rounded-xl shadow-lg"
          />

        </section>

        {/* SOCIAL ENTERPRISE */}
        <section id="enterprise" className="mt-20 grid md:grid-cols-2 gap-10 items-center">


          <div>
            <h2 className="text-3xl font-bold text-green-900">
              Social Enterprise & Community Development
            </h2>

            <p className="mt-4 text-gray-700 leading-relaxed">
              We support communities through sustainable economic empowerment
              initiatives that promote self-reliance and long-term development.
              Our programs are designed to create opportunities and reduce poverty.
            </p>

            <ul className="mt-4 space-y-2 text-gray-700">
              <li>✔ Skills training and capacity building</li>
              <li>✔ Agricultural and farming support</li>
              <li>✔ Small business and entrepreneurship support</li>
              <li>✔ Community-led development initiatives</li>
            </ul>

            <p className="mt-4 text-gray-600">
              By empowering individuals economically, we help communities grow,
              thrive, and sustain themselves independently.
            </p>
          </div>
          <img
            src="/community.jpg"
            alt="community"
            className="w-full h-80 object-cover rounded-xl shadow-lg"
          />

        </section>

      </div>

    </div>
  );
}