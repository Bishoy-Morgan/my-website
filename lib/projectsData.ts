import blogsyDesktop from '@/public/images/projects/blogsy-desktop.png'
import blogsyMobile from '@/public/images/projects/blogsy-mockup.png'
import legendDesktop from '@/public/images/projects/legend-desktop.png'
import legendMobile from '@/public/images/projects/legend-mockup.png'
import skiableDesktop from '@/public/images/projects/skiable-desktop.png'
import skiableMobile from '@/public/images/projects/skiable-mockup.png'
import spaceMortgageDesktop from '@/public/images/projects/spaceMortgage-desktop.png'
import spaceMortgageMobile from '@/public/images/projects/spaceMortgage-mockup.png'
import mapdxbDesktop from '@/public/images/projects/maps-desktop.png'
import mapdxbMobile from '@/public/images/projects/maps-mockup.png'
import schoolsphereDesktop from '@/public/images/projects/schoolsphere-desktop.png'
import schoolsphereMobile from '@/public/images/projects/schoolsphere-mockup.png'


export const getProjectsData = (t: (key: string) => string) => [
    {
        id: '1',
        title: t('projects.blogsy.title'),
        subTitle: t('projects.blogsy.subTitle'),
        description: t('projects.blogsy.description'),
        link: 'https://blogsy-ceod.onrender.com',
        image: [blogsyMobile, blogsyDesktop],
        technologies: [
            'Flask',
            'Python',
            'Bootstrap 5',
            'HTML5',
            'Jinja2',
            'SQLite',
            'Render',
            'Google Tag Manager',
            'Google Analytics',
            'Trix Editor',
            'AOS (Animate On Scroll)'
        ],
        role: t('projects.blogsy.role'),
        year: 2025,
    },
    {
        id: '2',
        title: t('projects.legend.title'),
        subTitle: t('projects.legend.subTitle'),
        description: t('projects.legend.description'),
        link: 'https://legendalu.com',
        image: [legendMobile, legendDesktop],
        technologies: [
            'Next.js',
            'React.js',
            'Tailwind CSS',
            'Framer Motion',
            'Node.js',
            'MongoDB',
            'Next-Intl (i18n)',
            'Google Tag Manager',
            'Google Analytics',
            'Vercel'
        ],
        role: t('projects.legend.role'),
        year: 2024,
    },
    {
        id: '3',
        title: t('projects.mapdxb.title'),
        subTitle: t('projects.mapdxb.subTitle'),
        description: t('projects.mapdxb.description'),
        link: 'https://mapdxb.com/',
        image: [mapdxbMobile, mapdxbDesktop],
        technologies: [
            'Next.js',
            'React.js',
            'GraphQL',
            'TailwindCSS',
            'Bootstrap',
            'i18n (Arabic & English)',
            'API Integration',
            'Vercel'
        ],
        role: t('projects.mapdxb.role'),
        year: 2024
    },
    {
        id: '4',
        title: 'Skiable',
        subTitle:
            'A winter sports booking and management web app, designed for ski resorts and enthusiasts to easily book, manage, and enjoy winter activities.',
        description: 
            `Skiable offers an all-in-one platform for winter sports enthusiasts to explore, book, and manage ski trips with ease.
            It provides real-time updates on weather conditions, available slopes, and equipment rentals.
            The app features user profiles, secure payments, and customizable itineraries for a personalized experience.
            Skiable is built with scalability in mind to support multiple resorts and thousands of users simultaneously.
            It integrates with social media and community forums to foster engagement.
            The intuitive UI is optimized for both mobile and desktop devices.`,
        link: 'https://skiable.vercel.app/',
        image: [skiableMobile, skiableDesktop],
        technologies: ['React.js', 'Next.js', 'Tailwind CSS', 'MongoDB', 'Framer Motion', 'Vercel'],
        role: 'Full Stack Development',
        year: 2024,
    },
    {
        id: '5',
        title: 'Space Mortgage',
        subTitle:
            'Futuristic real estate and mortgage solutions designed to streamline property financing and buying experiences.',
        description: 
            `Space Mortgage revolutionizes the property financing process by offering an intuitive platform for buyers and lenders.
            It features mortgage calculators, loan comparison tools, and real-time consultation booking.
            The platform supports multilingual interfaces, including Arabic and English, to serve diverse markets.
            Built for performance and accessibility, Space Mortgage ensures quick load times and mobile responsiveness.
            It integrates with various financial institutions to provide up-to-date rates and offers.
            Security and data privacy are at the forefront, with strict compliance to industry standards.`,
        link: 'https://spacemortgage.ae',
        image: [spaceMortgageMobile, spaceMortgageDesktop],
        technologies: [
            'Next.js',
            'React.js',
            'Bootstrap',
            'Sass (SCSS)',
            'Node.js',
            'Vercel'
        ],
        role: 'Frontend & Backend Development',
        year: 2024,
    },
    {
        id: '6',
        title: t('projects.schoolsphere.title'),
        subTitle: t('projects.schoolsphere.subTitle'),
        description: t('projects.schoolsphere.description'),
        link: 'https://schoolsphere-one.vercel.app/',
        image: [schoolsphereMobile, schoolsphereDesktop],
        technologies: [
            'Next.js',
            'React.js',
            'MySQL',
            'Docker',
            'TailwindCSS',
            'Vercel'
        ],
        role: t('projects.schoolsphere.role'),
        year: 2025
    }

]