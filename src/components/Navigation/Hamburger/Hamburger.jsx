import React from 'react';
import styled from 'styled-components';

const HamburgerWrapper = styled.button`
    width: 2rem;
    height: 1.8rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    display: none;
    z-index: 3;
    background-color: transparent;
    border: none;

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