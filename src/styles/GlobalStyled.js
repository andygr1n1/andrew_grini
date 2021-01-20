import {createGlobalStyle} from "styled-components";
import bgImg from "../images/books-background.png"

export const GlobalStyle = createGlobalStyle`
html {
    box-sizing: border-box;
    font-size: 16px;
    }
    
*,
*::before,
*::after {
    box-sizing: inherit;
    font-family: inherit;
    }
    
body {
    margin: 0;
    padding: 0;
    height: 100%;
    font-family: 'Fira Code', 'Roboto Condensed', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;  
    //background-image: url(${bgImg});  
   background: linear-gradient(180deg, rgb(42,188,227) 0%, rgb(38,254,222) 35%, rgb(174,255,255) 100%);
}

code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

section h1 {
  font-size: 36px;
}

img {
    max-width: 100%;
    height: auto;
    }
    
a {
    text-decoration: none;
    color: inherit;
    font-family: inherit;
    }
   
ul {
    font-family: inherit;
    list-style: none;
    padding: 0;
    margin: 0;
    }

h1, h2, h3 {
    font-family: inherit;
    margin: 0;    
}

p {
    font-family: inherit;    
    padding: 0.5rem 0;
    font-weight: normal;
    font-size: 1.3rem;
    line-height: 1.7em;
    }
`
