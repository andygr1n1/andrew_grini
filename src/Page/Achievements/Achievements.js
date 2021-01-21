import React, {useRef, useState} from 'react';
import styled, {css} from 'styled-components';
import a1 from "../../images/a1.jpg"
import a2 from "../../images/a2.jpg"
import a3 from "../../images/a3.jpg"
import a4 from "../../images/a4.png"
import a5 from "../../images/a5.png"
import {device} from "../../styles/MediaQueries/MediaQueries";

const AchievementsBlock = styled.section`  
background: none;
width: 100%;
max-width: 1200px;
margin: 0 auto;  
padding: 40px 0 20px;

    h1 {
    font-size: 30px;
    font-weight: bold;  
        @media ${device.laptop} {        
        text-align: center;                                     
        }
    }   
  
 
`
const AchievemntWall = styled.div`
  overflow: hidden;
  display: flex;
  flex-wrap:wrap;
  flex: 0 1 33.333%;
  max-width: 1200px;  
  align-items: center;
  justify-content: space-between;
  
   @media ${device.tablet} {       
      flex-direction: column;
   }
  
`
const ImgCertificate = styled.img`  
  width: 40%; 
  margin: 20px 5px;     
  cursor: pointer;
  box-shadow: 1px 1px 5px 0 rgba(0,0,0,0.80);
  
     @media ${device.tablet} {       
       max-width: 90%; 
       width: auto;
       height: auto;  
           
   }
  
  ${props => props.focused && css`
  cursor: default;
  max-height: 90%;
  width: auto; 
` }
`
const Overlay = styled.div`      
      position: fixed;      
      justify-content: center;
      align-items: center;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, .9);
      z-index: 2;
      display: none;
`;
const CloseBtn = styled.div`   
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  top: 0;    
  width: 50px;
  height: 50px;
  background: darkred; 
  z-index: 5;
  color: snow;
  cursor: pointer
`

export const Achievements = () => {
    const images = [a1, a2, a4, a5, a3];
    const [focusUrl, setFocusUrl] = useState('')
    const refOverlay = useRef(null)
    const refCloseBtn = useRef(null)
    const readMe = (url) => {
        refOverlay.current.style.display = "flex";
        setFocusUrl(url);
    }
    const closeMe = (event) => {
        const target = event.target;
        if (target === refOverlay.current || target === refCloseBtn.current ) {
            refOverlay.current.style.display = "none"
        }
    }

    return (
        <AchievementsBlock id="sectionCertificates">
            <h1>#Certificates</h1>
            <AchievemntWall>
                {images.map(url => {
                    return <ImgCertificate key={url} onClick={() => {
                        readMe(url)
                    }} src={url} alt="certificate"/>
                })}
                <Overlay onClick={closeMe} ref={refOverlay}>
                    <CloseBtn ref={refCloseBtn} onClick={closeMe}>▲</CloseBtn>
                    <ImgCertificate focused src={focusUrl} alt="certificate"/>
                </Overlay>
            </AchievemntWall>

        </AchievementsBlock>
    )
}
