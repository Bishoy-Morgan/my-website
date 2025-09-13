import BehindTheScreen from "@/components/BehindTheScreen";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import HighlightProject from "@/components/HighlightProject";


export default function Home() {
  return (
      <main>
        <HeroSection />
        <BehindTheScreen />
        <HighlightProject />
        <CTA />
        <Footer />
      </main>
  );
}
