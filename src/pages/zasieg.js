import React from 'react';
import {Link} from 'gatsby';
import styled from 'styled-components';
import MainSlide from '../components/MainSlide/MainSlide';
import HeadSection from '../components/HeadSection/HeadSection';
import bgImage from '../assets/images/zasieg-image.jpg';
import Search from '../components/Search/Search';
import locationsData from '../assets/texts/miejscowosci.json';
import PageSEO from '../components/PageSEO';
import { zasiegSeo } from '../assets/texts/seoText';


const ListContainer = styled.ul`
    margin-top: 3rem;
    display: grid;
    grid-template-columns: repeat(auto-fill, 200px);
    list-style: square;
    margin-left: 3rem;
    margin-right: 3rem;

    @media(max-width: 760px) {
        margin: 3rem 0;
        a {
            font-size: 2rem;
        }
    }

    li {
       &>a {
            text-decoration: none;
            font-weight: 500;
            color: #000;
            &:hover {
                color: red;
            }
       }
    }
`;

const ZasiegPage = ({pageContext}) => {
    console.log(pageContext);
    return (
        <>
            <PageSEO title={zasiegSeo.title} description={zasiegSeo.description}/>
            <MainSlide mainText='Internet światłowodowy, zasięg' image={bgImage}/>
            <HeadSection 
                header={`Mapa zasięgu`}
                paragraph='Przedstawiamy mapę zasięgu Internetu światłowodowego dla domu oraz dla firm. Wybierając dowolny oferowany pakiet Internetu światłowodowego masz pewność, że otrzymujesz najlepszą jakość i prędkość usługi w stosunku do proponowanej ceny. Jesteśmy liderem wśród dostawców tego typu usług, dlatego oferowane  przez nas rozwiązania idealnie pasują do potrzeb użytkowników korzystających z Internetu światłowodowego. Miejscowości w jakich oferujemy usługi internetowe to:'
            >
                <ListContainer>
                    {
                         locationsData.map(location => {
                             return (
                             <li key={location.place}>
                                 <Link to={'/zasieg/'+location.link}>
                                     {location.place}
                                </Link>
                            </li>
                             )
                         })
                    }
                </ListContainer>
            </HeadSection>
            <Search/>
            {/* <SearchSection>
                <SearchWrapper>
                    <SearchOverviewText>
                    
                    </SearchOverviewText>
                    <figure>
                        <img></img>
                    </figure>
                </SearchWrapper>
                <p></p>
                
            </SearchSection> */}
            <section id="kontakt">
                <h2>Kontakt w sprawie internetu światłowodowego</h2>
                <p>Mamy nadzieję, że zauważyłeś, że jesteśmy pewni siebie i pewni sieci którą sukcesywnie tworzymy w Twojej okolicy od lat. Zapraszamy do kontaktu. Jesteśmy małą, lokalną polską firmą, która skupia się na naszych klientach w sposób indywidualny. Zapewniamy nie tylko najwyższą jakość łącza internetu światłowodowego, ale również indywidualną opiekę, która różni nas od wielkich dostawców tej samej technologii na rynku polskim.</p>
            </section>
        </>
    )
};

export default ZasiegPage