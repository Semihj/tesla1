
import React from 'react'
import styled from 'styled-components';
import { Fade } from 'react-reveal';

function Section({title,description,LeftBtnText,RightBtnText,backgroundImg}) {
  return (
    <Fade bottom>
    <Wrap bgImg={backgroundImg}>
      
      <ItemText>
        <h1>{title}</h1>
        <p>{description}</p>
      </ItemText>
      
      <Buttons>
      
      <ButtonsGroup>
        <LeftButton>
         <p>{LeftBtnText }</p> 


        </LeftButton>
        
          {RightBtnText && 
            <RightButton>
            {RightBtnText}
          </RightButton>
          }
      </ButtonsGroup>
      
      <DownArrow src="/img/down-arrow.svg"></DownArrow>
      </Buttons>

    </Wrap>
    </Fade>
  )
}

export default Section

const Wrap = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:center;
    width:100vw;
    height:100vh;
    
    background-size:cover;
    background-position:center;
    background-repeat:no-repeat;
    background-image:${props => `url("/img/${props.bgImg}")`};

`
const ItemText = styled.div`
    padding-top: 15vh;
    text-align:center;



`
const ButtonsGroup = styled.div`
  display:flex;
  margin-bottom:30px;
  padding:10px;
  
  @media (max-width:768px) {
    flex-direction:column;
  }
  

`
const LeftButton = styled.div`
background-color:rgba(23, 26,32, 0.8);
height: 40px;
width: 256px;
color: white;
display: flex;
justify-content:center;
align-items:center;
border-radius:100px;
text-transform:uppercase;
font-size:12px;
cursor:pointer;
margin:10px;
  

`
const RightButton = styled(LeftButton)`
background:white;
color:black;
opacity:0.65;
`
const DownArrow = styled.img`
    height:40px;
    overflow-x:hidden;
    animation:animatedown 1.5s infinite;
    

`
const Buttons= styled.div`
`