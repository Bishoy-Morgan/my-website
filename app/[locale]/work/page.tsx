import WorkHero from './components/WorkHero'
import Work from './components/Work'
import Footer from '@/components/Footer'


export default function WorkPage() {
    return (
        <>
            <main>
                <WorkHero />
                <Work />
            </main>
            <footer>
                <Footer />
            </footer>
        </>
    )
}
