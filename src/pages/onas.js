import React from 'react';
import styled from 'styled-components';
import bgImage from "../assets/images/tvn1.jpg";
import MainSlide from '../components/MainSlide/MainSlide';
import AboutSection from '../components/AboutSection/AboutSection';
import {aboutData as data} from '../assets/texts/aboutUs';

const SectionAbout = styled.section`
  padding: 0;
`;

const SectionText = styled.div`

    width: 100%;
    display: flex;  
    flex-direction: column;
    align-items: center;
    padding: var(--main-padding);

    @media (max-width:900px) {
      text-align: center;
      padding: 2rem 10vw;
    }
`;

// import 
const OnasPage = () => {
    return (
    <>
        <MainSlide mainText='O nas' image={bgImage}/>
        <SectionAbout id='onas'>
            <SectionText>
                <h2>{data.header}</h2>
                <p>{data.paragraph}</p>
            </SectionText>
            <AboutSection data={data.cards}/>
        </SectionAbout>
    </>
    )
};

export default OnasPage