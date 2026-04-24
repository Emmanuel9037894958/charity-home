import ProjectsSlider from "../components/ProjectsSlider";
import TypewriterText from "../components/TypewriterText";

export default function Projects() {
  return (
    <div className="pb-1">
      {/* 🔥 HERO SECTION */}
      <div className="w-full bg-green-900 text-white py-44 px-4 text-center">
        <p className="uppercase tracking-widest text-yellow-400 font-semibold">
          Our Work
        </p>

        <TypewriterText
          texts={[
            "Transforming Lives Through Meaningful Projects",
            "Supporting Communities and Empowering the Future",
            "Providing Care for the Sick and Vulnerable",
          ]}
        />

        <p className="mt-6 max-w-3xl mx-auto text-gray-200 leading-relaxed">
          At Roodel Trust Foundation, our projects are centered on improving
          lives, supporting vulnerable communities, and creating opportunities
          for a better future. We are committed to addressing real challenges by
          providing practical solutions that bring lasting change.
        </p>
      </div>

      {/* 🔽 CONTENT SECTION */}
      <div className="max-w-6xl mx-auto px-4 mt-9 text-center">
        <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto">
          Our initiatives focus on empowering communities through education,
          providing care and support for the sick and vulnerable, and delivering
          essential resources to those in need. We believe that every individual
          deserves access to healthcare, quality education, and the opportunity
          to live a dignified life.
        </p>

        <p className="mt-4 text-gray-700 leading-relaxed max-w-3xl mx-auto">
          Through outreach programs, health support services, and community
          development efforts, we are actively transforming lives across
          different regions. Whether it is assisting families, supporting
          individuals facing health challenges, or empowering young people, our
          work is driven by compassion and a commitment to sustainable impact.
        </p>

        <p className="mt-4 text-gray-700 leading-relaxed max-w-3xl mx-auto">
          Each project we undertake represents hope, progress, and a step toward
          a brighter future for the communities we serve.
        </p>

        {/* SLIDER */}
        <ProjectsSlider />
      </div>
    </div>
  );
}
