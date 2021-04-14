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