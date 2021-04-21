import React from 'react';
import styled from 'styled-components';
import {content} from '../../assets/texts/companyCards';
import bgImage from '../../assets/images/LinesCompanyCards.png';

import CompanyCard from './CompanyCard/CompanyCard';

const CompanyCardsWrapper = styled.section`
    display: grid;
    grid-template-columns: repeat(3, 300px);
    grid-template-rows: auto;
    justify-content: space-between;
    grid-gap: 5rem;
    background-image: url(${bgImage});
    background-repeat: no-repeat;
    background-position: bottom;
    padding: 0 300px;

    div:nth-last-of-type(4) {
        grid-area: 2/2/3/3;
    }

    @media (max-width: 1600px) {
        padding: var(--main-padding);
    }

    @media (max-width: 1200px) {
        grid-template-columns: repeat(2, 300px);

        div:nth-last-of-type(4) {
        grid-area: unset;
    }

    }

    @media (max-width: 760px) {
        grid-template-columns: 300px;
        justify-content: center;
    }
`;

const CompanyCards = () => {
    return (
        <CompanyCardsWrapper>
            {
                content.map(card => (
                    <CompanyCard text={card.text} image={card.image} title={card.title}/>
                ))
            }
        </CompanyCardsWrapper>
    )
};


export default CompanyCards