import ProjectsSlider from "../components/ProjectsSlider";

export default function Projects() {
  return (
    <div className=" px-4 pb-16">

      <div className="max-w-6xl mx-auto text-center">

        {/* SMALL LABEL */}
        <p className="text-green-700 font-semibold uppercase tracking-wide">
          Our Work
        </p>

        {/* MAIN TITLE */}
        <h1 className="text-4xl md:text-5xl font-bold text-green-900 mt-4">
          Transforming Lives Through Meaningful Projects
        </h1>

        {/* TEXT */}
        <p className="mt-6 text-gray-700 leading-relaxed max-w-3xl mx-auto">
          At Roodel Trust Foundation, our projects are designed to create lasting
          impact in communities across different regions. From supporting education
          and improving healthcare access to empowering communities through sustainable
          initiatives, our work focuses on addressing real needs and creating real change.
        </p>

        <p className="mt-4 text-gray-700 leading-relaxed max-w-3xl mx-auto">
          Each project reflects our commitment to compassion, integrity, and long-term
          development. We collaborate with local communities and partners to ensure that
          every effort contributes to a brighter and more sustainable future.
        </p>

        {/* SLIDER */}
        <ProjectsSlider />

      </div>

    </div>
  );
}