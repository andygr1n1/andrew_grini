import React from 'react';
import {Link} from "react-scroll";
import RellaxWrapper from 'react-rellax-wrapper'
import {SummarySection} from "./SummaryStyled";
import {Clouds} from "./Clouds";

import bigCloud from "../../images/cloud_big.png"
import mediumCloud from "../../images/cloud_medium.png"
import smallCloud from "../../images/cloud_small.png"
import cv from "../../docs/in.pdf"

const Summary = () => {
    return (
        <>
            <RellaxWrapper speed={5}>
                <Clouds mobileHidden="hidden" link={bigCloud} />
                <Clouds mobileHidden="hidden" link={mediumCloud} right="5%" top="15%" />
                <Clouds link={smallCloud} right="5%" top="15%" />
                <Clouds mobileHidden="hidden" link={mediumCloud} left="50%" top="70%"/>
                <Clouds link={smallCloud} left="50%" bottom="20%"/>
            </RellaxWrapper>
            <SummarySection>
                    <div className="slogan">
                            <span className="tag-open">slogan</span>
                            <h3>First, solve the problem. Then, write the code</h3>
                            <span className="tag-close">slogan</span>
                    </ div>

                    <div>
                        <p>Hello, Thank you for visiting this page</p>

                        <p>My name is Andrew. I'm enthusiastic web developer, eager to contribute for success through hard work, attention
                            to details and excellent organizational skills. I understand OOP principles and functional programming
                            in Java Script
                        </p>

                        <p>Today I'm focused in React development. More info about this you can find in my
                            <a href={cv}
                               download> CV </a>
                        </p>

                        <p>Welcome for exploring my project
                            <Link to="sectionProjects"
                             spy={true}
                             smooth={true}
                             offset={0}
                             duration={500}> library </Link>
                        </p>
                    </div>
            </SummarySection>
        </>
    )
};
export default Summary;
