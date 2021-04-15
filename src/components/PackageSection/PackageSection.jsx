import React from 'react';
import styled from 'styled-components';
import OfferPackageCard from '../offerPackage/OfferPackageCard/OfferPackageCard';
import miniLogo from '../../assets/images/LogoMini.svg';



const PackageSectionWrapper = styled.section`
    width: 100%;
    padding: var(--main-padding);
    padding-top: 8rem;
    padding-bottom: 8rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 2rem;
    background-color: ${({bgColor}) => bgColor ? bgColor : 'transparent'};
    background-image:  ${({bgImage}) => bgImage ? bgImage : null};
    
`;

const OfferPackageInfo = styled.div`
    flex-basis: 70%;
    box-shadow: var(--main-shadow);
    min-width: 750px;
    margin-left: 2rem;

    @media (max-width: 1200px) {
        flex-basis: 50%;
    }
`;

const OfferInfoBar = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 5rem 2rem ;
    width: 100%;
    height: ${({bestSeller}) => bestSeller ? '10rem' : '8rem'};
    background-color: ${({color}) => color ? color : 'var(--main-red)'};

    h3 {
        text-transform: uppercase;
        font-size: 3.2rem;
        color: #fff;
    }
`;

const OfferInfoText = styled.div`
    padding: 1rem 5rem 2rem ;
    h4 {
        font-size: 2.2rem;
        margin-bottom: 3rem;
    }
`;

const OfferPackageCardStyled = styled(OfferPackageCard)`
    margin: 0;
`;


const PackageSection = ({data, color, bestSeller, bgColor, bgImage}) => {
    const {name, speed, perks, price, paragraph1, paragraph2} = data;
    return (
        <PackageSectionWrapper bgColor={bgColor} bgImage={bgImage}>
            <OfferPackageCardStyled className='card' data={data} color={color} bestseller={bestSeller} subpage />
            <OfferPackageInfo>
                <OfferInfoBar color={color}>
                    <h3>pakiet {name}</h3>
                    <img src={miniLogo} alt="Internett"/>
                </OfferInfoBar>
                <OfferInfoText>
                    <h4>Dla kogo?</h4>
                    <p>{paragraph1}</p>
                    <h4>Korzyści</h4>
                    <p>{paragraph2}</p>
                </OfferInfoText>
            </OfferPackageInfo>
        </PackageSectionWrapper>
    )
};

export default PackageSection