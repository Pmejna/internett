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
        paragraph2: `W danym poziomie cenowym naszego pakeitu otrzymają Państwo stabilne łącze o predkości pobierania 100mb/s oraz takiej samej prędkośći wysyłania danych. W pakiecie zaliczona jest również technologia VoIP, która daje możliwość założenia telefonu stacjonarnego. Pakiet nie zawiera ograniczeń transferu danych. Możesz cieszyć się internetem bez końca. 
        `
        },
    standard: {
        name: 'standard',
        speed: '300',
        perks: [
            {key: '001b', text: 'brak limitu danych'},
            {key: '002d', text: 'idealny dla rodziny'},
        ],
        price: '79',
        paragraph1: `Pakiet standard internetu światłowodowego skierowany jest do użytkowników, którzy próćz sporadycznego użytkowania internetu w celu pozyskiwania informacji czy oglądania popularnych platform streamingowych, od czasu do czasu korzystają z aplikacji do kontaktu z innymi i używają kamerki internetowej. Łącze pozwala na stabilne i szybkie uplodowanie treści do sieci internet. `,
        paragraph2: `Doskonałę rozwiązanie dla małych rodzin, w których każdy korzysta z internetu w celach rekreacyjnych. Oferujemy prędkość pobierania na poziomie 200mb/s a wysyłania na poziomie 100mb/s. W ofercie rónież zawarta jest technologia VoIP oraz nie ma limitów danych. `,
        },
    premium: {
        name: 'premium',
        speed: '500',
        perks: [
            {key: '001c', text: 'brak limitu danych'},
            {key: '002c', text: 'zawiera voip'},
            {key: '002d', text: 'idealny dla freelancerów'},
        ],
        price: '99',
        paragraph1: `Pakiet premium internetu światłowodowego jest skierowany do użytkowników którzy w posósb profesjonalny korzystają z sieci. Np polecamy ten pakiet wszystkim freelanserom, którzy działają w branżach artystycznych, technicznych, w których wymagany jest przesył ogromnych pakietów danych w bardzo krótkim czasie. Polecamy ten pakiet aspirującym youtuberom, filmowcom i osobom spędzających długie godziny na treningach w rywalizacjach online w wymagające graficzne. Oferta skeirowana jest również do rodzin wielodzietnych. `,
        paragraph2: `Pakiet zawiera prędkość pobierania na poziomie 500 mb/s oraz prędkość wysyłania na poziomie 100mb/s. Zawiera również VoIP oraz brak limitu danych. `
        },
    ultra: {
        name: 'ultra',
        speed: '1000',
        perks: [
            {key: '001d', text: 'brak limitu danych'},
            {key: '003d', text: 'zawiera voip'},
            {key: '002d', text: 'idealny dla firm'},
        ],
        price: '99',
        paragraph1: `Pakiet Ultra Internetu światłowodowego jest najlepszym wyborem dla osób potrzebujących stałego i możliwie najszybszego dostępu do Internetu. Jest to idealny wybór dla firm lub osób potrzebujących jak najszybszej możliwej komunikacji. Świetnie sprawdza się przy wielowątkowej pracy z wykorzystaniem maksymalnych prędkości łącza.`,
        paragraph2: `Najwyższy pakiet Internetu światłowodowego Ultra to maksimum korzyści, jakie daje użytkownikowi łącze internetowe. Ściąganie i wysyłanie dużych plików trwa zaledwie kilka sekund. Oglądanie filmów czy popularne streamy wideo z wykorzystaniem tego typu łącza to czysta przyjemność pracy.`
        },
    };


const PakietyPage = () => {
    return (
    <>
        <PageSEO title={pakietySeo.title} description={pakietySeo.description}/>
        <MainSlide mainText='Pakiety' image={bgImage}/>
        <HeadSection header={headerText} paragraph={paragraphText}/>
        <PackageSection data={packageText.lekki} color='#a1a1a1' id="lekki"/>
        <PackageSection data={packageText.standard} color='#2784FE' id="standard"/>
        <PackageSection data={packageText.premium} bgColor='#F1F1F1' id="premium"/>
        <PackageSection data={packageText.ultra} id="ultra" color='#A927FE'/>
    </>
    )
};

export default PakietyPage