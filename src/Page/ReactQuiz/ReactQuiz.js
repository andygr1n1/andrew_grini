import React from 'react';
import styled from 'styled-components';
import bgQuiz from "../../images/getReact.png"

const ReactQuizSection = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;   
    position: relative;
    
    .notice-dev {
    position: absolute;
    max-width: 600px;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    top: -10%;
    background: blueviolet;
    color: snow;    
    padding: 20px;      
    font-size: 16px;  
    box-shadow: 1px 1px 5px #171313;
    z-index: 1000;
    }
    
    .react-quiz-link {
        display: flex;
        justify-content: center;
        width: 50%;
        transform: translateY(-50%);
        cursor: pointer;
        margin: 0 auto;
        
        span {
        color: #764db7;
        font-size: calc(12px + 20 * ((100vw - 320px) / 680));
        font-weight: 900;
        }
    
        .hidden {
        max-width: 0;
        opacity: 0;
        transition: all 0.4s ease-out;
        }
        
        &:hover .hidden {
        opacity: 1;
        max-width: 50%;        
        }
    }
    
    .arrows {
    min-height: 400px;
    background-image: url(${bgQuiz});
    background-position: top;
    background-size: cover;
    background-repeat: no-repeat; 

    }
`


export const ReactQuiz = () => {

 return (
     <ReactQuizSection>
         {/*<div className="notice-dev">*/}
         {/*    I am working on injecting this component, just notice me at andy.grini@gmail.com and i will be glad to show all of my projects :D*/}
         {/*</div>*/}
         <a className="react-quiz-link">
             {/*<span className="hidden"> Check&nbsp; </span>*/}
             {/*<span className="hidden"> yourself,&nbsp; </span>*/}
             {/*<span className="hidden"> take&nbsp; </span>*/}
             {/*<span className="hidden"> my&nbsp; </span>*/}
             <span className="hidden"> ...&nbsp; </span>
             <span className="hidden"> soon&nbsp; </span>
             <span className="hidden"> and&nbsp; </span>
             <span className="hidden"> using&nbsp; </span>
             <span className="hidden"> Redux&nbsp; </span>
             <span className="hidden"> -&nbsp; </span>
             <span> React&nbsp; </span>
             <span> Quiz!&nbsp; </span>
         </a>
         <div className="arrows" />
     </ReactQuizSection>
 )

}
