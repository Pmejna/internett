import React from 'react';
import styled from 'styled-components';
import MainSlide from '../components/MainSlide/MainSlide';
import VerticalSection from '../components/VerticalSection/VerticalSection';
import bgImage from '../assets/images/DlaDomu.jpeg';
import lines1 from '../assets/images/Group 15.png';
import Lines01 from "../components/Lines/Lines01";
import fibreImg from '../assets/images/fibre001.jpeg';

import {data} from '../assets/texts/dlaDomuText';
import Button from '../components/Button/Button';

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

const FibreSection = styled.section`
    width: 100%;
    height: auto;
    padding: 0;
    margin-bottom: 8rem;

    h2 {
        text-align: center;
        padding: var(--main-padding);
    }
`;
const FibreImageSection = styled.section`
    width: 100%;
    min-height: 500px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url(${fibreImg});
    background-size: 100%;
    color: #fff;

    p {
        text-align: center;
    }
`;
const BarButton = styled(Button)`
    margin: 0;
`;

const FibreImageBar = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 8rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0.6rem 12vw;
    background-color: #fff;
    color: #000;
    border: 1px solid #e1e1e1;
`;

const TvSection = styled.section`

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
            <FibreSection>
                <h2>Oferta internetu światłowodowego</h2>
                <FibreImageSection>
                    <p> Oferujemy budowę oraz podłączenie do internetu światłowodowego oraz rozprowadzenie internetu bezprzewodowego po całej firmie aby jego sygnał był stabilny i silny w całej siedzibie firmy. Rozpoczynając z nami współpracę nie będziesz musiał martwić się fatalnej jakości połączeniami z klientem.</p>
                    <FibreImageBar>
                        <p>100Mb/s juz od: <span>99zł</span></p>
                        <BarButton />
                    </FibreImageBar>
                </FibreImageSection>
            </FibreSection>
            <Lines01 image={lines1} alt="superszybki internet"/>
            <TvSection>
                <h2></h2>
                <figure>
                    <img></img>
                </figure>
                <p></p>
            </TvSection>
        </>
    )
};

export default DlaDomuPage