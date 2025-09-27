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
        font-family: ${locale === 'ar' ? 'Playpen Sans Arabic, sans-serif' : 'Object Sans, sans-serif'} !important;
        overflow-x: hidden;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    
    /* 3. Critical font faces to prevent FOIT */
    @font-face {
        font-family: 'Object Sans';
        src: url('/fonts/ObjectSans.woff2') format('woff2');
        font-weight: 400;
        font-style: normal;
        font-display: swap;
    }
    
    @font-face {
        font-family: 'Object Sans Heavy';
        src: url('/fonts/ObjectSans-Heavy.woff2') format('woff2');
        font-weight: 600;
        font-style: normal;
        font-display: swap;
    }
    
    /* 4. Ensure LCP element is visible */
    .min-h-screen { min-height: 100vh; }
    .relative { position: relative; }
    .z-10 { z-index: 10; }
    
    /* 5. Basic RTL/LTR support */
    [dir="rtl"] { text-align: right; }
    [dir="ltr"] { text-align: left; }
    
    /* 6. Critical navbar visibility */
    .navbar-container {
        position: relative;
        z-index: 50;
    }
    
    /* 7. Prevent layout shifts */
    img { max-width: 100%; height: auto; }
    
    /* 8. Loading state */
    .loading { opacity: 0.8; }
`;