import React, {useEffect, useRef, useState} from 'react';
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
        z-index: 98;
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
        z-index: 98;
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
    z-index: 97;
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
    let line7 = useRef(null);
    const size = useWindowSize();
    
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
            // staggerText(line1, line2);
            fadeInUp(line1, line2, line3, line4, line5, line6, line7)
        }
    }, [state] 
    );

    useEffect(() => {
        
    }, [])

    const staggerReveal = (node1, node2) => {
        gsap.from([node1, node2], {
            duration: 0.8,
            height: 0,
            transformOrigin: 'right top',
            skewY: 2,
            ease: 'power3.inOut',
            stagger: {
                amount: 0.1
            }
        })
    };

    const fadeInUp = (node1, node2, node3, node4, node5, node6, node7) => {
        gsap.from([node1, node2, node3, node4, node5, node6, node7], {
            y: 60,
            duration: 1,
            delay: 0.6,
            opacity: 0,
            ease: 'power3.inOut',
            stagger: {
                amount: 0.6
            }
        })
    };

    const staggerText = (node1, node2, node3, node4, node5, node6, node7) => {
        gsap.from([node1, node2, node3, node4, node5, node6, node7], {
            duration: 0.8,
            y: 100,
            delay: 0.1,
            ease: 'power3.inOut',
            stagger: {
                amount: 0.2
            }
        })
    };

    return (
        <NavListWrapper open={state.clicked} ref={el => (menu = el)}>
            <NavContent ref={el => (revealMenu = el)}>
                <NavNav>
                    <NavUl>
                        <NavItem path="/"
                            text="Strona Główna" 
                            linkClicked={linkClicked}
                            ref={el => (line1 = el)}
                            />
                        <NavItem path="/onas"
                             text="O nas" 
                             linkClicked={linkClicked}
                             ref={el2 => (line2 = el2)}
                             />
                        <NavItem path="/dladomu"
                             text="Oferta dla domu" 
                             linkClicked={linkClicked}
                             ref={el3 => (line3 = el3)}
                             />
                        <NavItem path="/dlafirm"
                             text="Oferta dla firm" 
                             linkClicked={linkClicked}
                             ref={el4 => (line4 = el4)}
                             />
                        <NavItem path="/zasieg"
                             text="Zasięg" 
                             linkClicked={linkClicked}
                             ref={el5 => (line5 = el5)}
                             />
                        <NavItem path="/kontakt"
                             text="Kontakt" 
                             linkClicked={linkClicked}
                             ref={el6 => (line6 = el6)}
                             />
                        <NavItem path="/panelklienta"
                             text="Panel klienta" 
                             linkClicked={linkClicked}
                             ref={el7 => (line7 = el7)}
                             />
                    </NavUl>
                </NavNav>
            </NavContent>
            <NavSecondaryBox ref={el => (revealMenuBg = el)}/>
        </NavListWrapper>
    )
};

function useWindowSize() {
    // Initialize state with undefined width/height so server and client renders match
    // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
    const [windowSize, setWindowSize] = useState({
      width: undefined,
      height: undefined,
    });
  
    useEffect(() => {
      // Handler to call on window resize
      function handleResize() {
        // Set window width/height to state
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }
      
      // Add event listener
      window.addEventListener("resize", handleResize);
      
      // Call handler right away so state gets updated with initial window size
      handleResize();
      
      // Remove event listener on cleanup
      return () => window.removeEventListener("resize", handleResize);
    }, []); // Empty array ensures that effect is only run on mount
  
    return windowSize;
  };

export default NavList