import React from 'react';
import styled from 'styled-components';
import gsap from 'gsap';

const VerticalSectionWrapper = styled.section`
    overflow: hidden;
`;


const VerticalBoxFirst = styled.div`
    width: 100vw;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;
const VerticalBoxSecond = styled.div`
    width: 100vw;
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
`;

const VerticalSection = ({box_data, box2_data}) => {
    return (
        <VerticalSectionWrapper>
                <VerticalBoxFirst>
                    <div>
                        <h2>{box_data.header}</h2>
                        <p>{box_data.paragraph}</p>
                    </div>
                    <figure>
                        <img src={box_data.image} alt={box_data.alt}/>
                    </figure>
                </VerticalBoxFirst>      
                <VerticalBoxSecond>
                    <div>
                        <h2>{box2_data.header}</h2>
                        <p>{box2_data.paragraph}</p>
                    </div>
                    <figure>
                        <img src={box2_data.image} alt={box2_data.alt}/>
                    </figure>
                </VerticalBoxSecond>      
        </VerticalSectionWrapper>
    )
};

export default VerticalSection