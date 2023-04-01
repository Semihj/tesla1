import React from 'react'
import styled from 'styled-components'

function Header() {
  return (
    <Container>
      <a href="#">
        <img src="/img/logo.svg" alt="" />
      </a>
      <Menu>
        <a href="#">Model-S</a>
        <a href="#">Model-Y</a>
        <a href="#">Model-X</a>
        <a href="#">Model-3</a>
      </Menu>
        
    </Container>
  )
}

export default Header


const Container = styled.div`
    display:flex;
    min-height:60px;
    position:fixed;
    align-items:center;
    justify-content:space-between;
    padding:0 20px;
    top:0;
    left:0;
    right:0;npm
    z-index:1;
`

const Menu = styled.div`
    align-items:center;
    justify-content:center;
    flex:1;
    a{
    text-decoration:none;
    font-weight:600;
    color:#393c41;
    padding:0 10px;
    flex-wrap:no-wrap;
    }
    @media (max-width:768px) {
      display:none
    }


`
