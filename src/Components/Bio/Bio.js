import React from 'react';
import {BioBlock, BioDescription, BioParagraph, Tags, TagsClosed} from "./BioStyled";
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
                    Photoshop | Illustrator | etc... <TagsClosed>aux </TagsClosed></BioParagraph>
            </BioDescription>
        </BioBlock>
    )
};

export default Bio;