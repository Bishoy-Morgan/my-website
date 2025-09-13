import blogsyDesktop from '@/public/images/projects/blogsy-desktop.png'
import blogsyMobile from '@/public/images/projects/blogsy-mockup1.png'
import legendDesktop from '@/public/images/projects/legend-desktop.png'
import legendMobile from '@/public/images/projects/legend-mockup.png'
import skiableDesktop from '@/public/images/projects/skiable-desktop.png'
import skiableMobile from '@/public/images/projects/skiable-mockup.png'
import spaceMortgageDesktop from '@/public/images/projects/spaceMortgage-desktop.png'
import spaceMortgageMobile from '@/public/images/projects/spaceMortgage-mockup.png'

export const projectsData = [
    {
        id: '1',
        title: 'Blogsy',
        subTitle:
            'A sleek blogging platform designed to deliver a user experience inspired by Medium.com, with clean layouts, intuitive navigation, and seamless reading.',
        description: 
            `Blogsy is a sleek, user-friendly blogging platform designed with the latest web technologies to deliver fast and seamless performance.
            It offers an intuitive editor, customizable themes, and advanced SEO tools to help content creators reach their audience effectively.
            With responsive design, Blogsy ensures a smooth experience on both desktop and mobile devices.
            The platform supports multimedia content, social sharing, and analytics integration for tracking engagement.
            Security and privacy are prioritized with built-in protection features.
            Blogsy is built to scale, making it suitable for individual bloggers and professional publishing.`,
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
        role: 'Lead Full-Stack Development',
        year: 2025,
    },
    {
        id: '2',
        title: 'Legend',
        subTitle:
            'An elegant portfolio and storytelling platform crafted for creatives, featuring smooth animations, responsive layouts, and rich multimedia support.',
        description: 
            `Legend is a portfolio website tailored for creative professionals and storytellers to showcase their work in a visually captivating way.
            It leverages smooth animations, responsive layouts, and dynamic content loading for an immersive user experience.
            The site is optimized for performance and SEO to help users stand out in a competitive market.
            Legend supports multiple languages and accessibility standards to reach a broad audience.
            Built with a modern tech stack, it integrates easily with CMS and social media platforms.
            Its modular design allows easy customization and extension over time.`,
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
        role: 'Lead Frontend Developer – Full-Stack Implementation',
        year: 2024,
    },
    {
        id: '3',
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
        id: '4',
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
]