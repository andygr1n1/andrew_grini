import styled, {css} from "styled-components";
import {device} from "../../styles/MediaQueries/MediaQueries";

export const HeaderBlock = styled.header`    
  background-color: #282c34;
`

export const HeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 0;
  color: white;
  height: auto;    
  max-width: 1200px;
  margin: 0 auto; 
  width: 100%; 
    
   @media ${device.laptop} {        
      padding: 0 20px                                     
    } 
    
    @media ${device.tablet} {        
      justify-content: center;
      align-items: center;                                       
    } 
`

export const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  
      @media ${device.laptop} {  
       flex-direction: column;                                         
    }
  
`

export const NavBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 30%;  
    
      @media ${device.laptop} {  
       margin: 15px;                                         
    }
  
  ${props => props.downloadBtn && css`
    justify-content: flex-end;
    
    @media ${device.laptop} {  
       margin: 30px 0 0;                                         
    }
`}
  
    ${props => props.NavBlockMiniImg && css`    
    
    @media ${device.mobileL} {  
       padding: 30px 30px;
       flex-wrap: wrap;                                         
    }
`}
`

export const MenuItem = styled.div`
  padding: 5px 10px;
   color: #282c35;
`
