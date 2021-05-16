import React from 'react';
import styled from 'styled-components';
import MainSlide from '../components/MainSlide/MainSlide';
import VerticalSection from '../components/VerticalSection/VerticalSection';
import bgImage from '../assets/images/DlaDomu.jpeg';
import lines1 from '../assets/images/Group 15.png';
import Lines01 from "../components/Lines/Lines01";
import fibreImg from '../assets/images/fibre001.jpeg';
import CompanyCards from '../components/CompanyCards/CompanyCards';
import {data as dataCompanies}  from '../assets/texts/dlaFirmText';
import HeadSection from '../components/HeadSection/HeadSection';
import {data} from '../assets/texts/dlaDomuText';
import Button from '../components/Button/Button';

// const HeadSection = styled.section`
//     padding: var(--main-padding);
//     margin-bottom: 4rem;
//     h2 {
//         margin-top: 3rem;
//     }
//     h2,p {
//         text-align: center;
//     }

//     @media (max-width: 780px) {
//         padding: 2rem 10vw;

//         h2, p {
//             text-align: left;
//         }
//     }
// `;

const FibreSection = styled.section`
    width: 100%;
    height: auto;
    padding: 0;
    margin-bottom: 8rem;

    h2 {
        text-align: center;
        padding: var(--main-padding);
    }

    @media (max-width: 780px) {
        h2 {
            padding: 2rem 10vw;
        }
    }
`;
const FibreImageSection = styled.section`
    width: 100%;
    min-height: 380px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url(${fibreImg});
    background-size: 100%;
    color: #fff;
    padding-top: 0;

    p {
        text-align: center;
    }

    @media (max-width: 780px) {
        min-height: 620px;
        padding: 2rem 10vw;
        align-items: flex-start;
        background-size: auto;
        background-repeat: no-repeat;
    }
`;

const BarWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    flex-basis: 500px;

    @media (max-width: 780px) {
        padding: 1rem 10vw;
        flex-direction: column;
        height: 80%;
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

    @media (max-width: 780px) {
        padding: 1rem 10vw;
        min-height: 160px;
    }
`;




const DlaDomuPage = () => {
    return (
        <>
            <MainSlide mainText='Internet dla domu i firm' image={bgImage}/>
            <HeadSection
                header="Internet światłowodowy dla domu"
                paragraph={`Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores.`}
            />
            {/* <Lines01 image={lines1} alt="superszybki internet"/> */}
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
            <HeadSection
                header='Oferta internetu dla klientów biznesowych'
                paragraph='Dla płynności informacji w firmie oraz między kontrahentami ważna jest bezstresowa oraz niezawodna komunikacja. Aby ta taka była potrzebna jest niezawodna infrastruktura techniczna, która będzie w stanie zapewnić możliwie jak najstabilniejsze łącze do sieci internet.'>
            </HeadSection>
            {/* <VerticalSection box_data={dataCompanies.box_data} />
            <VerticalSection box2_data={dataCompanies.box2_data}/> */}
            <CompanyCards />
        </>
    )
};

export default DlaDomuPage