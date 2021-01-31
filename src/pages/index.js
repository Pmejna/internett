import React from "react"
import styled from 'styled-components';

import MainSlide from "../components/MainSlide/MainSlide";
import SEO from "../components/seo"

import {mainSlide, mainParagraph, boxSection, mainPageImages} from '../assets/texts/mainpage';
import VerticalSection from "../components/VerticalSection/VerticalSection";
import Lines01 from "../components/Lines/Lines01";

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
    <VerticalSection box_data={boxSection.box_data} box2_data={boxSection.box2_data}/>
    <Lines01 image={mainPageImages.lines2} alt="internett 2.0"/>
  </>
)
  }

export default IndexPage
