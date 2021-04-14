import React from 'react';
import styled from 'styled-components';
import MainSlide from '../components/MainSlide/MainSlide';
import VerticalSection from '../components/VerticalSection/VerticalSection';
import bgImage from '../assets/images/DlaDomu.jpeg';

import {data} from '../assets/texts/dlaDomuText';

const HeadSection = styled.section`
    padding: var(--main-padding);
    margin-bottom: 4rem;
    h2 {
        margin-top: 3rem;
    }
    h2,p {
        text-align: center;
    }
`;

const DlaDomuPage = () => {
    return (
        <>
            <MainSlide mainText='Internet dla domu' image={bgImage}/>
            <HeadSection>
                <h2>Internet światłowodowy dla domu</h2>
                <p>{`Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores.`}</p>
            </HeadSection>
            <VerticalSection box_data={data.box_data} />
            <VerticalSection box2_data={data.box2_data}/>
        </>
    )
};

export default DlaDomuPage