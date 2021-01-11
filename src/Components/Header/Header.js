import React from 'react';
import {HeaderBlock, HeaderContent, MenuItem, Nav, NavBlock} from "./HeaderStyled";
import {IntroBlock} from "./IntroBlock";
import {Button} from "../../styles/UI/Button";
import docPortfolio from "../../docs/in.pdf"
import {ReactLogo} from "../../styles/UI/Icons/ReactLogo";
import {BootstrapLogo, JqueryLogo, JsEs6Logo, JsLogo, SassLogo} from "../../styles/UI/Icons/Icons";


const Header = () => {
    return (

        <HeaderBlock>
            <HeaderContent>
                <Nav>
                    <NavBlock NavBlockMiniImg>
                        <ReactLogo MiniImgHeader/>
                        <JsEs6Logo/>
                        <SassLogo/>
                        <JqueryLogo/>
                        <BootstrapLogo/>
                        <JsLogo/>
                    </NavBlock>
                    <NavBlock>
                        <MenuItem>Bio</MenuItem>
                        <MenuItem>Projects</MenuItem>
                        <MenuItem>Certificates</MenuItem>
                    </NavBlock>
                    <NavBlock downloadBtn>
                        <Button><a href={docPortfolio} download>Download CV</a></Button>
                    </NavBlock>

                </Nav>
                <IntroBlock/>
            </HeaderContent>
        </HeaderBlock>


    )
}

export default Header;