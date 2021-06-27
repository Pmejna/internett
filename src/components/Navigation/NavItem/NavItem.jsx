import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import gsap from 'gsap';

const NavItemWrapper = styled.li`
    a {
        text-decoration: none;
        /* text-transform: uppercase; */
        color: rgb(0, 0, 0)
    }
    @media (max-width: 1200px) {
        a { 
            font-size: 6rem;
            color: #fff;
            font-weight: 700;
            display: block;
            
            &:hover {
                color: #000;
            }
        }
    }

    @media (max-width:760px) {
        a { font-size: 2.6rem;}
    }
`;

const NavItem = React.forwardRef( (props, ref) => {
    const handleHover = (e) => {
        gsap.to(e.target, {
            duration: 0.3,
            y: 4,
            skewX: 5,
            ease: 'Power3.inOut'
        })
        console.log(e.target);
    };

    const handleHoverExit = (e) => {
        gsap.to(e.target, {
            duration: 0.3,
            y: -4,
            skewX: 0,
            ease: 'Power3.inOut'
        })
    };

    return (
        <NavItemWrapper ref={ref}>
            <Link to={props.path} onClick={props.linkClicked} onMouseEnter={(e) => handleHover(e)} onMouseOut={(e) => handleHoverExit(e)}>{props.text}</Link>
            {console.log(ref)}
        </NavItemWrapper>
    )
}); 

export default NavItem