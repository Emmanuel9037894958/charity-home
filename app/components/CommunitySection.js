export default function CommunitySection() {
  return (
    <section className="relative mt-1 mb-8">

      {/* IMAGE */}
      <img
        src="/community1.jpg"
        alt="community"
        className="w-full h-[500px] md:h-[650px] object-cover"
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* TEXT ON IMAGE */}
      <div className="absolute inset-0 flex items-center justify-center px-4">

        <div className="max-w-4xl text-center text-white">

          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            Strengthening Communities, Transforming Lives
          </h2>

          <p className="mt-6 text-lg md:text-xl leading-relaxed">
            At Roodel Trust Foundation, we believe that strong communities are the foundation
            of a better world. Our work is rooted in compassion, collaboration, and a deep
            commitment to improving lives across different regions.
          </p>

          <p className="mt-4 text-lg md:text-xl leading-relaxed">
            Through our initiatives, we bring people together, creating opportunities for
            growth, empowerment, and sustainable development. From supporting families in
            underserved communities to providing access to essential services such as education
            and healthcare, our mission is to create lasting impact.
          </p>

          <p className="mt-4 text-lg md:text-xl leading-relaxed hidden md:block">
            We work closely with local partners, volunteers, and global supporters to ensure that
            every initiative is meaningful, effective, and sustainable. Together, we are building
            stronger, more resilient communities for generations to come.
          </p>

        </div>

      </div>

    </section>
  );
}