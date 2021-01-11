import React, {useEffect, useRef} from 'react';
import styled from 'styled-components';

const ToTop = styled.div`
  position: fixed;
  width: 40px;
  height: 40px;
  background: #282c35;
  color: snow;
  border-radius: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  right: 30px;
  bottom: 25px;
  opacity: 0;
  
  &:hover {
    color: #f6c634;    
  }   
`



export const ToTopButton = ({scroll}) => {
    const goToTop = useRef(null)
    useEffect(() => {
        window.addEventListener('scroll', () => {
            window.pageYOffset < 300
                ? goToTop.current.style.opacity = 0
                : goToTop.current.style.opacity = 1;
        })});

    return (
        <ToTop ref={goToTop} onClick={() => {
            scroll.scrollToTop();
        }}>⏏</ToTop>
    )
}