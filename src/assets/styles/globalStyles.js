import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`

    :root { 
        --main-padding: 1rem 8rem 1rem 8rem;
        --main-padding-mobile: 8vh 10vw;
        --section-padding: 5rem 10rem 5rem 10rem;
        --main-red: #FB2525;
        --main-dark: rgb(20,20,25);
        --main-gray: rgb(250,250,250);
        --main-shadow: 2px 5px 12px rgba(101, 93, 93, 0.16);
        --nav-height: 6rem;
    }

    html {
        font-size: 10px;
    }
    html, body {
        overflow-x: hidden;
        scroll-behavior: smooth;
    }

    body {
        font-family: 'poppins', sans-serif;
        color: var(--main-dark);
    }

    *,*::after,*::before {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }

    h2 {
        font-size: 3.6rem;
        margin-bottom: 1.2rem;
    }
    h4 {
        font-size: 2rem
    }

    p, a {
        font-size: 1.5rem;
    }

    p {
        font-weight: 300;
    }

    section {
        padding: var(--section-padding);

        p {
            font-size: 1.7rem;
        }

        @media (max-width:900px) {
            padding: var(--main-padding-mobile);
        }
    }

    @media (max-width: 780px) {
        h2 {
            font-size: 2.8rem;
            line-height: 3.1rem;
        }
    }

    
`;

export default GlobalStyle