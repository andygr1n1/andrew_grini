import styled from "styled-components";
import {device} from "../../styles/MediaQueries/MediaQueries";
import grassImg from "../../images/bg-grass.png"

export const FooterBlock = styled.footer`
width: 100%;
min-height: 400px;
color: #333;
background-image: url(${grassImg});
background-repeat: no-repeat;
background-size: cover;
position: relative;
    .tree {
    position: absolute;
    right: 0;
    bottom: 0;
     z-index: -1;
    }
   
`

export const FooterContent = styled.div`
position: absolute;
max-width: 1200px;
padding: 20px;
left: 0;
right: 0;
margin-left: auto;
margin-right: auto;
width: 100%;
bottom: 0;
display: flex;
align-items: center;
justify-content: space-between;  
@media ${device.tablet} {  
flex-direction: column;                                         
}
    
    .ag-dev-2021 {    
    width: 30%;  
    text-align: right;   
    text-shadow: 3px 4px 6px rgba(0,0,0,0.7);
    font-size: calc(10px + 4 * ((100vw - 320px) / 680));
    font-weight: bolder;
         @media ${device.tablet} { 
         margin: 10px 0; 
         width: 100%;     
         text-align: center;
         }
        
         .animation {        
         color: snow;
         transform: translateX(-5%);
         transition: all 0.4s ease-in;
         }
        
         & .animation:hover {
         cursor: pointer;
         color: blueviolet;
         transform: translateX(5%);
         transition: all 0.4s ease-out;
         display: inline-block;
         }  
    }

`
