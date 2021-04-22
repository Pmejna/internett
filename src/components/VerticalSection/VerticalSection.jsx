import React from 'react';
import styled from 'styled-components';

const VerticalSectionWrapper = styled.section`
    margin-bottom: 5rem;
    overflow: hidden;

    figure {
        flex-basis: 44%;
        overflow: hidden;
    }

    img {
        width: 100%;
        height: auto;
    }

    div {
        width: 100%;
        flex-basis: 55%;
    }

    @media (max-width: 1360px) {
        img {
            height: 100%;
            display: block;
            object-fit: none;
            object-position: 50% 50%;
        }
    }
    @media (max-width: 1120px) {
        img {

        }
    }

    @media (max-width:900px) {
        margin-bottom: 0;
    }
`;


const VerticalBoxFirst = styled.div`
    width: 100vw;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    overflow: hidden;


    p {
        padding-right: 5rem;
    }

    @media (max-width: 1120px) {

        
        img {
            
        }
    }
    @media (max-width:900px) {
        display: grid;
        grid-template-columns: auto;
        grid-template-rows: 320px auto;
        grid-gap: 2rem;

        figure {
            grid-area: 1 / 1 / 2 / 2;
        }

        p {
            padding: 0;
        }

        h2 {
            line-height: 3.8rem;
            margin-bottom: 3rem;
        }
    }
`;
const VerticalBoxSecond = styled.div`
    width: 100vw;
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    overflow: hidden;

    p, h2 {
        text-align: right;
    }
    h2 {
        padding-left: 5rem;
    }
    p {
        padding-left: 5rem;
    }

    @media (max-width: 1120px) {

        
        img {
            
        }
    }

    @media (max-width:900px) {
        display: grid;
        grid-template-columns: auto;
        grid-template-rows: 320px auto;
        grid-gap: 2rem;

        figure {
            grid-area: 1 / 1 / 2 / 2;
        }

        p, h2 {
        text-align: left;
    }

        p, h2 {
            padding: 0;
        }

        h2 {
            line-height: 3.8rem;
            margin-bottom: 3rem;
        }
    }
`;

const VerticalSection = ({box_data, box2_data}) => {
    return (
        <VerticalSectionWrapper>
                {
                    box_data ? 
                    <VerticalBoxFirst>
                    <div>
                        <h2>{box_data.header}</h2>
                        <p>{box_data.paragraph}</p>
                    </div>
                    <figure>
                        <img src={box_data.image} alt={box_data.alt}/>
                    </figure>
                </VerticalBoxFirst>      :  null
                }
                {
                    box2_data ? 
                <VerticalBoxSecond>
                    <div>
                        <h2>{box2_data.header}</h2>
                        <p>{box2_data.paragraph}</p>
                    </div>
                    <figure>
                        <img src={box2_data.image} alt={box2_data.alt}/>
                    </figure>
                </VerticalBoxSecond>      : null
                }
        </VerticalSectionWrapper>
    )
};

export default VerticalSection