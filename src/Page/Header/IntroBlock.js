import React from 'react';
import styled from 'styled-components';
import {device} from "../../styles/MediaQueries/MediaQueries";


const PersonalData = styled.div`
padding: 60px 0; 
display: flex;
justify-content: space-between;
align-items: center; 
    * {
    cursor: pointer;
    }    
    
    h1 {
    background: -webkit-linear-gradient(90deg,#ffd55e,#f6c03c);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
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
        &:hover {
        color: gold;
        transition: color 0.3s;
        }
        }
                                  
        @media ${device.laptop} {
        text-align: left;
        margin: -10px 0 0 -45px;
        }
    }
  
@media ${device.laptop} {
flex-direction: column;
justify-content: center;
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
