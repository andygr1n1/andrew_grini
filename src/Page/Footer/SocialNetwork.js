import React from 'react';
import styled from 'styled-components';
import fbLogo from "../../images/fb-logo-round.png";
import inLogo from "../../images/in-logo.png";
import githubLogo from "../../images/github-logo.png"
import {device} from "../../styles/MediaQueries/MediaQueries";


const SocialBlock = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
flex: 0 0 30%;    
@media ${device.laptop} {flex-wrap: wrap}

    .social-block_element {
    display: inherit;
    justify-content: center;
    align-items: center;
    cursor: pointer; 
    
        a {
        display: inherit;
        align-items: inherit;
        justify-content: inherit;
        text-shadow: 3px 4px 6px rgba(0,0,0,0.7);
        font-weight: bolder;
        color: snow;
        transition: color 0.4s ease-out;
            span {
            @media ${device.tablet} {
            display: none;
            }
            }
            img {        
            height: 20px;  
            margin: 5px;
            }
        
            @keyframes move-animation {
            0%, 100% {transform: translateY(0);}
            50% {transform: translateY(-35px);}
            }
              
            &:hover {
            cursor: pointer;
            color: blueviolet;             
            transition: color 0.4s ease-out;
                img {
                animation: move-animation 1s linear infinite;     
                }
            }
        } 
    }
`

export const SocialNetwork = () => {

    return (
        <SocialBlock>
            <div className="social-block_element"><a target="_blank" href="https://www.facebook.com/andygrini"><img src={fbLogo} alt='Facebook'/><span>Facebook</span></a></div>
            <div className="social-block_element"><a target="_blank" href="https://www.linkedin.com/in/andrew-grini-542ba11b1/"><img src={inLogo} alt='LinkedIn'/><span>LinkedIn</span></a></div>
            <div className="social-block_element"><a target="_blank" href="https://github.com/andygr1n1"><img src={githubLogo} alt='GitHub'/><span>GitHub</span></a></div>
        </SocialBlock>
    )


}
