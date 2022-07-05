import { createGlobalStyle } from 'styled-components';
import theme from '../GlobalStyle/theme';

const GlobalStyle = createGlobalStyle`
    :root {
        --typography-font-size-body: ${theme.typography.font.size.body};
        --typography-font-family-merriweather: ${theme.typography.font.family.merriweather};
        --typography-font-weight-body: ${theme.typography.font.weight.body};
        --typography-font-weight-heading: ${theme.typography.font.weight.heading};
        --typography-line-height-body: ${theme.typography.font.lineHeight.body};
        --typography-line-height-heading: ${theme.typography.font.lineHeight.heading};
        --typography-font-size-heading-h1: ${theme.typography.font.size.h1};
        --typography-font-size-heading-h2: ${theme.typography.font.size.h2};
        --typography-font-size-heading-h3: ${theme.typography.font.size.h3};
        --typography-font-size-heading-h4: ${theme.typography.font.size.h4};
        --typography-font-size-heading-h5: ${theme.typography.font.size.h5};
        --typography-font-size-heading-small: ${theme.typography.font.size.small};
    }
    *, *::before, *::after {
        box-sizing: border-box;
    }
    * {
        margin: 0;
    }
    html, body {
        height: 100%;
        font-family: var(--ff-merriweather);
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
    html {
        font-size: var(--typography-font-size-body);
    }
    body {
        -webkit-font-smoothing: antialiased;
        font-weight: var(--typography-font-weight-body);
        line-height: var(--typography-line-height-body);
    }
    h1, h2, h3, h4, h5 {
        font-weight: var(--typography-font-weight-heading);
        line-height: var(--typography-line-height-heading);
    }
    h1 { font-size: var(--typography-font-size-heading-h1); }
    h2 { font-size: var(--typography-font-size-heading-h2); }
    h3 { font-size: var(--typography-font-size-heading-h3); }
    h4 { font-size: var(--typography-font-size-heading-h4); }
    h5 { font-size: var(--typography-font-size-heading-h5); }
    small, .text_small { font-size: var(--typography-font-size-heading-small); }
`;

export default GlobalStyle;
