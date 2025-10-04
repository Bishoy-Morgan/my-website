'use client'

import { useParams } from 'next/navigation'
import { useTranslations } from 'next-intl'
import { notFound } from 'next/navigation'
import HeroProjects from '@/app/[locale]/projects/components/HeroProjects'
import Footer from '@/components/Footer'
import { getProjectsData } from '@/lib/projectsData'

export default function ProjectsPage() {
    const params = useParams()
    const projectId = params.id
    const t = useTranslations()
    const projects = getProjectsData(t)
    
    const project = projects.find(p => p.id === projectId)

    if (!project) {
        notFound()
    }

    return (
        <main className="relative w-full z-10 !overflow-hidden">
            <HeroProjects project={project} />
            <Footer />
        </main>
    )
}