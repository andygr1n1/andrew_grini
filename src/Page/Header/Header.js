import React from 'react';
import RellaxWrapper from "react-rellax-wrapper";
import {animateScroll as scroll} from "react-scroll";
import {HeaderSection} from "./HeaderStyled";
import {IntroBlock} from "./IntroBlock";

import {ToTopButton} from "../../styles/UI/ToTopButton";
import docPortfolio from "../../docs/in.pdf"
import sun from "../../images/sun.png"


const Header = () => {
    return (
        <HeaderSection>
            <RellaxWrapper speed={10}>
                <img className="sunny" src={sun} alt=""/>
            </RellaxWrapper>
            <div className="header_content">
                <div className="header_content__cv">
                    <div className="react-logo">react-spa</div>
                    <a className="cv_downloader" href={docPortfolio} download>Download CV</a>
                </div>
                <IntroBlock/>
            </div>
            <ToTopButton scroll={scroll}/>
        </HeaderSection>
    )
}

export default Header;
