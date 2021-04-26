import React from 'react';
import styled from 'styled-components';

import Navigation from '../components/Navigation/Navigation';
import GlobalStyles from '../assets/styles/globalStyles';
import SEO from "../components/seo";

import Contact from '../components/Contact/Contact';
import Search from '../components/Search/Search';
import MainSlide from '../components/MainSlide/MainSlide';
import bgImage from '../assets/images/Map.jpg';
const MainContent = styled.main`;

  /* margin-top: var(--nav-height); */
  /* visibility: hidden; */
`;


const PlaceWrapper = styled.section`
    width: 100vw;
    
`;
const Place = ({pageContext}) => {
    return (
        <>
            <GlobalStyles />
            <Navigation />
            <MainContent>
            <MainSlide mainText='Internet światłowodowy, zasięg' image={bgImage}/>
            <Search />
                <PlaceWrapper>
                <h1>{pageContext.place}</h1>
                <h2>{pageContext.swiatlowod}</h2>
                <p>{pageContext.text}</p>
                </PlaceWrapper>  
            
            <Contact />
            </MainContent>
        </>
    )
};

export default Place