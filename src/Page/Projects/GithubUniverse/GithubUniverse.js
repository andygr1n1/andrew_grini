import React from 'react';
import githubUniverseImg from "../../../images/GitHubUniverse.jpg";
import {ProjectAbout, ProjectBlock, ProjectBtn, ProjectContent, ProjectLinks} from "../ProjectsStyled";

const GithubUniverse = () => {
    return (
        <ProjectBlock BgGitHub>
            <img src={githubUniverseImg} alt="GitHub Universe"/>
            <ProjectContent>
                <ProjectAbout>
                    <p>Here, on Github Universe, you can find anyone registered in the system.</p>
                    <p>This SPA is based on hooks, and can show you a new modern example of building web.</p>
                    <p>Please, enjoy it.</p>
                </ProjectAbout>

                <ProjectLinks>
                    <ProjectBtn GitUni> <a href="https://github-universe-71a00.web.app/" rel="noreferrer"   target="_blank">Github Universe page</a></ProjectBtn>
                    <ProjectBtn SweetGit><a href="https://github.com/andygr1n1/github-universe" rel="noreferrer" target="_blank">Github Universe on github</a></ProjectBtn>
                </ProjectLinks>
            </ProjectContent>

        </ProjectBlock>
    )
}

export default GithubUniverse;