import React from 'react';
import {ReactLogo} from "../../styles/UI/Icons/ReactLogo";
import {FooterBlock, FooterContent, AGlogo} from "./FooterStyled";
import {SocialNetwork} from "./SocialNetwork";




const Footer = () => {
    return (
        <FooterBlock>
            <FooterContent>
                <SocialNetwork />
                <ReactLogo Reactfooter />
                <AGlogo>Andrew Grini DEV -  2021</AGlogo>
            </FooterContent>

        </FooterBlock>

    )
}

export default Footer;