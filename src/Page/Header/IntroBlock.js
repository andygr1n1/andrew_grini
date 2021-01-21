import React from 'react';
import styled from 'styled-components';
import {device} from "../../styles/MediaQueries/MediaQueries";


const PersonalData = styled.div`
padding: 60px 0; 
display: flex;
justify-content: space-between;
align-items: center;
z-index: 1; 

    @media ${device.laptop} {
    flex-direction: column;
    justify-content: center;
    }

    * {
    cursor: pointer;
    }    
    
    h1 {
    color: gold;
    text-shadow: 2px 1px 1px rgba(150, 150, 150, 1);
    transition: color 0.4s ease-out;
    
      &:hover {
         color: blueviolet;
         transition: color 0.4s ease-out;
      }
    }
        
    .data__name {
    margin-left: 15px;
    }
        
    .data_contacts {
    display: flex;
    flex-direction: column;
    justify-content: right;
        
        a{
        margin: 5px;
        transition: color 0.4s ease-out;
        color: snow;
            &:hover {
            color: blueviolet;
            font-weight: bolder;
            transition: color 0.4s ease-out;
            }
        }
                                  
        @media ${device.laptop} {
        text-align: left;
        margin: -1px 0 0 -45px;
        }
    }
`

export const IntroBlock = () => {
    return (
        <PersonalData>
            <div>
                <div className="data__name">Andrew Grini</div>
                <h1>#WEB DEVELOPER</h1>
            </div>
            <div className="data_contacts">
                <a href="tel:37368953913">(373) 68 - 953 - 913</a>
                <a href="mailto:andy.grini@gmail.com" target="_blank" rel="noreferrer">andy.grini@gmail.com</a>
            </div>
        </PersonalData>
    )
}
