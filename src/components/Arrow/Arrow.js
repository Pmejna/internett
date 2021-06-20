import React, {useEffect, useState, useRef} from 'react';
import styled from 'styled-components';
import arrowIcon from '../../assets/images/arrow-back.svg';

const ArrowWrapper = styled.div`
  position: fixed;
  display: none;
  bottom: 20vh;
  right: 5vw;
  z-index: 10;
  width: 110px;
  height: 70px;
  cursor: pointer;
  transition: 0.3s ease-in-out;
  background-color: #ff0202;

  flex-direction: column;
  justify-content: center;
  align-items: center;

  &:hover {
      transform: scale(1.17);
  } 

  img {
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
                arrow.style.display = "flex";
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
            <figure>
                <img src={arrowIcon} />
            </figure>
        </ArrowWrapper>
    )
};

export default Arrow