import React from 'react';
import sweetStoryImg from '../../../images/SweetStoryImage.jpg'
import {ProjectAbout, ProjectBlock, ProjectBtn, ProjectContent, ProjectLinks, ReactColored} from "../ProjectsStyled";

const SweetStory = () => {
    return (
        <ProjectBlock BgCookies>
            <img src={sweetStoryImg} alt="SweetStory shop"/>
            <ProjectContent>
                <ProjectAbout>
                    <p> I love sweets and cakes, you love sweets and cakes, all whole world loves something
                        tasty!!! </p>
                    <p>Ok :), may be not, but if you are here - you are exactly
                        for <ReactColored/>.</p>
                    <p>SweetStory SPA is based on React Components and was created to show a beautiful and
                        simple example of <ReactColored/> library.</p>
                </ProjectAbout>

                <ProjectLinks>
                   <ProjectBtn SweetSite> <a href="https://sweetstory-ba648.web.app/" rel="noreferrer"   target="_blank">SweetStory page</a></ProjectBtn>
                    <ProjectBtn SweetGit><a href="https://github.com/andygr1n1/SweetStory" rel="noreferrer" target="_blank">SweetStory github</a></ProjectBtn>
                </ProjectLinks>
            </ProjectContent>
        </ProjectBlock>
    )
}

export default SweetStory;