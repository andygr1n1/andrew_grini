import React from 'react';
import {HeaderBlock, HeaderContent, Nav, NavBlock, MenuItem} from "./HeaderStyled";
import RellaxWrapper from "react-rellax-wrapper";
import {IntroBlock} from "./IntroBlock";
import docPortfolio from "../../docs/in.pdf"
import {ReactLogo} from "../../styles/UI/Icons/ReactLogo";
import {Link, animateScroll as scroll} from "react-scroll";
import {ToTopButton} from "../../styles/UI/ToTopButton";
import sun from "../../images/Sun.png"




const Header = () => {
    return (
        <> <RellaxWrapper  speed={11}>
            <img className="sunny" src={sun} alt=""/>
        </RellaxWrapper>
            <HeaderBlock>
                <HeaderContent>
                    <Nav>
                        <div className="react-logo">this site is on <ReactLogo/></div>

                        {/*<NavBlock>*/}

                        {/*    <Link to="sectionProjects"*/}
                        {/*          activeClass="active"*/}
                        {/*          spy={true}*/}
                        {/*          smooth={true}*/}
                        {/*          offset={30}*/}
                        {/*          duration={500}*/}
                        {/*    >*/}
                        {/*        <MenuItem>*/}
                        {/*            Projects*/}
                        {/*        </MenuItem>*/}
                        {/*    </Link>*/}
                        {/*    <Link to="sectionCertificates"*/}
                        {/*          activeClass="active"*/}
                        {/*          spy={true}*/}
                        {/*          smooth={true}*/}
                        {/*          offset={30}*/}
                        {/*          duration={500}*/}
                        {/*    >*/}
                        {/*        <MenuItem>*/}
                        {/*            Certificates*/}
                        {/*        </MenuItem>*/}
                        {/*    </Link>*/}
                        {/*</NavBlock>*/}

                        <a className="cv_downloader" href={docPortfolio} download>Download CV</a>
                    </Nav>
                    <IntroBlock/>
                </HeaderContent>
            </HeaderBlock>
            <ToTopButton scroll={scroll}/>
        </>
    )
}

export default Header;
