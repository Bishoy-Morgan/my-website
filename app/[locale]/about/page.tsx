import AboutHeroSection from './components/AboutHeroSection'
import JourneyTimeline from './components/JourneyTimeline'
import Philosophy from './components/Philosophy'
import CoreCompetencies from './components/CoreCompetencies'
import Footer from '@/components/Footer'


export default function AboutPage() {
    return (
        <>
            <main>
                <AboutHeroSection />
                <JourneyTimeline />
                <Philosophy />
                <CoreCompetencies />
            </main>
            <footer>
                <Footer />
            </footer>
        </>
    )
}
