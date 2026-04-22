import CommunitySection from "./components/CommunitySection";
import FinalStatement from "./components/FinalStatement";
import Hero from "./components/Hero";
import ImpactPreview from "./components/ImpactPreview";
import TrustSection from "./components/TrustSection";
import VisionSection from "./components/VisionSection";
import Projects from "./projects/page";


export default function Home() {
  return (
    <main>
      <Hero />
      <TrustSection />
      <VisionSection / >
      <Projects / >
      <FinalStatement />
      <CommunitySection />
      <ImpactPreview />
    </main>
  );
}