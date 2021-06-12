import React from 'react';
import styled from 'styled-components';
import MainSlide from '../components/MainSlide/MainSlide';
import bgImage from '../assets/images/Firma.jpeg';
import VerticalSection from '../components/VerticalSection/VerticalSection';
import CompanyCards from '../components/CompanyCards/CompanyCards';
import {data}  from '../assets/texts/dlaFirmText';



import HeadSection from '../components/HeadSection/HeadSection';
const DlaFirm = () => {
    return (
        <>
            <MainSlide mainText='Internet dla firm' image={bgImage}/>
            <HeadSection 
            header='Stabilny internet to stabilna firma'
            paragraph='Dla płynności informacji w firmie oraz między kontrahentami ważna jest bezstresowa oraz niezawodna komunikacja. Aby ta taka była potrzebna jest niezawodna infrastruktura techniczna, która będzie w stanie zapewnić możliwie jak najstabilniejsze łącze do sieci internet.'>
            </HeadSection>
            <VerticalSection box_data={data.box_data} />
            <VerticalSection box2_data={data.box2_data}/>
        </>
    )
};

export default DlaFirm