import React from 'react';
import styled from 'styled-components';
import bgImage from '../assets/images/packages-image.jpg';

import MainSlide from '../components/MainSlide/MainSlide';
import HeadSection from '../components/HeadSection/HeadSection';
import PackageSection from '../components/PackageSection/PackageSection';
import PageSEO from '../components/PageSEO';
import { pakietySeo } from '../assets/texts/seoText';

const headerText = `Pakiety internetu światłowodowego`;
const paragraphText = `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.`;
// import 

const packageText = {
    lekki: {
        name: 'lekki',
        speed: '100',
        perks: [
            {key: '001a', text: 'brak limitu danych'},
        ],
        price: '59',
        paragraph1: `Pakiet lekki internetu światłowodowego jest skierowany do klientów o ograniczonych potrzebach
            użytkownia sieci w domu. Doskonały wybór jeśli skupiasz się na sporadycznym oglądaniu filmów, czy
            ograniczonym spędzonym czasie przed komputerem. Pakiet dla ludzi, dla których internet jest
            dodatkiem i formą pozyskiwania informacji.`,
        paragraph2: `Pakiet lekki internetu światłowodowego jest skierowany do klientów o ograniczonych potrzebach
            użytkownia sieci w domu. Doskonały wybór jeśli skupiasz się na sporadycznym oglądaniu filmów, czy
            ograniczonym spędzonym czasie przed komputerem. Pakiet dla ludzi, dla których internet jest
            dodatkiem i formą pozyskiwania informacji.`
        },
    standard: {
        name: 'standard',
        speed: '300',
        perks: [
            {key: '001b', text: 'brak limitu danych'},
        ],
        price: '79',
        paragraph1: `Pakiet lekki internetu światłowodowego jest skierowany do klientów o ograniczonych potrzebach
            użytkownia sieci w domu. Doskonały wybór jeśli skupiasz się na sporadycznym oglądaniu filmów, czy
            ograniczonym spędzonym czasie przed komputerem. Pakiet dla ludzi, dla których internet jest
            dodatkiem i formą pozyskiwania informacji.`,
        paragraph2: `Pakiet lekki internetu światłowodowego jest skierowany do klientów o ograniczonych potrzebach
            użytkownia sieci w domu. Doskonały wybór jeśli skupiasz się na sporadycznym oglądaniu filmów, czy
            ograniczonym spędzonym czasie przed komputerem. Pakiet dla ludzi, dla których internet jest
            dodatkiem i formą pozyskiwania informacji.`
        },
    premium: {
        name: 'premium',
        speed: '500',
        perks: [
            {key: '001c', text: 'brak limitu danych'},
        ],
        price: '99',
        paragraph1: `Pakiet lekki internetu światłowodowego jest skierowany do klientów o ograniczonych potrzebach
            użytkownia sieci w domu. Doskonały wybór jeśli skupiasz się na sporadycznym oglądaniu filmów, czy
            ograniczonym spędzonym czasie przed komputerem. Pakiet dla ludzi, dla których internet jest
            dodatkiem i formą pozyskiwania informacji.`,
        paragraph2: `Pakiet lekki internetu światłowodowego jest skierowany do klientów o ograniczonych potrzebach
            użytkownia sieci w domu. Doskonały wybór jeśli skupiasz się na sporadycznym oglądaniu filmów, czy
            ograniczonym spędzonym czasie przed komputerem. Pakiet dla ludzi, dla których internet jest
            dodatkiem i formą pozyskiwania informacji.`
        },
    };


const PakietyPage = () => {
    return (
    <>
        <PageSEO title={pakietySeo.title} description={pakietySeo.description}/>
        <MainSlide mainText='Pakiety' image={bgImage}/>
        <HeadSection header={headerText} paragraph={paragraphText}/>
        <PackageSection data={packageText.lekki} color='#a1a1a1' id="lekki"/>
        <PackageSection data={packageText.standard} color='#2784FE' bgColor='#F1F1F1' id="standard"/>
        <PackageSection data={packageText.premium} id="premium"/>
    </>
    )
};

export default PakietyPage