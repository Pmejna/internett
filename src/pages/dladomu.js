import React from 'react';
import styled from 'styled-components';
import MainSlide from '../components/MainSlide/MainSlide';
import VerticalSection from '../components/VerticalSection/VerticalSection';
import bgImage from '../assets/images/DlaDomu.jpeg';
import internetTvImage from '../assets/images/InternetTv.jpeg';
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
    min-height: 400px;
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

const BarWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    flex-basis: 500px;
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
    justify-content: center;
    align-items: center;
    padding: 0.6rem 22vw;
    background-color: #fff;
    color: #000;
    border: 1px solid #e1e1e1;

    p, span {
        font-weight: 600;
    }

    span {
        /* display: block; */
        padding: 0.4rem;
        background-color: var(--main-red);
        color: #fff;
    }
`;

const TvSection = styled.section`

    margin-top: 5rem;

    p, h2 {
        text-align: center;
    }

    figure {
        width: 100%;
        height: 30vh;
        overflow: hidden;
        object-fit: cover;
        margin-bottom: 4rem;
    }
    img {
        width: 100%;
        height: auto;
    }
`;

const TvPerks = styled.div`
    width: 100%;
    height: auto;
    display: grid;
    grid-template-columns: repeat(4, 120px);
    grid-template-rows: 120px;
    grid-gap: 3rem;
    justify-content: space-between;
    margin-top: 4rem;
`;

const TvPerk = styled.div`
    margin: 0 auto;
    line-height: 100%;
    border: 2px solid var(--main-red);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem;
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
                        <BarWrapper>
                            <p>100Mb/s juz od: <span>99zł</span></p>
                            <BarButton text='sprawdz pakiety' link='/pakiety' bgColor='var(--main-dark)' hoverColor='var(--main-red)'/>
                        </BarWrapper>
                    </FibreImageBar>
                </FibreImageSection>
            </FibreSection>
            <Lines01 image={lines1} alt="superszybki internet"/>
            <TvSection>
                <h2>Ofert telewizji internetowej</h2>
                <figure>
                    <img src={internetTvImage}></img>
                </figure>
                <p>Najwyższa jakość filmów i seriali jest możliwa dzięki bardzo wysokiej prędkości, zatem  możliwości przepustowych sieci, w przypadku pobierania danych. Prędkość internetu światłowodowego wynosi nawet 1 gigabajt na sekundę. Kolejnym bardzo ważnym elementem świadczącym o wysokiej jakości tej technologii jest fakt świadczący o stabilności sieci. </p>
                <TvPerks>
                    <TvPerk><p>Korzysc1?</p> </TvPerk>
                    <TvPerk><p>Korzysc1?</p> </TvPerk>
                    <TvPerk><p>Korzysc1?</p> </TvPerk>
                    <TvPerk><p>Korzysc1?</p> </TvPerk>
                </TvPerks>
            </TvSection>
        </>
    )
};

export default DlaDomuPage