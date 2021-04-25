import React from 'react';
import styled from 'styled-components';

import Button from '../Button/Button';

import bgImage from '../../assets/images/001.jpeg';

const MainSlideWrapper = styled.section`
    width: 100vw;
    height: ${({main}) => main ? '100vh' : '70vh'};
    position: relative;
    overflow: hidden;
`;

const MainSlideImage = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const MainSlideImageShade = styled.div`
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.2);
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
`;

const MainSlideText = styled.div`
    position: absolute;
    top: 40%;
    left: 10rem;

    h1, p, span {
        width: 70%;
        text-shadow: 0.1rem 0.3rem 0.6rem rgba(30, 30, 30, 0.3);
        color: #fff;
    }
    h1 {
        font-size: 7rem;
        text-transform: uppercase;
        line-height: 7.15rem;
        
    }

    p {
        font-size: 3.7rem;
        line-height: 3.9rem;
    }

    span {
        font-size: 4.3rem;
        font-weight: 500;
    }

    .aboveText {
        position: absolute;
        top: -3.4rem;
        left: 0;
        font-size: 2.3rem;
        padding-left: 2rem;

        &::before {
            content: "";
            position: absolute;
            left: 0rem;
            bottom: 0.5rem;
            display: block;
            width: 1.5rem;
            height: 2.4rem;
            background-color: var(--main-red);
        }
    }
    @media (max-width: 780px) {
        left: 10vw;

        h1 {
            font-size: 3.2rem;
            line-height: 3.3rem;
            /* line-break: anywhere; */
        }

        p {
            font-size: 2.4rem;
            line-height: 2.6rem;
        }
        
        span {
            font-size: 3rem;
            margin-top: 0.4rem;
            display: block;
        }
    }
`;

const MainSlide = ({mainText, subText, buttonText, aboveText, priceText, image, main}) => {
    return (
        <MainSlideWrapper main={main}>
            <MainSlideImage src={image ? image : bgImage}/>
            <MainSlideImageShade />
            <MainSlideText>
                <h1>{mainText}</h1>
                <p>{subText}<span>{priceText}</span></p>
                {
                    aboveText && <p className="aboveText">{aboveText}</p>
                }

                {   
                 buttonText  && <Button text={buttonText}/>
                }
            </MainSlideText>
        </MainSlideWrapper>
    )
};

export default MainSlide