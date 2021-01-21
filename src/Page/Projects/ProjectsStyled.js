import styled, {css} from "styled-components";
import {device} from "../../styles/MediaQueries/MediaQueries";
import bgCookie from "../../images/cookie-background-small.png";
import bgCat from "../../images/stars-bg.png";

export const ReactColored = styled.span`
  display: inline-block;  
  &:after{
  font-size: 24px;
  color: dodgerblue;
  font-weight: bolder;
  content: "React";
  }
`

export const ProjectsBlock = styled.div`
  display: flex;  
  flex-direction: column;  
  flex: 1 1 auto;
  padding: 40px 0 20px;
  min-height: 1000px;
  background: #282c35;
  color: snow;
`

export const ProjectsContent = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  
    h1 {
    font-size: 30px;
    font-weight: bold;  
    @media ${device.laptop} {        
    text-align: center;                                     
    }
    }   
`

export const ProjectBlock = styled.div`
  padding: 0 0 40px;
  width: 100%;    
  max-width: 1200px;
  margin: 80px auto;
  
  ${props => props.BgCookies && css`
    background-image: url(${bgCookie}); 
`}
  
    ${props => props.BgGitHub && css`
    background-image: url(${bgCat}); 
`}
  
`

export const ProjectContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
  
  @media ${device.laptop} {        
      flex-direction: column;                  
    }
`

export const ProjectAbout = styled.div`
  padding:  30px 0;
  font-size: 24px;
  
     @media ${device.laptop} {       
            padding:  30px;
            font-size: 20px;         
   }
`

export const ProjectLinks = styled.div`
  margin: 20px 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  
   @media ${device.tablet} {        
      flex-direction: column;                      
   }
`

export const ProjectBtn = styled.button`  
  margin: 5px 0 0 40px;
  color: snow;
  padding: 10px;
  font-size: 18px;
  cursor: pointer;
  outline: none;
  border: none;
  width: 280px;  
  
   @media ${device.tablet} {        
      margin: 20px;      
      width: auto;              
   }

  ${props => props.SweetSite && css`    
    background: transparent;
    font-size: 30px;    
    font-family: 'Calligraffitti',cursive;
    font-weight: bolder;
    color: #e00707;
    text-shadow: 2px 2px 1px rgb(40,39,39);
    `}
  
    ${props => props.GitUni && css`    
    background: transparent;
    font-size: 30px;    
    font-family: 'Calligraffitti',cursive;
    font-weight: bolder;
    color: #3c81a9;
    text-shadow: 2px 2px 1px rgb(40,39,39);
    `}
  
    ${props => props.SweetGit && css`
              background: snow;
              border-radius: 10px;
              color: #282c35;;
              font-weight: bold;
              font-size: 24px;             
              padding: 25px 50px;
              
              @media ${device.mobile} {        
               padding: 10px;                   
              }              
              &:hover {                
                background: gold;
              }              
    `}
`

