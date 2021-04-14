import React from 'react';
import styled from 'styled-components';
import bgImage from '../assets/images/Packages.jpeg';

import MainSlide from '../components/MainSlide/MainSlide';
import HeadSection from '../components/HeadSection/HeadSection';

const headerText = `Pakiety internetu światłowodowego`;
const paragraphText = `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.`;
// import 
const PakietyPage = () => {
    return (
    <>
        <MainSlide mainText='Pakiety' image={bgImage}/>
        <HeadSection header={headerText} paragraph={paragraphText}/>
    </>
    )
};

export default PakietyPage