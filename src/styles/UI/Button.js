import styled from 'styled-components';

export const Button = styled.button`
  min-width: 200px;
  height: 40px;
  cursor: pointer;
  outline: none;
  border: none;    
  background: #f6c634;
  font-weight: bolder;
  font-size: 14px;
  
  &:focus {
  outline: none;
  }
  
  &:hover {
  background: -webkit-linear-gradient(90deg,#ff8a00,#e52e71); 
  color: snow;
  }

`;
