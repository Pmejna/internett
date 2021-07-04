import React from 'react';
import styled from 'styled-components';
import bgImage from "../assets/images/tv-primary-image.jpg";
import MainSlide from '../components/MainSlide/MainSlide';
import internetTvImage from '../assets/images/tv-secondary-image.jpg';
import TvPackagesSection from '../components/TvPackagesSection/TvPackagesSection';
import {tvPackagesData as data} from '../assets/texts/tvCards';
import {tvPremiumData as data2} from '../assets/texts/tvCards';

const TvSection = styled.section`

    margin-top: 5rem;

    p, h2 {
        text-align: left;
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

const TvPremiumBar = styled.section`
    min-height: 130px;
    width: 100vw;
    display: flex;
    background-color: #000;
    justify-content: center;
    align-items: center;
    /* background-color: #2579F9; */
    h3 {
        text-align: center;
        font-size: 3rem;
        color: #fff;
    }
`;

const OnasPage = () => {
    console.log(data);
    return (
    <>
        <MainSlide mainText='Telewizja' image={bgImage}/>
        <TvSection>
                <h2>Ofert telewizji internetowej</h2>
                <figure>
                    <img src={internetTvImage}></img>
                </figure>
                <p>Najwyższa jakość filmów i seriali jest możliwa dzięki bardzo wysokiej prędkości, zatem  możliwości przepustowych sieci, w przypadku pobierania danych. Prędkość internetu światłowodowego wynosi nawet 1 gigabajt na sekundę. Kolejnym bardzo ważnym elementem świadczącym o wysokiej jakości tej technologii jest fakt świadczący o stabilności sieci. </p>
        </TvSection>
        <TvPackagesSection data={data}/>
        <TvPremiumBar>
            <h3>Pakiety Premium do wyboru tylko razem z OPTIMUM lub PLATINUM:</h3>
        </TvPremiumBar>
        <TvPackagesSection optional data={data2}/>
        
    </>
    )
};

export default OnasPage