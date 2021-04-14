import React from 'react';
import styled from 'styled-components';
import MainSlide from '../components/MainSlide/MainSlide';
import bgImage from '../assets/images/Firma.jpeg';
import VerticalSection from '../components/VerticalSection/VerticalSection';
import {data} from '../assets/texts/dlaFirmText';

const HeadSection = styled.section`
    padding: var(--main-padding);
    margin-bottom: 4rem;
    h2 {
        margin-top: 3rem;
    }
    h2,p {
        text-align: center;
    }
`;

const DlaFirm = () => {
    return (
        <>
            <MainSlide mainText='Internet dla firm' image={bgImage}/>
            <HeadSection>
                <h2>Stabilny internet to stabilna firma</h2>
                <p>Dla płynności informacji w firmie oraz między kontrahentami ważna jest bezstresowa oraz niezawodna komunikacja. Aby ta taka była potrzebna jest niezawodna infrastruktura techniczna, która będzie w stanie zapewnić możliwie jak najstabilniejsze łącze do sieci internet.</p>
            </HeadSection>
            <VerticalSection box_data={data.box_data} />
            <VerticalSection box2_data={data.box2_data}/>
        </>
    )
};

export default DlaFirm