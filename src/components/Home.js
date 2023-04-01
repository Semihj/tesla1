import React from 'react';
import Section from './Section';
import styled from 'styled-components';

function Home() {
  return (
    <Container>
      <Section
      title="Model-Y"
      description="Try Semi-Model Now"
      LeftBtnText="Order Now"
      RightBtnText ="Existing inventory"
      backgroundImg="model-y.jpg"

      />
      <Section      
      title="Model-S"
      description="Try Semi-Model Now"
      LeftBtnText="Order Now"
      RightBtnText ="Existing inventory"
      backgroundImg="model-s.jpg"
      />
      <Section
     
     title="Model-X"
     description="Try Semi-Model Now"
     LeftBtnText="Order Now"
     RightBtnText ="Existing inventory"
     backgroundImg="model-x.jpg"/> 
      <Section
      title="Model-3"
      description="Try Semi-Model Now"
      LeftBtnText="Order Now"
      RightBtnText ="Existing inventory"
      backgroundImg="model-3.jpg"      
      />
     <Section
     
     title="Solar for New Roofs"
     description="Solar Roofs Cost Less Than a New Roof"
     LeftBtnText="Order Now"
     RightBtnText ="Existing inventory"
     backgroundImg="model-x.jpg"/> 
      <Section
      title="Model-3"
      description="Try Semi-Model Now"
      LeftBtnText="Order Now"
      RightBtnText ="Existing inventory"
      backgroundImg="solar-roof.jpg"      
      />
      <Section
     
     title="Accessories"
     description="Try Semi-Model Now"
     LeftBtnText="Order Now"
     backgroundImg="accessories.jpg"/> 

    </Container>
  )
}

export default Home;

const Container = styled.div`
  height:100vh;
`