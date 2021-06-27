import React from 'react';
import styled from 'styled-components';

const CardPackageWrapper = styled.div`
    background-color: #fff;
    box-shadow: var(--main-shadow);
    display: flex;
    flex-direction: column;
    padding-bottom: 2rem;
    margin: 5rem 0;
    max-width: 1400px;
    p {
        font-size: 1.4rem;
    }

    @media (max-width: 1120px) {

    }

    @media (max-width: 780px) {

    }   
`;

const CardPackageLabel = styled.div`
    height: 8rem;
    background-color: ${({color}) => color ? color : 'var(--main-red)'};
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    @media (max-width: 780px) {
        height: auto;
        padding: 2rem;

        h3 {
        
        font-size: 1.3rem;
        text-align: center;
        }
    }   

    h3 {
        font-size: 2.2rem;
        color: #fff;

        span {
            font-weight: 300;
            color: #fff;
            text-transform: uppercase;
        }
        span:nth-of-type(2) {
            font-size: 2rem;
            font-weight: 600;
        }
    }
`;

const CardPackageInfo = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 3rem;

    div {
        font-size: 1.6rem;
    }
    @media (max-width: 780px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding-bottom: 0;
    }   
`;

const PackageSpeed = styled.div`
    p {
    font-size: 1.8rem;        
    }
    @media (max-width: 780px) {
        p {
        font-size: 2rem;
        align-items: center;
        text-align: center;
        }
    }   

`;

const  PackagePrice = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-transform: lowercase;
    text-align: center;
    .price {
        position: relative;
        font-weight: 300;
        font-size: 4rem;
        line-height: 4rem;
        color: #27CC00;
   }

    .brutto {
        font-size: 1.3rem;
        text-transform: capitalize;
        color: #27CC00;
    }

    @media (max-width: 760px) {
        flex-basis: 100%;
        margin-top: 1.5rem;
    }   
`;


const CardPackageParagraph = styled.div`
    padding: 3rem;

    @media (max-width: 760px) {
        padding: 1.6rem;
        text-align: center;
    }
`;


const PackageUniversalCard = ({place, color, speed, price, text, packageName, className}) => {
    return (
        <CardPackageWrapper className={className}>
            <CardPackageLabel color={color}>
                <h3>
                    Internet Światłowodowy {place} - pakiet {packageName}
                </h3>
            </CardPackageLabel>
            <CardPackageInfo>
                <PackageSpeed>
                    <p>Prędkość: <b>{speed}</b></p>
                </PackageSpeed>
                <div>Brak limitu danych</div>
                <PackagePrice>
                        <div className='price'>{price}zł</div>
                        <span>miesięcznie</span>
                        <span className='brutto'>Brutto</span>
                </PackagePrice>
            </CardPackageInfo>
            <CardPackageParagraph>
                <p>{text}</p>
            </CardPackageParagraph>
        </CardPackageWrapper>
    )
};

export default PackageUniversalCard