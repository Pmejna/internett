import React from 'react';
import styled from 'styled-components';

const HamburgerWrapper = styled.button`
    width: 4rem;
    height: 1.8rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    display: none;
    z-index: 99;
    background-color: transparent;
    border: none;
    font-size: 1.5rem;
    font-weight: 600;
    text-transform: uppercase;

    @media (max-width: 1200px) {
        display: block;
    }
`;

const Hamburger = ({text, clicked, disabled}) => {
    return (
        <HamburgerWrapper onClick={clicked} disabled={disabled}>
            {text}
        </HamburgerWrapper>
    )
};

export default Hamburger