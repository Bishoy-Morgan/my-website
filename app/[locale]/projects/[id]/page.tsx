'use client'

import { useParams } from 'next/navigation'
import { useTranslations } from 'next-intl'
import HeroProjects from '@/app/[locale]/projects/components/HeroProjects'
import Footer from '@/components/Footer'
import { getProjectsData } from '@/lib/projectsData' // Function that accepts translation function

export default function ProjectsPage() {
    const params = useParams()
    const projectId = params.id
    const t = useTranslations()
    const projects = getProjectsData(t)
    
    const project = projects.find(p => p.id === projectId)

    if (!project) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <p className="text-center mt-10 text-xl">
                    {t('common.projectNotFound')}
                </p>
            </div>
        )
    }

    return (
        <main className="relative w-full z-10">
            <HeroProjects project={project} />
            <Footer />
        </main>
    )
}