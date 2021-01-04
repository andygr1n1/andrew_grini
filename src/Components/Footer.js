import React from 'react';
import {FooterBlock, ReactLogo} from "./FooterStyled";
import reactLogo from '../images/logo.svg';

const Footer = () => {
    return (
        <FooterBlock>
            <ReactLogo src={reactLogo} alt="react logo"/>
        </FooterBlock>

    )
}

export default Footer;