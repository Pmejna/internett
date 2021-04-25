import React from 'react';
import styled from "styled-components";

const HeadSectionWrapper = styled.section`
    padding: var(--main-padding);
    margin-bottom: 4rem;
    h2 {
        margin-top: 3rem;
    }
    h2,p {
        text-align: center;
    }

    @media (max-width: 780px) {
        padding: 2rem 10vw;   
        text-align: left;
        margin-bottom: 1rem;

        h2,p {
            text-align: left;
        }
    }
`;

const HeadSection = ({header, paragraph}) => {
    return (
        <HeadSectionWrapper>
                <h2>{header}</h2>
                <p>{paragraph}</p>
        </HeadSectionWrapper>
    )
};

export default HeadSection