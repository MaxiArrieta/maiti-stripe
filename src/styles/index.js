import { createGlobalStyle } from 'styled-components'

export const colors = {
  azul: '#5858cc',
  amarillo: '#f4b75f',
  celeste: '#00def9'
}

export const GlobalStyle = createGlobalStyle`

    @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-display: swap;
    src: url('https://fonts.gstatic.com/s/roboto/v20/KFOlCnqEu92Fr1MmWUlfCRc4EsA.woff2') format('woff2');
    unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
    }


    html {
        font-size: 62.5%;
        -ms-text-size-adjust: 100%;
        -webkit-text-size-adjust: 100%;
    }
    *,
    *:before,
    *:after {
        box-sizing: inherit;
        margin: 0;
        padding: 0;
    }
    body {
        font-size: 1.8rem;
        line-height: 1.5;
        font-family: 'Roboto', sans-serif;
        margin: 0;
    }
    h1,
    h2{
        margin: 0;
        line-height: 1.5;
    }  
`
