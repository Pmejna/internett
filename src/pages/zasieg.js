import React from 'react';
import styled from 'styled-components';
import MainSlide from '../components/MainSlide/MainSlide';
import HeadSection from '../components/HeadSection/HeadSection';
import bgImage from '../assets/images/Map.jpg';
import locationsData from '../assets/texts/miejscowosci.json';



const SearchSection = styled.section`

`;

const SearchWrapper = styled.div`

`;

const SearchOverviewText = styled.div`

`;

const ZasiegPage = () => {
    return (
        <>
            <MainSlide mainText='Internet światłowodowy, zasięg' image={bgImage}/>
            <HeadSection 
                paragraph='Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores. '>
            </HeadSection>
            <SearchSection>
                <SearchWrapper>
                    <SearchOverviewText>
                    
                    </SearchOverviewText>
                    <figure>
                        <img></img>
                    </figure>
                </SearchWrapper>
                <p></p>
                
            </SearchSection>
        </>
    )
};

export default ZasiegPage