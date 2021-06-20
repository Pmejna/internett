import React from 'react';
import styled from 'styled-components';

import Navigation from '../components/Navigation/Navigation';
import GlobalStyles from '../assets/styles/globalStyles';

import Contact from '../components/Contact/Contact';
import Search from '../components/Search/Search';
import MainSlide from '../components/MainSlide/MainSlide';
import PackagesUniversalCard from '../components/PackagesUniversalCard/PackagesUniversalCard';
import bgImage from '../assets/images/zasieg-bg.png';
import PageSEO from '../components/PageSEO';
const MainContent = styled.main`

  /* margin-top: var(--nav-height); */
  /* visibility: hidden; */
`;

const ultraPackageText = `Szanowni Państwo, bardzo miło nam poinformować, że stworzyliśmy czwarty, atrakcyjny pakiet dla najbardziej wymagających użytkowników. Pakiet ULTRa charakteryzuje się maksymalną prędkością pobierania i wysyłania danych przez nasz światłowód. Polecamy go każdej dużej firmie oraz użytkownikom, których praca polega na operowaniu w projektach wymagających przesyłu ogromnych danych, lub ciągłej pracy wielu urządzeń w trybie online. W dobie pandemii komunikacja między firmami przeniosła się do internetu. Pakiet ULTRA spełni wszelkie oczekiwania każdego organizatora konferencji, briefiengów czy handlu online zapewniając stabilne połączenie, oraz co najważniejsze - bezstratną jakość audio i video, która jest ULTRA ważna w bezpośredniej rozmowie z najważniejszymi klientami. Oczywiście nasza oferta jest również aktualna dla gospodarstw jednorodzinnych. Pakiet ULTRA naszej firmy jest inwestycją na lata, która zapewni bezstratny pobór danych przy jednoczesnym użytkowaniu połączenia przez całą rodzinę. Wybór pakietu ULTRa zapewni spokój oraz najwyższą jakość działania przy oglądaniu VOD, streamingu letsplay, czy pracy z wykorzystaniem wideokonferencji. Skontaktuj się z naszym działem handlowym aby poznać szczegóły naszego najmocniejszego punktu w ofercie. 
`;


const PlaceWrapper = styled.section`
    width: 100vw;
    margin-top: 1rem;
    border-top: solid 2px red;
    border-bottom: solid 2px red;
`;
const MainImage = styled.div`   
    width: 100%;
    height: 100%;
    iframe {
        min-width: auto;
        min-height: auto;
        width: 100%;
        height: 100%;
        @media(max-width: 1199px) {
            width: 100%;
            height: 480px;
            margin: 3rem 0;
        }
    }
`;

const PlaceTextElement = styled.div`

`;

const PlaceName = styled.h2`
    position: relative;
    display: inline-block;
    &::before {
        content: "";
        position: absolute;
        bottom: -0.3rem;
        left: 0;
        width: 100%;
        height: 6px;
        background-color: red;
    }
`;

const PlaceTextTopContainer = styled.div`
    display: grid;
    grid-template-rows: minmax(400px, 500px);
    grid-template-columns: 1fr 1fr;
    margin-bottom: 5rem;

    @media(max-width: 1199px) {
        grid-template-columns: 1fr;
        grid-template-rows: auto;
    }
`;

const PlaceTextPackages = styled.div`

`;

const PlaceContact = styled.section`

`;
const PackageCardsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    @media(min-width: 1600px) {
        align-items: center;
    }
`;

const Place = ({pageContext}) => {
    return (
        <>
            <PageSEO title={`${pageContext.place} internet światłowodowy i telewizja`} description={pageContext.textMeta} />
            <MainContent>
            <MainSlide mainText={`Internet światłowodowy ${pageContext.place}`} image={bgImage}/>
                <Search /> 
                <PlaceWrapper>
                <PlaceTextElement>
                    <PlaceTextTopContainer>
                        <div>
                            <PlaceName>{pageContext.place}</PlaceName>
                            <p>{pageContext.textMain}</p>
                        </div>
                        <div>
                            <MainImage>
                                <iframe src="https://www.google.com/maps/d/u/7/embed?mid=1q4OZkUGExZT9NHAGoYcZFLtIiZ5M2gF2"></iframe>
                            </MainImage>
                        </div>

                    </PlaceTextTopContainer>
                    <PlaceTextPackages>
                        <h2>{`${pageContext.place} — pakiety na internet światłowodowy`}</h2>
                        <p>{pageContext.textPackages}</p>
                    </PlaceTextPackages>
                </PlaceTextElement>
                <h3>{pageContext.swiatlowod}</h3>
                <p>{pageContext.text}</p>
                <PackageCardsWrapper>
                    <PackagesUniversalCard place={pageContext.place} packageName="Lekki" color="#a1a1a1" speed="100MB/S" price="59" text={pageContext.textPackage1}/>
                    <PackagesUniversalCard place={pageContext.place} packageName="Standard" color="#2784FE" speed="300MB/S" price="79" text={pageContext.textPackage2}/>
                    <PackagesUniversalCard place={pageContext.place} packageName="Premium" color="" speed="500MB/S" price="100" text={pageContext.textPackage3}/>
                    <PackagesUniversalCard place={pageContext.place} packageName="Ultra" color="#A927FE" speed="1000MB/S" price="149" text={ultraPackageText}/>
                </PackageCardsWrapper>
                </PlaceWrapper> 
                {pageContext.place ? 
                <PlaceContact>
                    <h2>Kontakt – Internet Światłowodowy {pageContext.place}</h2>
                    <p>{pageContext.textContact}</p>
                </PlaceContact>
                : 
                <section id="kontakt">
                    <h2>Kontakt w sprawie internetu światłowodowego</h2>
                    <p>Mamy nadzieję, że zauważyłeś, że jesteśmy pewni siebie i pewni sieci którą sukcesywnie tworzymy w Twojej okolicy od lat. Zapraszamy do kontaktu. Jesteśmy małą, lokalną polską firmą, która skupia się na naszych klientach w sposób indywidualny. Zapewniamy nie tylko najwyższą jakość łącza internetu światłowodowego, ale również indywidualną opiekę, która różni nas od wielkich dostawców tej samej technologii na rynku polskim.</p>
                </section>
                }
            </MainContent>
        </>
    )
};

export default Place