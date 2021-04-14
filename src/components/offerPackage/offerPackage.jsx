import React from 'react';
import styled from 'styled-components';
import OfferPackageCard from './offerPackageCard/offerPackageCard';

import packagesBg from '../../assets/images/PackagesBg.jpg';

const packageText = {
    lekki: {
        name: 'lekki',
        speed: '100',
        perks: [
            {key: '001a', text: 'brak limitu danych'},
            {key: '002a', text: 'cecha1'},
        ],
        price: '59'
        },
    standard: {
        name: 'standard',
        speed: '150',
        perks: [
            {key: '001b', text: 'brak limitu danych'},
            {key: '002b', text: 'cecha1'},
            {key: '003b', text: 'cecha2'},
        ],
        price: '99'
        },
    ultra: {
        name: 'ultra',
        speed: '250',
        perks: [
            {key: '001c', text: 'brak limitu danych'},
            {key: '002c', text: 'cecha1'},
            {key: '003c', text: 'cecha2'},
        ],
        price: '149'
        },
    };

const OfferPackageWrapper = styled.div`
    width: 100vw;
    height: auto;
    display: grid;
    grid-template-columns: repeat(3, minmax(300px, 350px));
    grid-template-rows: auto;
    grid-gap: 4vw;
    justify-content: space-between;
    padding: 8vh 10vw;
    background-image: url(${packagesBg});
    background-repeat: no-repeat;
    background-position-y: bottom;
    

    @media (max-width: 1120px) {
        grid-template-columns: repeat(2, 300px);
    }

    @media (max-width: 768px) {
        grid-template-columns: 300px;
        
        justify-content: center;
    }
`;

const OfferPackage = () => {
    return (
        <OfferPackageWrapper>
            <OfferPackageCard data={packageText.lekki} color='#a1a1a1' link='/pakiety#lekki'/>
            <OfferPackageCard data={packageText.standard} bestSeller color='#2784FE' link='/pakiety#standard'/>
            <OfferPackageCard data={packageText.ultra} link='/pakiety#ultra'/>
        </OfferPackageWrapper>
    )
};

export default OfferPackage