import React from 'react';
import styled from 'styled-components';
import MainSlide from '../components/MainSlide/MainSlide';
import HeadSection from '../components/HeadSection/HeadSection';
import bgImage from '../assets/images/zasieg-image.jpg';
import Search from '../components/Search/Search';
import locationsData from '../assets/texts/miejscowosci.json';



const SearchSection = styled.section`

`;

const SearchWrapper = styled.div`

`;

const SearchOverviewText = styled.div`

`;

const ZasiegPage = ({pageContext}) => {
    console.log(pageContext);
    return (
        <>
            <MainSlide mainText='Internet światłowodowy, zasięg' image={bgImage}/>
            <HeadSection 
                paragraph='Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores. '>
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
            <section>
                <h2>Kontakt w sprawie internetu światłowodowego</h2>
                <p>Mamy nadzieję, że zauważyłeś, że jesteśmy pewni siebie i pewni sieci którą sukcesywnie tworzymy w Twojej okolicy od lat. Zapraszamy do kontaktu. Jesteśmy małą, lokalną polską firmą, która skupia się na naszych klientach w sposób indywidualny. Zapewniamy nie tylko najwyższą jakość łącza internetu światłowodowego, ale również indywidualną opiekę, która różni nas od wielkich dostawców tej samej technologii na rynku polskim.</p>
            </section>
        </>
    )
};

export default ZasiegPage