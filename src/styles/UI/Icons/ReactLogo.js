import styled, {keyframes, css} from "styled-components";
import reactLogoImg from "../../../images/logo.svg"
import {device} from "../../MediaQueries/MediaQueries";

export const ReactLogoSpin = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`

export const ReactLogo = styled.div`
    height: 50px;
    width: 50px;
    pointer-events: none;
    display: block;
    mask-image: url(${reactLogoImg});
    background: -webkit-linear-gradient(90deg,#ff8a00,#e52e71);    
    mask-repeat: space;
    mask-position: center;
    
    @media (prefers-reduced-motion: no-preference) {
        animation: ${ReactLogoSpin} infinite 20s linear;
    }
    
        ${props => props.ReactBio && css`
        background: -webkit-linear-gradient(90deg,#167fef,#0324d4);  
        height: 70px;
        width: 70px;                                         
        }
    `}
    
    ${props => props.Reactfooter && css`
        @media ${device.tablet} {  
        display: none;                                        
        }
    `}
`
