import React from 'react';
import styled from 'styled-components';
import Button from '../../Button/Button';
import tickIcon from '../../../assets/images/tick.svg';

const TvPackageCardWrapper = styled.div`
    background-color: #fff;
    box-shadow: var(--main-shadow);
    min-height: ${({optional}) => optional ? "unset" : "650px"};
    min-width: 370px;
    max-width: 250px;
    margin: 40px 0;
    display: flex;
    flex-direction: column;
    padding-bottom: 2rem;
    border: none;

    /* @media (max-width: 1120px) {
        min-width: unset;
        max-width: 310px;
    }

    @media (max-width: 780px) {
        min-width: unset;
        width: 100%;
    }    */
`;

const CardPackageLabel = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2rem;
    height: 8rem;
    background-color: #2579F9;
    text-transform: uppercase;
    color: #fff;

    h3 {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        font-size: 2.3rem;
        letter-spacing: 4px;

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
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    flex-basis: 50%;

    p {
        text-align: center;
    }
`;

const  PackagePrice = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-transform: lowercase;
    text-align: center;
    margin: 1.8rem 0;
    color: #2579F9;

    span {
        font-size: 1.4rem;
    }
    .price {
        position: relative;
        font-weight: 300;
        font-size: 6rem;
        line-height: 6rem;
   }

    .from {
        position: absolute;
        left: -3rem;
        bottom: -1rem;
        font-size: 2.2rem;
        text-transform: capitalize;
    }
`;

const CardButton = styled(Button)`
   
        display: flex;
        flex-direction: row;
        justify-content: center;
        background-color: transparent;
        margin-top: 5rem;
        margin-bottom: 2rem;

    a {
        max-width: 220px;
        background-color: #000;
        color: #fff;
        text-decoration: none;
    }
    
`;

const PackageText = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    font-size: 1.2rem;
`;

const Line = styled.div`
    width: 80%;
    height: 0.2rem;
    border-top: 1px solid #eeeeee;
`;

const PackageTextParagraph = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: baseline;
    width: 100%;
    padding: 0.6rem 1.4rem;
    /* p {
        text-align: left;
    } */

    .info {
        font-size: ${({optional}) => optional ? '2rem' : null};
        text-align: right;
        color: #2579F9;
    }
`;

const PackageImages = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 3rem;
    padding: 1rem 4rem;
`;

const PackageImage = styled.figure`
    height: 7rem;
    img {
        height: 100%;
        width: auto;
    }
`;



const TvPackagesCard = ({data, link, className, optional}) => {
    const {title, cost, channelsNumber, hdChannels, text, textSpan, activationCost, image1, image2, image3} = data;
    return (
        <TvPackageCardWrapper  className={className} key={title} optional={optional}>
            <CardPackageLabel>
                {
                    optional ?
                    <h3>Pakiet Premium</h3>
                    : null
                }
                <h3>{title}</h3>
            </CardPackageLabel>
            <CardPackageInfo>
                <PackagePrice>
                        <div className='price'>{cost}</div>
                        <span>miesięcznie</span>
                </PackagePrice>
                <PackageText>
                    <Line />
                    {
                        !optional ? 
                        <PackageTextParagraph><p>Ilość kanałów: <span className="info">{channelsNumber}</span></p></PackageTextParagraph>
                        :
                        null
                    }
                    {
                        !optional ?
                        <PackageTextParagraph><p>Kanały HD: <span className="info">{hdChannels}</span></p></PackageTextParagraph>
                        : null
                    }
                    {
                        !optional ? 
                        <PackageTextParagraph><p>{text} <span className="info">{textSpan}</span></p></PackageTextParagraph>
                        : null
                    }
                    {
                        !optional ?
                        <PackageTextParagraph><p>Koszt aktywacji: <span className="info">{activationCost}</span></p></PackageTextParagraph>
                        : null
                    }    
                    {
                        optional ? 
                            data.channels.map(channel => <PackageTextParagraph optional={optional}><span className="info">{channel}</span></PackageTextParagraph>)
                            : null
                    }
                    <Line />
                </PackageText>
                <PackageImages>
                    {
                        !optional ?
                        <PackageImage><img src={image1}  /></PackageImage>
                        : null
                    }
                    {   !optional ? 
                        <PackageImage><img src={image2}  /></PackageImage>
                        : null
                    }
                    {
                        !optional ?
                        <PackageImage><img src={image3}  /></PackageImage>
                        : null
                    }
                </PackageImages>
            </CardPackageInfo>
            <CardButton className='button' link={link}></CardButton>
        </TvPackageCardWrapper>
    )
};

export default TvPackagesCard