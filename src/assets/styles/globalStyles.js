import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`

    html {
        font-size: 10px;
    }
    html, body {
        overflow-x: hidden;
    }

    body {
        font-family: 'poppins', sans-serif;
    }

    *,*::after,*::before {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }

    :root { 
        --main-padding: 1rem 8rem 1rem 5rem;
        --main-red: #FB2525;
        --nav-height: 6rem;
    }

    p, a {
        font-size: 1.5rem;
    }

    
`;

export default GlobalStyle