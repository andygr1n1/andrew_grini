import React from 'react';
import {ReactLogo} from "../../styles/UI/Icons/ReactLogo";
import {FooterBlock, FooterContent} from "./FooterStyled";
import {SocialNetwork} from "./SocialNetwork";
import tree from "../../images/science-tree.png"




const Footer = () => {
    return (
        <FooterBlock>
            <FooterContent>
                <SocialNetwork />
                <ReactLogo Reactfooter />
                <div className="ag-dev-2021"><div className="animation">Andrew Grini DEV -  2021</div></div>
            </FooterContent>
            <img className="tree" src={tree} alt=""/>
        </FooterBlock>

    )
}

export default Footer;
