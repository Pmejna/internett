import React from 'react';
import styled from 'styled-components';
import MainSlide from '../components/MainSlide/MainSlide';
import bgImage from '../assets/images/Map.jpg';

import locationsData from '../assets/texts/miejscowosci.json';


const HeadSection = styled.section`
    padding: var(--main-padding);
    margin-bottom: 4rem;
    margin-top: 4rem;
    p {
        text-align: center;
    }
`;

const SearchSection = styled.section`

`;

const SearchBar = styled.div`
    width: 100%;
    height: 6rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 3rem;
    background-color: var(--main-red);
    position: relative;

    input {
        display: block;
        border: 0 transparent;
        border-radius: 0.4rem;
        padding: 1rem 2.2rem;
    }

    h3 {
        color: #fff;
        font-size: 1.3rem;
        text-transform: uppercase;
    }
`;

const SearchBox = styled.div`
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    min-height: 5rem;
    border: 2px solid var(--main-red);
`;

const SearchWrapper = styled.div`

`;

const SearchOverviewText = styled.div`

`;

const ZasiegPage = () => {
    return (
        <>
            <MainSlide mainText='Internet światłowodowy, zasięg' image={bgImage}/>
            <HeadSection>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores. </p>
            </HeadSection>
            <SearchSection>
                <SearchBar>
                    <input type="text" placeholder="Wyszukaj..."></input>
                    <h3>Wyszukiwarka zasięgu</h3>
                    <SearchBox>

                    </SearchBox>
                </SearchBar>
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