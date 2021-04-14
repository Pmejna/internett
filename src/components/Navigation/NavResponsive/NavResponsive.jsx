import React, {useRef, useEffect} from 'react';
import styled from 'styled-components';
import gsap from 'gsap';
import {staggerReveal, staggerText, fadeInUp} from '../../../assets/animations/gsapAnimations';

import NavList from '../NavList/NavList';

const NavResponsiveWrapper = styled.nav`
    display: none;
`;

const NavContent = styled.div`
    background-color: var(--main-red);
    z-index: 97;
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const NavBackground = styled.div`
    @media (max-width: 1200px) {
    background-color: #000;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    position: fixed;
    height: 100%;
    width: 100%;
    z-index: 96;
    }
`;

const NavResponsive = ({state, linkClicked}) => {

    let menu = useRef(null);
    let revealMenu = useRef(null);
    let revealMenuBg = useRef(null);
    let navListMenu = useRef(null);

    useEffect(() => {
        if(state.clicked === false) {
            //close our menu
            gsap.to([revealMenu, revealMenuBg], {
                duration: 0.8,
                height: 0,
                ease: "power3.inOut",
                stagger: {
                    amount: 0.07
                }
            });
            gsap.to(menu, {
                duration: 0.8,
                css: {display: "none"}
            } )
        }
        else if (
            state.clicked === true ||
            (state.clicked === true && state.initial === null)
        ) {
            // open menu
            gsap.to(menu, {
                duration: 0,
                css: {display: "block"}
            } );
            gsap.to([revealMenuBg, revealMenu], {
                duration: 0,
                opacity: 1,
                height: "100%",
            });
            staggerReveal(revealMenuBg, revealMenu);
        }
    }, [state] 
    );

    return (
        <NavResponsiveWrapper open={state.clicked} ref={el => (menu = el)}>
            <NavContent ref={el => (revealMenu = el)}>
                <NavList responsive state={state} ref={el => (navListMenu = el)} linkClicked={linkClicked}/>
            </NavContent >
            <NavBackground ref={el => (revealMenuBg = el)}></NavBackground>
        </NavResponsiveWrapper>
        
    )
};

export default NavResponsive;