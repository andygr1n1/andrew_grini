import styled, {css} from "styled-components";
import {device} from "../MediaQueries/MediaQueries";

export const Caption = styled.div`  
  font-size: 30px;
  font-weight: bold;
  
    @media ${device.laptop} {        
      text-align: center;                                     
    }
  
  ${props => props.webDeveloper && css`
    background: -webkit-linear-gradient(90deg,#ff8a00,#e52e71);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`}
  
    ${props => props.standart && css`
    padding: 0;    
`}

`