import React from 'react';
import {HeaderBlock, HeaderContent, Nav, NavBlock} from "./HeaderStyled";
import {IntroBlock} from "./IntroBlock";
import {Button} from "../../styles/UI/Button";
import docPortfolio from "../../docs/in.pdf"
import {ReactLogo} from "../../styles/UI/Icons/ReactLogo";
import {BootstrapLogo, JqueryLogo, JsEs6Logo, JsLogo, SassLogo} from "../../styles/UI/Icons/Icons";
import {Link, animateScroll as scroll} from "react-scroll";
import styled from "styled-components";
import {ToTopButton} from "../../styles/UI/ToTopButton";

const MenuItem = styled.div`
  padding: 5px 10px;   
  cursor: pointer;
  margin: 0 20px;
  
  &:hover {
    color: #f6c634;
  }
`


const Header = () => {
    return (
        <>
            <HeaderBlock>
                <HeaderContent>
                    <Nav>
                        <NavBlock NavBlockMiniImg>
                            <ReactLogo MiniImgHeader/>
                            <SassLogo/>
                            <JqueryLogo/>
                            <BootstrapLogo/>
                            <JsLogo/>
                            <JsEs6Logo/>
                        </NavBlock>
                        <NavBlock>

                            <Link to="sectionProjects"
                                  activeClass="active"
                                  spy={true}
                                  smooth={true}
                                  offset={30}
                                  duration={500}>

                                <MenuItem>
                                    Projects
                                </MenuItem>
                            </Link>


                            <Link to="sectionCertificates"
                                  activeClass="active"
                                  spy={true}
                                  smooth={true}
                                  offset={30}
                                  duration={500}>
                                <MenuItem>
                                    Certificates
                                </MenuItem>
                            </Link>

                        </NavBlock>
                        <NavBlock downloadBtn>
                            <Button><a href={docPortfolio} download>Download CV</a></Button>
                        </NavBlock>

                    </Nav>
                    <IntroBlock/>
                </HeaderContent>
            </HeaderBlock>
            <ToTopButton scroll={scroll}/>
        </>


    )
}

export default Header;