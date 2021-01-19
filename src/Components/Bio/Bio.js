import React from 'react';
import {Link} from "react-scroll";
import cv from "../../docs/in.pdf"
import {BioSection, Intro} from "./BioStyled";

const Bio = () => {
    return (
        <BioSection>
            <h1>#BIO</h1>
                <Intro>
                    <div>
                        <span className="tag-open">name</span>
                        <h3>Andrew</h3>
                        <span className="tag-close">name </span>
                    </div>
                    <div>
                        <span className="tag-open">slogan</span>
                        <h3>First, solve the problem. Then, write the code</h3>
                        <span className="tag-close">slogan</span>
                    </div>
                </ Intro>
                <div>
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
