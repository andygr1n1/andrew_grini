import React from 'react';
import styled from 'styled-components';
import {device} from "../../styles/MediaQueries/MediaQueries";

const Cloud = styled.img`
   
    &.hidden {  
    @media ${device.tablet} {
      display: none !important;
        }
    }
`

export const Clouds = ({link, top = "", right = "", bottom = "", left = "", mobileHidden = ""}) => {

    return (
        <Cloud
            className={mobileHidden}
            src={link}
            style={{
                position: "absolute",
                top: top,
                right: right,
                bottom: bottom,
                left: left,
            }}
            alt=""/>

    )
}
