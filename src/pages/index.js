import React from "react"
import styled from 'styled-components';

import MainSlide from "../components/MainSlide/MainSlide";
import SEO from "../components/seo"

import {mainSlide, mainParagraph, boxSection, mainPageImages} from '../assets/texts/mainpage';
import VerticalSection from "../components/VerticalSection/VerticalSection";
import Lines01 from "../components/Lines/Lines01";
import Button from "../components/Button/Button";

const SectionOffer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    text-align: center;
    margin-bottom: 2rem;
  }
  margin: 7rem 0;
`;

const SectionPackages = styled.section`
    background-color: var(--main-gray);
    

    div {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

  p {
    text-align: center;
    margin-bottom: 2rem;
  }
`;

const SectionPackagesText = styled.div`

`;

const IndexPage = () => { 
  const {mainText, subText, priceText, buttonText, aboveText} = mainSlide;
  return (
  <>
    <MainSlide 
      mainText={mainText} 
      subText={subText} 
      buttonText={buttonText} 
      aboveText={aboveText}
      priceText={priceText}
    />
    <section>
      <p>{mainParagraph}</p>
    </section>
    <Lines01 image={mainPageImages.lines1} alt="superszybki internet"/>
    <VerticalSection box_data={boxSection.box_data}/>
    <VerticalSection box2_data={boxSection.box2_data}/>
    <Lines01 image={mainPageImages.lines2} alt="internett 2.0"/>
    <SectionOffer>
      <h2>{boxSection.companyInternet_data.header}</h2>
      <p>{boxSection.companyInternet_data.paragraph}</p>
      <Button text='zobacz ofertę dla firm'/>
    </SectionOffer>
    <SectionPackages>
      <SectionPackagesText>
          <h2>{boxSection.internetPackages_Data.header}</h2>
          <p>{boxSection.internetPackages_Data.paragraph}</p>
      </SectionPackagesText>
      {/* <PackagesCards/> */}
    </SectionPackages>
  </>
)
  }

export default IndexPage
