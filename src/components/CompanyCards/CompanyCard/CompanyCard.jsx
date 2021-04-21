import React from 'react';
import styled from 'styled-components';

import arrow from '../../../assets/images/arrowUp.svg';

const CompanyCardWrapper = styled.div`
    display: block;
    position: relative;
    height: 520px;
    overflow: hidden;
    box-shadow: var(--main-shadow);
    background-color: #fff;

    .arrow {
        position: absolute;
        bottom: 1rem;
        left: 50%;
        transform: translateX(-50%);
        width: 1rem;
        height: auto;
        transition: 0.3s ease-in-out;
        opacity: 1;
    }

    &:hover {
        figure {
            height: 100px;
        }
        img {
            width: 220%;
        }

        .arrow {
            opacity: 0;
            width: 1rem;
        }
    }

    figure {
        height: 400px;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        object-fit: cover;
        overflow: hidden;
        transition: 0.3s ease-in-out;
    }

    img {
        height: auto;
        display: inline-block;
        width: 200%;
        vertical-align: middle;
        transition: 0.3s ease-in-out;
        /* max-width: 100%; */
    }
    p {
        font-size: 1.4rem;
        text-align: center;
    }
`;

const TextComponent = styled.div`
    display: grid;
    grid-template-rows: 120px auto;
    padding: 0.4rem 1.3rem;
`;

const TextTitle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;


    h3 {
        font-size: 2rem;
        text-transform: uppercase;
        text-align: center;
    }
`;

const CompanyCard = ({image, title, text}) => {
    return (
        <CompanyCardWrapper>
            <img  className='arrow' src={arrow} />
            <figure>
                <img src={image}></img>
            </figure>
            <TextComponent>
                <TextTitle>
                    <h3>{title}</h3>
                </TextTitle>
                <p>{text}</p>
            </TextComponent>
        </CompanyCardWrapper>
    )
};

export default CompanyCard