import React, {useEffect, useState, useRef} from 'react';
import styled from 'styled-components';
import arrowIcon from '../../assets/images/arrow-back.svg';

const ArrowWrapper = styled.figure`
  position: fixed;
  display: none;
  bottom: 20vh;
  right: 5vw;
  z-index: 10;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.3s ease-in-out;

  &:hover {
      transform: scale(1.17);
  } 

  img {
  border-radius: 12px;
    box-shadow: var(--main-shadow);
    width: 6rem;
    height: auto;
  }

  @media (max-width: 760px) {
    right: 10vw;
    bottom: 14vh;
  }
`;

const Arrow = () => {
    const [state, setState] = useState(false);
    let arrow = useRef(null);
    let isVisible = false;

    const checkIsBottomWindow = () => {
        let windowHght = window.innerHeight;
        let docHght = document.body.clientHeight;
        let scrollTp = document.documentElement.scrollTop;

        if ((scrollTp > (docHght-(1.2*windowHght)))) {
            console.log(isVisible);
            if (!isVisible) {
                arrow.style.display = "block";
                isVisible = true;
            }
        }
        else if ((scrollTp <= (docHght-(1.2*windowHght))) ) {
            if (isVisible) {
                    isVisible = false;
                    arrow.style.display = "none";
                }
        }
        
    }

    const scrollToTop = () => {
        window.scrollTo(0, 0);
    }

    useEffect(() => {
        document.addEventListener('scroll', checkIsBottomWindow);
        return () => document.removeEventListener('scroll', checkIsBottomWindow);
    })
    return (
        <ArrowWrapper ref={el => (arrow = el)} state onClick={scrollToTop}>
            <img src={arrowIcon} />
        </ArrowWrapper>
    )
};

export default Arrow