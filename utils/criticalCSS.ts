export const getCriticalCSS = (locale: string) => `
    /* === CRITICAL ABOVE-THE-FOLD STYLES ONLY === */
    
    /* 1. Essential base styles */
    * { box-sizing: border-box; }
    html { scroll-behavior: smooth; }
    
    /* 2. Critical body styles - avoid FOUC */
    body {
        margin: 0;
        background: #020202 !important;
        color: #ffffff !important;
        overflow-x: hidden;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    
    /* 3. Ensure LCP element is visible */
    .min-h-screen { min-height: 100vh; }
    .relative { position: relative; }
    .z-10 { z-index: 10; }
    
    /* 4. Basic RTL/LTR support */
    [dir="rtl"] { text-align: right; }
    [dir="ltr"] { text-align: left; }
    
    /* 5. Critical navbar visibility */
    .navbar-container {
        position: relative;
        z-index: 50;
    }
    
    /* 6. Prevent layout shifts */
    img { max-width: 100%; height: auto; }
    
    /* 7. Loading state */
    .loading { opacity: 0.8; }
`;