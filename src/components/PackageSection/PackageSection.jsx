import React from 'react';
import styled from 'styled-components';
import OfferPackageCard from '../OfferPackage1/OfferPackageCard/OfferPackageCard';
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

    @media (max-width: 1000px) {
        flex-direction: column;   
        padding: var(--main-padding-mobile);
    }
    
`;

const OfferPackageInfo = styled.div`
    flex-basis: 70%;
    box-shadow: var(--main-shadow);
    min-width: 750px;
    margin-left: 2rem;
    background-color: #fff;

    @media (max-width: 1200px) {
        flex-basis: 70%;
        min-width: unset;
    }


    @media (max-width: 1000px) {
        margin: 2rem 0 0;
        width: 100%;
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

    @media (max-width: 780px) {
        padding: 1rem 2rem;
        h3 {
            font-size: 2rem;
        }   
    }
`;

const OfferInfoText = styled.div`
    padding: 1rem 5rem 2rem ;
    h4 {
        font-size: 2.2rem;
        margin-bottom: 1.6rem;
        margin-top: 1.6rem;
    }

    @media (max-width: 780px) {
        padding: 1rem 2rem;
        h4 {
            margin: 1.4rem 0 1.6rem;
        }

    }
`;

const OfferPackageCardStyled = styled(OfferPackageCard)`
    margin: 0;
    min-width: 270px;

    @media (max-width: 1000px) {
        flex-basis: 100%;
        width: 100%;
        max-width: none;
        margin-bottom: 2rem;
    }
`;


const PackageSection = ({data, color, bestSeller, bgColor, bgImage, id}) => {
    const {name, speed, perks, price, paragraph1, paragraph2} = data;
    return (
        <PackageSectionWrapper bgColor={bgColor} bgImage={bgImage} id={id}>
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