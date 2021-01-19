import styled from "styled-components";

export const Titan = styled.div`
  // for begin mutate index.html with this font  
  // <link rel="preconnect" href="https://fonts.gstatic.com">
  //<link href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@500&display=swap" rel="stylesheet">
  font-family: 'Fira Code', monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 12px;
  position: fixed;
  width: 100%;
  display: flex;  
  align-items: center;
  padding: 5px 20px;
  background: #262426;
  box-shadow: 1px 1px 1px 1px #333;  
   & * {
    display: flex;
    align-items: center;    
    color: snow;
   }
   
       button {
        margin-right: 10px;
        cursor: pointer;
        width: 20px;
        height: 20px;
        padding: 0;
        background: none;
        outline: none;
        border: none;
        color: red;
        &:hover {
         font-weight: bolder;
        }    
       }
       
       .titan-content {
         display: flex;
         justify-content: space-between;
         flex: 1 1 auto;
       }
    
       .creator {
        cursor: pointer;
        &:hover {
          font-weight: bolder;
        }  
       }
       
       .cat-link {
         cursor: pointer;
         display: flex;
         align-items: center;  
             &:hover {
               font-weight: bolder;
             }
      
             img {
               width: 15px;
               margin: 0 10px
             }
       }    
`
