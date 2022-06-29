import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Merriweather:wght@300;400;700;900&display=swap');
    *, *::before, *::after {
        box-sizing: border-box;
    }
    * {
        margin: 0;
    }
    html, body {
        height: 100%;
        font-family: 'Merriweather', serif;
    }
    body {
        line-height: 1.5;
        -webkit-font-smoothing: antialiased;
    }
    img, picture, video, canvas, svg {
        display: block;
        max-width: 100%;
    }
    input, button, textarea, select {
        font: inherit;
    }
    p, h1, h2, h3, h4, h5, h6 {
        overflow-wrap: break-word;
    }
    #root, #__next {
        isolation: isolate;
    }
    html { font-size: 18px; }
    body {
        font-weight: 400;
        line-height: 1.75;
    }
    h1, h2, h3, h4, h5 {
        
        font-weight: 400;
        line-height: 1.4;
    }
    h1 { font-size: 4.209rem; }
    h2 { font-size: 3.157rem; }
    h3 { font-size: 2.369rem; }
    h4 { font-size: 1.777rem; }
    h5 { font-size: 1.333rem; }
    small, .text_small { font-size: 0.75rem; }
`;

export default GlobalStyle;
