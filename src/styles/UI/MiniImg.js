import styled, {css} from "styled-components";
import {device} from "../MediaQueries/MediaQueries";


export const MiniImg = styled.img`
  height: 30px;  
  margin: 10px;
  
  ${props => props.MiniImgHeader && css`
    @media${device.mobileL}{    
      
    }
`}
  
  ${props => props.miniSocial && css`
          height: 20px;  
          margin: 5px;
          `}
`