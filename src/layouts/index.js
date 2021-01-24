import React from "react";
import styled from 'styled-components';

import Navigation from '../components/Navigation/Navigation';
import GlobalStyles from '../assets/styles/globalStyles';
import SEO from "../components/seo";

const MainContent = styled.main`
  margin-top: var(--nav-height);
`;

const MainLayout = ({children}) => (
  <>
    <GlobalStyles />
    <Navigation />
    <MainContent>
      <h2>Layout</h2>
      {children}  
    </MainContent>
  </>
)

export default MainLayout