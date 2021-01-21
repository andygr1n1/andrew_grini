import {createGlobalStyle} from "styled-components";
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
    background: linear-gradient(180deg, rgb(42,188,227) 0%, rgb(255,255,255) 10%, rgb(244,246,246) 50%, rgb(255,255,255) 100%);
}

code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

section {
    display: flex;
    flex-direction: column;
    max-width: 1200px;
    margin: 0 auto;
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

h3 {
   font-size: calc(14px + 10 * ((100vw - 320px) / 680));
}

p {
    font-family: inherit;    
    padding: 0.5rem 0;
    font-weight: normal;
    font-size: calc(12px + 5 * ((100vw - 320px) / 680));
    line-height: 1.7em;
    }
`
