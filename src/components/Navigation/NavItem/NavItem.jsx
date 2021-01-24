import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

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
        }
    }

    @media (max-width: 800px) {
        a { font-size: 3.6rem;}
    }
`;

const NavItem = ({path, text, linkClicked}) => {
    return (
        <NavItemWrapper>
            <Link to={path} onClick={linkClicked}>{text}</Link>
        </NavItemWrapper>
    )
};

export default NavItem