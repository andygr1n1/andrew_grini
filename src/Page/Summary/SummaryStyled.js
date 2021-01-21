import styled from 'styled-components';
import {device} from "../../styles/MediaQueries/MediaQueries";

export const SummarySection = styled.section`
padding: 100px 0;
color: #282c35;
@media ${device.laptop} {padding: 100px}            
@media ${device.mobile} {padding: 100px 20px}
    
     a {
    cursor:pointer;
    color: #764db7;
    font-weight: bolder;
    }


    .slogan {
    margin: 20px 0;       
    
        .tag-open {
        font-style: italic;
        font-size: 13px;
        color: #764db7;            
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
        color: #764db7;
            
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
