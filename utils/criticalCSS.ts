// export const getCriticalCSS = (locale: string) => `
// /* Critical styles for immediate render - extracted from YOUR globals.css */
// :root {
//     --background: #020202;
//     --foreground: #ffffff;
//     --white: #ffffff;
//     --paleWhite: #EEEEEE;
//     --red: #ff4533;
//     --darkRed: #ff220e;
// }

// body {
//     margin: 0;
//     color: white;
//     background: var(--background);
//     font-family: var(--font-objectSans), sans-serif;
// }

// [dir="rtl"] body {
//     font-family: var(--font-playpenSansArabic), sans-serif;
// }

// /* Critical typography - only what's above the fold */
// h1 {
//     font-size: clamp(1.5vw, 6.5vw, 5.5vw);
//     line-height: clamp(2vw, 7.5vw, 6vw);
//     font-weight: 600;
// }

// h2 {
//     font-size: clamp(1.6vw, 5.7vw, 4.5vw);
//     line-height: clamp(1.8vw, 6vw, 4.8vw);
//     color: var(--red);
//     font-weight: 600;
// }

// /* Critical mobile styles */
// @media (max-width: 431px) {
//     h1 {
//         font-size: clamp(14vw, 14.5vw, 14.5vw);
//         line-height: clamp(16vw, 16.5vw, 16.5vw);
//     }
    
//     h2 {
//         font-size: clamp(12vw, 12.5vw, 12.5vw);
//         line-height: clamp(14vw, 14.5vw, 14.5vw);
//     }
// }

// /* Essential layout classes */
// .bg-background { background-color: var(--background); }
// .text-white { color: var(--white); }
// .text-red { color: var(--red); }
// `;

export const getCriticalCSS = (locale: string) => `
/* Critical CSS - Only above-the-fold styles */
:root {
    --background: #020202;
    --foreground: #ffffff;
    --white: #ffffff;
    --paleWhite: #EEEEEE;
    --red: #ff4533;
    --darkRed: #ff220e;
}

* {
    box-sizing: border-box;
}

body {
    margin: 0;
    padding: 0;
    color: var(--white);
    background: var(--background);
    font-family: var(--font-objectSans), sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

[dir="rtl"] body {
    font-family: var(--font-playpenSansArabic), sans-serif;
}

/* Typography - Above the fold */
h1 {
    font-size: clamp(1.5vw, 6.5vw, 5.5vw);
    line-height: clamp(2vw, 7.5vw, 6vw);
    font-weight: 600;
}

h2 {
    font-size: clamp(1.6vw, 5.7vw, 4.5vw);
    line-height: clamp(1.8vw, 6vw, 4.8vw);
    color: var(--red);
    font-weight: 600;
}

h3 {
    font-size: clamp(1vw, 3vw, 2.5vw);
    line-height: clamp(1.2vw, 4vw, 3vw);
    font-weight: 600;
}

.main-p {
    font-size: clamp(0.5vw, 2vw, 1.5vw);
    line-height: clamp(0.8vw, 3vw, 2vw);
}

.secondary-p {
    font-size: clamp(0.8vw, 1.3vw, 1.5vw);
    line-height: clamp(1vw, 2vw, 2.2vw);
}

/* Navigation - Critical for header */
.navLinks {
    position: relative;
    padding-left: 0.5rem;
    border-left: 2px solid transparent;
    transition: all 150ms ease-out;
    font-size: clamp(0.8vw, 1vw, 1.8vw);
    line-height: clamp(1vw, 1.25vw, 2vw);
}

/* Icon sizing */
.icon-vw {
    width: clamp(1vw, 1.5vw, 2.5vw);
    height: clamp(1vw, 1.5vw, 2.5vw);
}

/* Essential utility classes */
.bg-background { background-color: var(--background); }
.bg-red { background-color: var(--red); }
.text-white { color: var(--white); }
.text-paleWhite { color: var(--paleWhite); }
.text-red { color: var(--red); }
.border-red { border-color: var(--red); }

/* Prevent layout shift */
.text-button { font-size: clamp(0.8vw, 1vw, 1.2vw); }

/* Mobile - Critical viewport */
@media (max-width: 431px) {
    h1 {
        font-size: clamp(14vw, 14.5vw, 14.5vw);
        line-height: clamp(16vw, 16.5vw, 16.5vw);
    }
    
    h2 {
        font-size: clamp(12vw, 12.5vw, 12.5vw);
        line-height: clamp(14vw, 14.5vw, 14.5vw);
    }
    
    h3 {
        font-size: clamp(10vw, 10.5vw, 10.5vw);
        line-height: clamp(12vw, 12.5vw, 12.5vw);
    }
    
    .main-p {
        font-size: clamp(4vw, 4.5vw, 5vw);
        line-height: clamp(8vw, 8.3vw, 8.5vw);
    }
    
    .secondary-p {
        font-size: clamp(2.8vw, 3vw, 3vw);
        line-height: clamp(5.6vw, 5.8vw, 6vw);
    }
    
    .navLinks {
        font-size: clamp(5vw, 5.5vw, 6vw);
        line-height: clamp(5vw, 5.25vw, 5.25vw);
    }
    
    .icon-vw {
        width: clamp(10vw, 10.5vw, 11vw);
        height: clamp(10vw, 10.5vw, 11vw);
    }
    
    .text-button {
        font-size: clamp(5vw, 5.5vw, 6vw);
    }
}
`;