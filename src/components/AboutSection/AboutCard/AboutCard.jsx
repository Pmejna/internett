import React from 'react';
import styled from 'styled-components';

const AboutCardWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1.4rem 32vh auto;
    box-shadow: var(--main-shadow);

    @media (max-width:900px) {
        
    }

    .bar {
        background-color: var(--main-dark);
        width: 100%;
    }

    figure {
        width: 100%;
        height:auto;
        overflow: hidden;
        object-fit: cover;
}

    img {
        width: 100%;
        height: auto;
        display: block;
        /* object-fit: none; */
    }

    p {
        padding: 2.2rem 2rem;
        text-align: center;
    }
`;


const AboutCard = ({image, text}) => {
    return (
        <AboutCardWrapper>
            <div className="bar"></div>
            <figure>
                <img src={image}/>
            </figure>
            <p>{text}</p>
        </AboutCardWrapper>
    )
};

export default AboutCard