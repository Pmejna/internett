import React, {useEffect, useState, useRef} from 'react';
import styled from 'styled-components';

import Hamburger from './Hamburger/Hamburger';
import NavList from './NavList/NavList';

import logoImg from '../../assets/images/Logo.svg';

const NavigationWrapper = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    height: var(--nav-height);
    width: 100vw;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
    color: rgb(0, 0, 0);
    padding: var(--main-padding);
    box-shadow: 0 -0.7rem 0.5rem 1rem rgba(155, 155, 155, 0.3);
    z-index: 98;

    @media (max-width: 1200px) {
        /* box-shadow: none; */
        /* background-color: transparent; */
    }
`;

const Logo = styled.img`
    width: 11rem;
    height: auto;
    background-color: transparent;
    z-index: 99;
`;



const Navigation = () => {
    
    // state for menu button
    const [state, setState] = useState({
        initial: false,
        clicked: null,
        menuName: "Menu",
    });

    // state for disabled button state
    const [disabled, setDisabled] = useState(false);    

    
    const handleMenuClick = () => {
        setState({clicked: false, menuName: "Menu"})
    };

    const handleMenu = () => {
        handleDisable();
        if (state.initial === false) {
            setState({
                initial: null,
                clicked: true,
                menuName: "Close"
            })
            console.log(1);
        }
        else if (state.clicked === true) {
            setState({
                clicked: !state.clicked,
                menuName: "Menu"
            })
            console.log(2);
        }
        else if (state.clicked === false) {
            setState(
                {
                    clicked: !state.clicked,
                    menuName: "Close"
                }
            )
            console.log(3);
        };
        
    };


    ////menu button disable toggle

    const handleDisable = () => {
        setDisabled(!disabled);
        setTimeout(() => {
            setDisabled(false);
        }, 1200);
    };

    return (
        
            <NavigationWrapper>
                <Logo src={logoImg}/>
                <NavList state={state} linkClicked={handleMenuClick}/>
                <Hamburger disabled={disabled} clicked={handleMenu} text={state.menuName}/>
            </NavigationWrapper>
    )
};

export default Navigation