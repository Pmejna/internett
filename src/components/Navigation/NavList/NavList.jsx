import React, {useEffect, useRef, useState} from 'react';
import styled from 'styled-components';
import NavItem from '../NavItem/NavItem';
import {staggerReveal, staggerText, fadeInUp} from '../../../assets/animations/gsapAnimations';

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
    display: ${({responsive}) => responsive ? 'none' : 'flex'};
    flex-direction: ${({responsive}) => responsive ? 'column' : 'row'};
    justify-content: space-between;
    align-items: ${({responsive}) => responsive ? 'center' : null};
    list-style: none;
    flex-basis: 70%;

    @media (max-width: 1200px) {
        display: ${({responsive}) => responsive ? 'flex' : 'none'};
}
`;

const NavList = ({state, linkClicked, responsive}) => {

    let line1 = useRef(null);
    let line2 = useRef(null);
    let line3 = useRef(null);
    let line4 = useRef(null);
    let line5 = useRef(null);
    let line6 = useRef(null);
    let line7 = useRef(null);
    let line8 = useRef(null);
    
    useEffect(() => {
        if(state.clicked) {
            fadeInUp(line1, line2, line3, line4, line5, line6, line7, line8)
        }
    }, [state] 
    );

    return (
                    <NavUl responsive={responsive}>
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
                        <NavItem path="/pakiety"
                             text="Pakiety" 
                             linkClicked={linkClicked}
                             ref={el3 => (line3 = el3)}
                             />
                        <NavItem path="/dladomu"
                             text="Oferta dla domu" 
                             linkClicked={linkClicked}
                             ref={el4 => (line4 = el4)}
                             />
                        <NavItem path="/dlafirm"
                             text="Oferta dla firm" 
                             linkClicked={linkClicked}
                             ref={el5 => (line5 = el5)}
                             />
                        <NavItem path="/zasieg"
                             text="Zasięg" 
                             linkClicked={linkClicked}
                             ref={el6 => (line6 = el6)}
                             />
                        <NavItem path="#kontakt"
                             text="Kontakt" 
                             linkClicked={linkClicked}
                             ref={el7 => (line7 = el7)}
                             />
                        <NavItem path="/panelklienta"
                             text="Panel klienta" 
                             
                             linkClicked={linkClicked}
                             ref={el8 => (line8 = el8)}
                             />
                    </NavUl>
    )
};

export default NavList