import React from 'react';
import styled from 'styled-components';
import bgImage from '../assets/images/Packages.jpeg';

import MainSlide from '../components/MainSlide/MainSlide';
import HeadSection from '../components/HeadSection/HeadSection';
import PackageSection from '../components/PackageSection/PackageSection';

const headerText = `Pakiety internetu światłowodowego`;
const paragraphText = `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.`;
// import 

const packageText = {
    lekki: {
        name: 'lekki',
        speed: '100',
        perks: [
            {key: '001a', text: 'brak limitu danych'},
            {key: '002a', text: 'cecha1'},
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
        speed: '150',
        perks: [
            {key: '001b', text: 'brak limitu danych'},
            {key: '002b', text: 'cecha1'},
            {key: '003b', text: 'cecha2'},
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
    premium: {
        name: 'premium',
        speed: '250',
        perks: [
            {key: '001c', text: 'brak limitu danych'},
            {key: '002c', text: 'cecha1'},
            {key: '003c', text: 'cecha2'},
        ],
        price: '149',
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
        <MainSlide mainText='Pakiety' image={bgImage}/>
        <HeadSection header={headerText} paragraph={paragraphText}/>
        <PackageSection data={packageText.lekki} color='#a1a1a1'/>
        <PackageSection data={packageText.standard} color='#2784FE' bgColor='#F1F1F1'/>
        <PackageSection data={packageText.premium}/>
    </>
    )
};

export default PakietyPage