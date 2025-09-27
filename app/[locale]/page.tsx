import HeroSection from "@/components/HeroSection";
import BehindTheScreen from "@/components/BehindTheScreen";
import HighlightProject from "@/components/HighlightProject";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
      <div>
        <HeroSection />
        <BehindTheScreen />
        <HighlightProject />
        <CTA />
        <Footer />
      </div>
  );
}
