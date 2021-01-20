import styled, {css} from "styled-components";
import {device} from "../../styles/MediaQueries/MediaQueries";

export const HeaderBlock = styled.header`      
    padding-top: 60px;
    position: relative;
`

export const MenuItem = styled.div`
  padding: 5px 10px;   
  cursor: pointer;
  margin: 0 20px;
  color: #333;
  font-weight: bolder; 
  z-index: 100;
`

export const HeaderContent = styled.div`
  z-index: 1;
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
        
    .react-logo {
    display: flex;
    justify-content: left;
    align-items: center;
    font-size: 10px;
    cursor: pointer;
    min-width: 192px;
        &:hover {
            transition: color 0.3s;
            color: gold;
        }
    }
    
    .cv_downloader {
    min-width: 192px;
    color: #333;
    text-align: center;
    padding: 0.5rem;
    background: gold;
    box-shadow: 5px 5px 4px -3px rgba(51,51,51,0.43);
    &:hover{
        color: gold;
        background: #333;
        transition: all 0.3s;
    }
    }
        
@media ${device.laptop} {  
flex-direction: column;                                         
}  
`

export const NavBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1 1 auto;  
    
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


