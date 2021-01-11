import styled from 'styled-components';
import {device} from "../../styles/MediaQueries/MediaQueries";

export const BioBlock = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  margin: 0 auto;  
  padding: 40px 0 20px;
  color: #282c35;    
  
    @media ${device.laptop} {        
      padding: 40px 20px 20px;                                     
    }
`

export const BioDescription = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;  
  font-size: 24px;
  font-weight: bold;
  padding: 80px 0 130px;
  
    @media ${device.laptop} {        
      max-width: 550px;       
      text-align: center;    
      font-size: 20px;                     
    }
    
    @media ${device.mobileL} {       
      
    }
    
    //&& p {
    //padding: 15px;
    //}
`

export const BioParagraph = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 15px;
  width: 100%;
`



export const Tags = styled.span`
  font-style: italic;
  font-size: 13px;
  color: orangered;
   &:before {
   font-weight: bolder;
   color: #764db7;
    content: "<";
  }

   &:after {
   font-weight: bolder;
    color: #764db7;
    content: ">";
  }
`

export const TagsClosed = styled.span`
  font-style: italic;
  font-size: 13px;
  color: orangered;
   &:before {
   font-weight: bolder;
    color: #764db7;
    content: "<";
  }

   &:after {
   font-weight: bolder;
    color: #764db7;
    content: " />";
  }
`