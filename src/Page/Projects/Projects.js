import React from 'react';
import {ProjectsBlock, ProjectsContent} from "./ProjectsStyled";
import SweetStory from "./SweetStory/SweetStory";
import GithubUniverse from "./GithubUniverse/GithubUniverse";

const Projects = () => {
    return (
            <ProjectsBlock id="sectionProjects">
                <ProjectsContent>
                    <h1>#Projects</h1>
                </ProjectsContent>
                <SweetStory />
                <GithubUniverse />
            </ProjectsBlock>
    )
}

export default Projects;
