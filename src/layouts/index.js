import React, {useRef, useEffect} from "react";
import styled from 'styled-components';
import {TweenMax} from 'gsap';

import Navigation from '../components/Navigation/Navigation';
import GlobalStyles from '../assets/styles/globalStyles';
import SEO from "../components/seo";

import Contact from '../components/Contact/Contact';
import Search from '../components/Search/Search';

const MainContent = styled.main`
  /* margin-top: var(--nav-height); */
  visibility: hidden;
`;



const AlternativeLayout = ({children}) => {
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
    <Search />
    <Contact />
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
    </MainContent>
  </>
)};

export default ({ children, pageContext }) => {
  if (pageContext.layout === "zasieg") {
    return <AlternativeLayout>{children}</AlternativeLayout>
  }
  return <MainLayout>{children}</MainLayout>
}