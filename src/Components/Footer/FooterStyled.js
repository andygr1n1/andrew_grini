import styled from "styled-components";
import {device} from "../../styles/MediaQueries/MediaQueries";

export const FooterBlock = styled.div`

    background-color: #282c34;

`

export const FooterContent = styled.footer`
    display: flex;
    padding: 20px 30px;
    align-items: center;
    justify-content: space-between;    
    color: white;
    height: 100px;   
    margin: 0 auto;
    max-width: 1200px;
    
     @media ${device.tablet} {  
       flex-direction: column;                                         
    }


`

export const AGlogo = styled.div`
  width: 30%;  
  text-align: right;
  
       @media ${device.tablet} {  
        width: 100%;     
        text-align: center;        
        color: snow;   
        text-shadow: 3px 4px 6px rgba(0,0,0,0.7);                              
    }
`



