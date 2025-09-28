export const getCriticalCSS = (locale: string) => `
/* Critical styles for immediate render - extracted from YOUR globals.css */
:root {
    --background: #020202;
    --foreground: #ffffff;
    --white: #ffffff;
    --paleWhite: #EEEEEE;
    --red: #ff4533;
    --darkRed: #ff220e;
}

body {
    margin: 0;
    color: white;
    background: var(--background);
    font-family: var(--font-objectSans), sans-serif;
}

[dir="rtl"] body {
    font-family: var(--font-playpenSansArabic), sans-serif;
}

/* Critical typography - only what's above the fold */
h1 {
    font-size: clamp(1.5vw, 6.5vw, 5.5vw);
    line-height: clamp(2vw, 7.5vw, 6vw);
    font-weight: 600;
    margin: 0;
}

h2 {
    font-size: clamp(1.6vw, 5.7vw, 4.5vw);
    line-height: clamp(1.8vw, 6vw, 4.8vw);
    color: var(--red);
    font-weight: 600;
    margin: 0;
}

/* Critical mobile styles */
@media (max-width: 431px) {
    h1 {
        font-size: clamp(14vw, 14.5vw, 14.5vw);
        line-height: clamp(16vw, 16.5vw, 16.5vw);
    }
    
    h2 {
        font-size: clamp(12vw, 12.5vw, 12.5vw);
        line-height: clamp(14vw, 14.5vw, 14.5vw);
    }
}

/* Essential layout classes */
.bg-background { background-color: var(--background); }
.text-white { color: var(--white); }
.text-red { color: var(--red); }
`;