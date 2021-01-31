import React from 'react';
import styled from 'styled-components';
import gsap from 'gsap';

const LinesWrapper = styled.figure`
    width: 100vw;
    overflow: hidden;
    
    img {
        width: 100%;
        height: 100%;
    }
`;

const Lines01 = ({image, alt}) => {
    return (
        <LinesWrapper>
            <img src={image} alt={alt}/>
        </LinesWrapper>
    )
};

export default Lines01