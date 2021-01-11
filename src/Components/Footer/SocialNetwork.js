import React from 'react';
import styled from 'styled-components';
import fbLogo from "../../images/fb-logo-round.png";
import inLogo from "../../images/in-logo.png";
import githubLogo from "../../images/github-logo.png"
import {MiniImg} from "../../styles/UI/MiniImg";
import {device} from "../../styles/MediaQueries/MediaQueries";
import {Link} from "../../styles/UI/Link";


const SocialBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 0 0 30%;    
  
        @media ${device.laptop} {  
            flex-wrap: wrap;                              
    }
`

const SocialElement = styled.div`
  display: inherit;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`

export const SocialNetwork = () => {

    return (
        <SocialBlock>
            <SocialElement><Link target="_blank" href="https://www.facebook.com/andygrini"><MiniImg miniSocial src={fbLogo} alt='Facebook'/>Facebook</Link></SocialElement>
            <SocialElement><Link target="_blank" href="https://www.linkedin.com/in/andrew-grini-542ba11b1/"><MiniImg miniSocial src={inLogo} alt='LinkedIn'/>LinkedIn</Link></SocialElement>
            <SocialElement><Link target="_blank" href="https://github.com/andygr1n1"><MiniImg miniSocial src={githubLogo} alt='GitHub'/>GitHub</Link></SocialElement>
        </SocialBlock>
    )


}