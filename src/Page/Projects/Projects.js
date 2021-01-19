import React from 'react';
import {ProjectsBlock, ProjectsContent} from "./ProjectsStyled";
import SweetStory from "./SweetStory/SweetStory";
import {Caption} from "../../styles/UI/Caption";
import GithubUniverse from "./GithubUniverse/GithubUniverse";

const Projects = () => {
    return (
            <ProjectsBlock id="sectionProjects">
                <ProjectsContent>
                    <Caption standart>#PROJECTS</Caption>
                </ProjectsContent>
                <SweetStory />
                <GithubUniverse />
            </ProjectsBlock>
    )
}

export default Projects;