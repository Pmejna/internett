import React from 'react';
import styled from 'styled-components';

import AboutCard from './AboutCard/AboutCard';
import photoLokalna from '../../assets/images/Lokalna.jpg';
import photoNaprawa from '../../assets/images/Naprawa1.jpg';
import photoNiezaleznosc from '../../assets/images/Niezaleznosc1.jpg';
import photoDostarczamy from '../../assets/images/DostarczamyInternet1.jpg';

const AboutWrapper = styled.div`
    width: 100vw;
    height: auto;
    padding: 4rem 12vw;
    display: grid;
    grid-template-columns: repeat(2, minmax(350px, 450px));
    grid-template-rows: auto;
    gap: 5rem;
    justify-content: space-between;
`;

const AboutSection = ({data}) => {
    return (
        <AboutWrapper>
            <AboutCard text={data.card01} image={photoLokalna}/>
            <AboutCard text={data.card02} image={photoDostarczamy}/>
            <AboutCard text={data.card03} image={photoNaprawa}/>
            <AboutCard text={data.card04} image={photoNiezaleznosc}/>
        </AboutWrapper>
    )
};

export default AboutSection;