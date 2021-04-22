import React, {useEffect, useRef} from 'react';
import styled from 'styled-components';

import Hamburger from '../Hamburger/Hamburger';
import NavList from '../NavList/NavList';

import logoImg from '../../../assets/images/Logo.svg';

const NavHorizontalWrapper = styled.nav`
    position: fixed;
    top: -6rem;
    left: 0;
    height: var(--nav-height);
    width: 100vw;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: ${({clicked}) => clicked ? 'transparent' : '#fff'};
    color: rgb(0, 0, 0);
    padding: var(--main-padding);
    box-shadow: ${({clicked}) => clicked ? 'transparent' : '0 -0.7rem 0.5rem 1rem rgba(155, 155, 155, 0.3)'};
    z-index: 98;
    opacity: 1;
    transition: top 0.3s ease-in-out;
    transform: skewX(6deg);

    &.active {
        top: 0;
        opacity: 1;
        transform: skewX(0);
    }

    @media (max-width:900px) {
        padding: 1rem 10vw;
    }
`;

const Logo = styled.img`
    width: 11rem;
    height: auto;
    background-color: transparent;
    z-index: 100;
`;

const NavHorizontal = ({state, handleMenuClick, clicked, disabled}) => {

    let navHorizontal = useRef(null);

    useEffect(() => {
        let prevScroll = window.pageYOffset;
        const checkScroll = () => {
            setTimeout(() => {
                let currentScroll = window.pageYOffset;
                if (navHorizontal != null && !state.clicked) {
                    if (prevScroll < currentScroll && currentScroll > 50) {
                        navHorizontal.classList.remove('active');
                        prevScroll = currentScroll;
                    }
                    else if (prevScroll > currentScroll) {
                        prevScroll = currentScroll;
                        navHorizontal.classList.add('active');
                    }
                }                
            }, 200);
            
        };
        window.addEventListener('scroll', checkScroll);
    });

    return (
        <NavHorizontalWrapper ref={el => navHorizontal = el} className='active' clicked={state.clicked}>
            <a href="/">
                <Logo src={logoImg}/>
            </a>
            <NavList state={state} linkClicked={handleMenuClick}/>
            <Hamburger disabled={disabled} clicked={clicked} text={state.menuName}/>
        </NavHorizontalWrapper>
    )
};

export default NavHorizontal