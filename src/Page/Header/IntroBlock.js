import React from 'react';
import styled from 'styled-components';
import {Caption} from "../../styles/UI/Caption";
import {device} from "../../styles/MediaQueries/MediaQueries";


const IntroBlockStyled = styled.div`
  padding: 60px 0; 
  display: flex;
  justify-content: space-between;
  align-items: center; 
  
    @media ${device.laptop} {
      flex-direction: column;
      justify-content: center;
    }
`

const MyName = styled.div`
  margin-left: 15px;
`

const MeContacts = styled.div`
  text-align: right;
  
  &&>div {
    margin: 10px 0;    
  }
  
    @media ${device.laptop} {
        text-align: left;
        margin: -10px 0 0 -45px;
}
`

export const IntroBlock = () => {
    return (
        <IntroBlockStyled>
            <div>
                <MyName>Andrew Grini</MyName>
                <Caption webDeveloper>#WEB DEVELOPER</Caption>
            </div>
            <MeContacts>
                <div>(373) 68 - 953 - 913</div>
                <div>andy.grini@gmail.com</div>
            </MeContacts>
        </IntroBlockStyled>
    )
}