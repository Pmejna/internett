import React, {useEffect, useRef} from 'react';
import styled from 'styled-components';
import Link from 'gatsby';
import NavItem from '../NavItem/NavItem';
import gsap from 'gsap';

const NavListWrapper = styled.div`
    flex-basis: 70%;
    padding-right: 5rem;
    

    @media (max-width: 1200px) {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        width: 100vw;
        height: 100vh;
        padding: 0;
        z-index: 2;
        display: none;
        /* display: ${({open}) => open ? "block" : "none"}; */

        ul {
            flex-direction: column;
        }
        
    }
`;

const NavContent = styled.div`
    @media (max-width: 1200px) {
        position: relative;
        height: 100%;
        width: 100%;
        background-color: var(--main-red);
        overflow: hidden;
        z-index: 4;
}
`;

const NavUl = styled.ul`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    list-style: none;

    @media (max-width: 1200px) {
        justify-content: center;
        align-items: center;
}
`;

const NavNav = styled.nav`
    width: 100%;
    height: 100%;

    @media (max-width: 1200px) {
        display: flex;
        justify-content: center;
        align-items: center;

        ul {
            height: 60%;
        }
    }
`;

const NavSecondaryBox = styled.div`
    @media (max-width: 1200px) {
    background-color: black;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    position: fixed;
    height: 100%;
    width: 100%;
    z-index: 1;
    }
`;
    
const NavList = ({state, linkClicked}) => {

    let menu = useRef(null);
    let revealMenu = useRef(null);
    let revealMenuBg = useRef(null);
    let line1 = useRef(null);
    let line2 = useRef(null);
    let line3 = useRef(null);
    let line4 = useRef(null);
    let line5 = useRef(null);
    let line6 = useRef(null);
    
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
                duration: 0.8,
                css: {display: "block"}
            } );
            gsap.to([revealMenuBg, revealMenu], {
                duration: 0.8,
                opacity: 1,
                height: "100%",
                ease: "power3.inOut",
                stagger: {
                    amount: 0.07
                }
            });
        }
    } 
    )
    return (
        <NavListWrapper open={state.clicked} ref={el => (menu = el)}>
            <NavContent ref={el => (revealMenu = el)}>
                <NavNav>
                    <NavUl>
                        <NavItem path="/" 
                            text="Strona Główna" 
                            linkClicked={linkClicked}
                            ref={el => (revealMenu = el)}
                            />
                        <NavItem path="/onas"
                             text="O nas" 
                             linkClicked={linkClicked}
                             ref={el => (line1 = el)}
                             />
                        <NavItem path="/dladomu"
                             text="Oferta dla domu" 
                             linkClicked={linkClicked}
                             ref={el => (line2 = el)}
                             />
                        <NavItem path="/dlafirm"
                             text="Oferta dla firm" 
                             linkClicked={linkClicked}
                             ref={el => (line3 = el)}
                             />
                        <NavItem path="/zasieg"
                             text="Zasięg" 
                             linkClicked={linkClicked}
                             ref={el => (line4 = el)}
                             />
                        <NavItem path="/kontakt"
                             text="Kontakt" 
                             linkClicked={linkClicked}
                             ref={el => (line5 = el)}
                             />
                        <NavItem path="/panelklienta"
                             text="Panel klienta" 
                             linkClicked={linkClicked}
                             ref={el => (line6 = el)}
                             />
                    </NavUl>
                </NavNav>
            </NavContent>
            <NavSecondaryBox ref={el => (revealMenuBg = el)}/>
        </NavListWrapper>
    )
};

export default NavList