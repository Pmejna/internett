import React from 'react';
import styled from 'styled-components';
import {Link} from 'gatsby';

const ButtonWrap = styled.button`
    margin-top: 2rem;
    background-color: ${({bgColor}) => bgColor ? bgColor : 'var(--main-red)'};
    color: white;
    border: none;
    box-shadow: none;
    cursor: pointer;
    overflow: hidden;

    a {
        display: block;
        width: 100%;
        height: 100%;
        position: relative;
        z-index: 0;
        padding: 1rem 1.8rem;
        font-size: 1.8rem;
        max-width: 250px;
        text-decoration: none;
        color: white;
        
        &::before{
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        opacity: 0;
        height: 100%;
        background-color: ${({hoverColor}) => hoverColor ? hoverColor : 'var(--main-dark)'};
        transform: scale3d(0.7, 1, 1);
        transition: ease-in-out .3s;
        z-index: -1;
    }

    &:hover {
        ::before {
            transform: translate3d(0, 0, 0) scale3d(1, 1, 1);     
            opacity: 1;   }
    }
    }
`;

const Button = ({text, className, link, bgColor, hoverColor}) => {
    return (
        <ButtonWrap className={className} bgColor={bgColor} hoverColor={hoverColor}>
            <Link to={link}>{text ? text : 'więcej'}</Link>
        </ButtonWrap>
    )
};

export default Button