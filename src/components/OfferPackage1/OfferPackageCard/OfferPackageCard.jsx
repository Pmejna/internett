import React from 'react';
import styled from 'styled-components';
import Button from '../../Button/Button';
import tickIcon from '../../../assets/images/tick.svg';

const CardPackageWrapper = styled.div`
    background-color: #fff;
    box-shadow: var(--main-shadow);
    min-height: ${({bestSeller}) => bestSeller ? '484px' : '440px'};
    min-height: ${({subpage}) => subpage ? '400px' : null};
    min-width: 200px;
    max-width: ${({bestSeller}) => bestSeller ? '280px' : '250px'};
    margin: ${({bestSeller}) => bestSeller ? '0 0' : '40px 0'};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-transform: uppercase;
    padding-bottom: 2rem;
    border: ${({bestSeller}) => bestSeller ? '2px solid #2784FE' : 'none'};
    .perk {
        position: relative;
        width: 2.4rem;

        &::before {
            content: "";
            position: absolute;
            left: -3rem;
            top: 0;
            /* transform: translateY(50%); */
            background-image: url(${tickIcon});
            background-repeat: no-repeat;
            width: 2rem;
            height: 2rem;
        }
    }

    @media (max-width: 1120px) {
        min-width: unset;
        max-width: 310px;
    }

    @media (max-width: 780px) {
        min-width: unset;
        width: 100%;
    }   
`;

const BestsellerLabel = styled.div`
    width: 100%;
    background-color: #000;
    color: #fff;
    margin-bottom: 1rem;
    text-align: center;
    padding: 0.2rem 0;

`;

const CardPackageLabel = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 0 2rem 0;
    height: ${({bestSeller}) => bestSeller ? '10rem' : '8rem'};
    background-color: ${({color}) => color ? color : 'var(--main-red)'};
    h3 {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;

        span {
            font-weight: 300;
            font-size: 1.2rem;
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

    flex-basis: ${({subpage}) => subpage ? '80%' : '50%'};
    min-height: ${({subpage}) => subpage ? '150px' : null};
    p {
        text-align: center;
    }
`;

const PackageSpeed = styled.div`
    background-color: #F1F1F1;
    
    p {
        padding: 0.6rem 0;
        font-weight: 300;
    }

    span {
        margin-left: 2rem;
        font-weight: 700;
    }
`;

const PackagePerk = styled.div`
    min-height: 103px;
    p {
        font-size: 1.4rem;
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
   }

    .from {
        position: absolute;
        left: -3rem;
        bottom: -1rem;
        font-size: 1.3rem;
        text-transform: capitalize;
    }
`;

const CardButton = styled(Button)`
   
        display: flex;
        flex-direction: row;
        justify-content: center;
        background-color: transparent;

    a {
        max-width: 220px;
        background-color: #000;
        color: #fff;
        text-decoration: none;
    }
    
`;



const OfferPackageCard = ({data, color, bestSeller, subpage, link, className}) => {
    const {name, speed, perks, price} = data;
    return (
        <CardPackageWrapper bestSeller={bestSeller}  className={className} subpage={subpage}>
            <CardPackageLabel color={color} bestSeller={bestSeller}>
            {
                bestSeller ? 
                <BestsellerLabel>najczęściej wybierany</BestsellerLabel>
                :
                null
            }
                <h3>
                    <span>Internet światłowodowy</span>
                    <span className="bigFont">pakiet {name}</span> 
                </h3>
            </CardPackageLabel>
            <CardPackageInfo subpage={subpage}>
                <PackageSpeed>
                    <p>prędkość:<span>{speed}Mbit/S</span></p>
                </PackageSpeed>
                <PackagePerk>
                    {perks.map(perk => <p key={perk.key}><span className="perk"></span>{perk.text}</p>)}
                </PackagePerk>
            </CardPackageInfo>
            <PackagePrice>
                    <div className='price'>{price}zł<span className='from'>Od</span></div>
                    <span>miesięcznie</span>
                </PackagePrice>
                {
                    subpage ? null : 
                    <CardButton className='button' link={link}></CardButton>
                }
        </CardPackageWrapper>
    )
};

export default OfferPackageCard