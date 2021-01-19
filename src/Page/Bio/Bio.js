import React from 'react';
import {Link} from "react-scroll";
import cv from "../../docs/in.pdf"
import {BioSection, Intro} from "./BioStyled";
import {ParallaxEffects} from "../../Components/ParallaxEffects/ParallaxEffects";
import bigCloud from "../../images/cloud_big.png"
import mediumCloud from "../../images/cloud_medium.png"
import smallCloud from "../../images/cloud_small.png"

const Bio = () => {
    return (
        <BioSection>
            <ParallaxEffects link={bigCloud} classname="big_cloud"/>

                <Intro>
                    <div>
                        <span className="tag-open">slogan</span>
                        <h3>First, solve the problem. Then, write the code</h3>
                        <span className="tag-close">slogan</span>
                    </div>
                </ Intro>
                <div>
                    <ParallaxEffects link={mediumCloud} classname="medium_cloud"/>
                    <ParallaxEffects link={smallCloud} classname="small_cloud"/>
                    <p>Hello, Thank you for visiting this page</p>
                    <p>My name is Andrew. I'm enthusiastic web developer, eager to contribute for success through hard work, attention
                        to details and excellent organizational skills. I understand OOP principles and functional programming
                        in Java Script.
                    </p>
                    <p>Today I'm focused in React development. More info about this you can find in my <a href={cv}
                                                                                                          download>CV</a>
                    </p>
                    <p>Welcome for exploring my project <Link to="sectionProjects"
                                                              spy={true}
                                                              smooth={true}
                                                              offset={0}
                                                              duration={500}
                    >
                        library
                    </Link>
                    </p>
                </div>
        </BioSection>
    )
};

export default Bio;
