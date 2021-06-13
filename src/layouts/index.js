import React, {useRef, useEffect} from "react";
import styled from 'styled-components';
import {TweenMax} from 'gsap';

import Navigation from '../components/Navigation/Navigation';
import GlobalStyles from '../assets/styles/globalStyles';
import SEO from "../components/seo";

import Contact from '../components/Contact/Contact';
import Search from '../components/Search/Search';
import Arrow from '../components/Arrow/Arrow';

const MainContent = styled.main`
  /* margin-top: var(--nav-height); */
  position: relative;
`;





const AlternativeLayout = ({pageContext, children}) => {
  let app = useRef(null);
  console.log(pageContext);
  return (
  <>
    <GlobalStyles />
    <Navigation />
    <MainContent>
      {children}  
    <Contact zasieg={true}/>
    <Arrow />
    </MainContent>
  </>
)};


const MainLayout = ({children}) => {
  let app = useRef(null);

  useEffect(() => {
    TweenMax.to(app, 0, {css: {visibility: 'visible'}})
  })
  return (
  <>
    <GlobalStyles />
    <Navigation />
    <MainContent ref={el => app = el}>
      {children}
    <Contact />
    <Arrow />
    </MainContent>
  </>
)};

export default ({ children, pageContext }) => {
  if (pageContext.layout === "zasieg") {
    return <AlternativeLayout>{children}</AlternativeLayout>
  }
  return <MainLayout>{children}</MainLayout>
}