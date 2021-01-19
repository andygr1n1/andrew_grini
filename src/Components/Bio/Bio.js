import React from 'react';
import {Link} from 'react-scroll'
import styled from 'styled-components';
import cv from "../../docs/in.pdf"
import {BioBlock, BioDescription, BioParagraph, Tags, TagsClosed, AboutMe} from "./BioStyled";
import {Caption} from "../../styles/UI/Caption";

const Bio = () => {
    return (
        <BioBlock>
            <Caption standart>#BIO</Caption>
            <BioDescription>
                <BioParagraph><Tags>name</Tags> Andrew <TagsClosed>name </TagsClosed></BioParagraph>
                <BioParagraph>
                    <Tags>slogan</Tags>
                    First, solve the problem. Then, write the code
                    <TagsClosed>slogan</TagsClosed>
                </BioParagraph>
                <AboutMe>
                    <p>Hello, Thank you for visiting this page</p>
                    <p>I'm Enthusiastic web developer, eager to contribute for success through hard work, attention
                        to details and excellent organizational skills. Understand OOP principles and functional programming
                        in Java Script. I'm highly motivated to learn, grow and excel in web development
                    </p>
                    <p>Today I'm focused in React development. More info about this you can find in my <a href={cv} download>CV</a></p>
                    <p>Welcome for exploring in my project <Link to="sectionProjects"
                                                                 activeClass="active"
                                                                 spy={true}
                                                                 smooth={true}
                                                                 offset={0}
                                                                 duration={500}
                    >
                        library
                    </Link>
                    </p>
                </AboutMe>
            </BioDescription>
        </BioBlock>
    )
};

export default Bio;
