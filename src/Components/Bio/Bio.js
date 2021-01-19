import React from 'react';
import {BioBlock, BioDescription, BioParagraph, PassionAbout, Tags, TagsClosed} from "./BioStyled";
import {Caption} from "../../styles/UI/Caption";
import {ReactLogo} from "../../styles/UI/Icons/ReactLogo";
import {BootstrapLogo, Html5Logo, JqueryLogo, JsEs6Logo, JsLogo, SassLogo} from "../../styles/UI/Icons/Icons";


const Bio = () => {
    return (
        <BioBlock>
            <Caption standart>#BIO</Caption>
            <BioDescription>
                <BioParagraph><Tags>name</Tags> Andrew <TagsClosed>name </TagsClosed></BioParagraph>
                <BioParagraph><Tags>slogan</Tags> First, solve the problem. Then, write the
                    code. <TagsClosed>slogan</TagsClosed></BioParagraph>
                <BioParagraph><Tags>carrier</Tags> Front-end Developer <TagsClosed>carrier </TagsClosed></BioParagraph>
                <BioParagraph><Tags>progress</Tags>
                    <Html5Logo/> ⇛ <JsLogo/> ⇛ <JqueryLogo/> | <BootstrapLogo/> | <SassLogo/> ⇛ <JsEs6Logo/> ⇛ <ReactLogo
                        ReactBio/> <TagsClosed>progress </TagsClosed></BioParagraph>
                <BioParagraph><Tags>aux</Tags> Git | WebPack | NodeMailer | Firebase | Trello | Sigma | Adobe XD |
                    Photoshop | Illustrator | etc... <TagsClosed>aux </TagsClosed>
                </BioParagraph>
                {/*<PassionAbout>*/}
                {/*    <p> Hello, my name is Andrew and I like codding.</p>*/}
                {/*    <p>Now I am focused on Front-end development.</p>*/}
                {/*    <p> I'd like to get a job in respectful organization, that's why I train my skills constantly.</p>*/}
                {/*    <p>I'm good in JavaScript and I am junior in React.</p>*/}
                {/*    <p>In 2014 I built simple sites on HTML5 and CSS3 with simple JS involving, praticed Joomla and*/}
                {/*        Wordpress. It was more like a hobby, but with small commercial success.*/}
                {/*    </p>*/}

                {/*    <p>In 2019 I decided to make Front-end development my profession. I studied hard and as a result I*/}
                {/*        can*/}
                {/*        create projects using JavaScript ES6 and React library.*/}
                {/*        I don't want to stop and continue my education at free time. Now I'm interested in React,*/}
                {/*        Angular*/}
                {/*        and Node JS.</p>*/}

                {/*    <p> I am Junior React developer. I am focused on this library, because it gives great*/}
                {/*        possibilities*/}
                {/*        in creating difficult web and mobile apps, it is very flexible and can be used with other*/}
                {/*        libraries*/}
                {/*        and frameworks.</p>*/}
                {/*</PassionAbout>*/}
            </BioDescription>
        </BioBlock>
    )
};

export default Bio;