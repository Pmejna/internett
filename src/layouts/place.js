import React from 'react';
import styled from 'styled-components';

import Navigation from '../components/Navigation/Navigation';
import GlobalStyles from '../assets/styles/globalStyles';
import SEO from "../components/seo";

import Contact from '../components/Contact/Contact';
import Search from '../components/Search/Search';
import MainSlide from '../components/MainSlide/MainSlide';
import bgImage from '../assets/images/Map.jpg';
const MainContent = styled.main`

  /* margin-top: var(--nav-height); */
  /* visibility: hidden; */
`;


const PlaceWrapper = styled.section`
    width: 100vw;
    margin-top: 1rem;
    border-top: solid 2px red;
    border-bottom: solid 2px red;
`;

const PlaceTextElement = styled.div`

`;

const PlaceTextPackages = styled.div`

`;

const PlaceContact = styled.section`

`;

const Place = ({pageContext}) => {
    return (
        <>
            <MainContent>
            <MainSlide mainText={`Internet światłowodowy ${pageContext.place}`} image={bgImage}/>
            <Search />
                <PlaceWrapper>
                <PlaceTextElement>
                    <p>{pageContext.textMain}</p>
                    <PlaceTextPackages>
                        <h2>{`${pageContext.place} — pakiety na internet światłowodowy`}</h2>
                        <p>{pageContext.textPackages}</p>
                    </PlaceTextPackages>
                </PlaceTextElement>
                <h3>{pageContext.swiatlowod}</h3>
                <p>{pageContext.text}</p>
                </PlaceWrapper>  
                {pageContext.place ? 
                <PlaceContact>
                    <h4>Kontakt – Internet Światłowodowy {pageContext.place}</h4>
                    <p>{pageContext.textContact}</p>
                </PlaceContact>
                : 
                <section>
                    <h2>Kontakt w sprawie internetu światłowodowego</h2>
                    <p>Mamy nadzieję, że zauważyłeś, że jesteśmy pewni siebie i pewni sieci którą sukcesywnie tworzymy w Twojej okolicy od lat. Zapraszamy do kontaktu. Jesteśmy małą, lokalną polską firmą, która skupia się na naszych klientach w sposób indywidualny. Zapewniamy nie tylko najwyższą jakość łącza internetu światłowodowego, ale również indywidualną opiekę, która różni nas od wielkich dostawców tej samej technologii na rynku polskim.</p>
                </section>
                }
            </MainContent>
        </>
    )
};

export default Place