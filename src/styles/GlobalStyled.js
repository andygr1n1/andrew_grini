import {createGlobalStyle} from "styled-components";
import bgImg from "../images/books-background.png"

export const GlobalStyle = createGlobalStyle`
html {
    box-sizing: border-box;
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
    height: 100vh;
    font-family: 'Roboto Condensed', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;  
    background-image: url(${bgImg});
    
}

code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
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
    font-size: inherit;
    margin: 10px 10px;
    font-weight: normal;
    }
    
`