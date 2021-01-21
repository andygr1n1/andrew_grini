import styled from "styled-components";
import {device} from "../../styles/MediaQueries/MediaQueries";

export const HeaderSection = styled.header`
padding-top: 60px;
color: snow;
z-index: 2;

    @keyframes infinity-sun {
    0%, 100% {
        transform: rotate(0deg);
    }
    to {
    transform: rotate(360deg);
    }
    }
            
    .sunny {
    position: absolute;
    top: -400px;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;        
      
      @media (prefers-reduced-motion: no-preference) {
      animation: infinity-sun 300s linear;
      }

    }
        
    .header_content {    
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    padding: 10px 0;
    width: 100%; 
    z-index: 1;
    
        @media${device.laptop} {
        margin-top: 100px;
        color: #333;
        font-weight: bolder;
        }
        @media${device.mobileL} {
        margin-top: 50px;
        color: #333;
        font-weight: bolder;
        }  
    
        .header_content__cv {
        display: flex;        
        justify-content: space-between;
        align-items: center;
        z-index: 2;
        
            @media${device.laptop} {
            flex-direction: column;
            justify-content: center;
            } 
        
            .react-logo {
            display: flex;
            justify-content: left;
            align-items: center;
            font-size: 10px;
            cursor: pointer;
            min-width: 192px;
            padding-left: 15px;
            color: snow;
            transition: color 0.3s ease-out;
                &:hover {
                    transition: color 0.3s ease-out;
                    color: blueviolet;
                    font-weight: bolder;
                }
                
                @media${device.laptop} {
                padding: 0;
                justify-content: center;
                } 
            }
            
            .cv_downloader {
            min-width: 192px;
            color: #333;
            text-align: center;
            padding: 0.5rem;
            background: gold;
            box-shadow: 5px 5px 4px -3px rgba(51,51,51,0.43);
            transition: background 0.3s ease-out;
                &:hover{
                    color: gold;
                    background: blueviolet;
                    transition: background 0.3s ease-out;
                }
            }
        }      
    }
`
