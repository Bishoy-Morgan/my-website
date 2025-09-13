'use client'

import { useParams } from 'next/navigation'
import HeroProjects from '@/app/[locale]/projects/components/HeroProjects'
import Footer from '@/components/Footer'
import { projectsData } from '@/app/[locale]/data/projectsData'

export default function ProjectsPage() {
    const params = useParams()
    const projectId = params.id

    const project = projectsData.find(p => p.id === projectId)

    if (!project) {
        return <p className="text-center mt-10">Project not found.</p>
    }

    return (
        <main className="relative w-full z-10">
            <HeroProjects project={project} />
            <Footer />
        </main>
    )
}
