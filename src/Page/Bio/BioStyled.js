import styled from 'styled-components';
import {device} from "../../styles/MediaQueries/MediaQueries";

export const BioSection = styled.section`
position: relative;
    display: flex;
    flex-direction: column;
    max-width: 1200px;
    margin: 0 auto;  
    padding: 100px 0;
    color: #282c35;
  
        h1 {
        margin: 0 0 50px 0;
        }
        
        a {
        cursor:pointer;
        color: gold;
        font-weight: bolder;
        }
  
        @media ${device.laptop} {        
        padding: 100px;
            
            h1, div {
            text-align: center;
            }                                  
        }
        
        @media ${device.mobile} {        
        padding: 100px 20px;            
        }
`
export const Intro = styled.div`

        div {
        margin: 20px 0;        
    
            .tag-open {
            font-style: italic;
            font-size: 13px;
            color: gold;
            
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
            }
            
            .tag-close {
            font-style: italic;
            font-size: 13px;
            color: gold;
            
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
            } 
        }  
`
