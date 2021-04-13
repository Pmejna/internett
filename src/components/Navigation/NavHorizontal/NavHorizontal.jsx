import React from 'react';
import styled from 'styled-components';

import Hamburger from '../Hamburger/Hamburger';
import NavList from '../NavList/NavList';

import logoImg from '../../../assets/images/Logo.svg';

const NavHorizontalWrapper = styled.nav`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

const Logo = styled.img`
    width: 11rem;
    height: auto;
    background-color: transparent;
    z-index: 100;
`;

const NavHorizontal = ({state, handleMenuClick, clicked, disabled}) => {


    return (
        <NavHorizontalWrapper>
            <Logo src={logoImg}/>
            <NavList state={state} linkClicked={handleMenuClick}/>
            <Hamburger disabled={disabled} clicked={clicked} text={state.menuName}/>
        </NavHorizontalWrapper>
    )
};

export default NavHorizontal