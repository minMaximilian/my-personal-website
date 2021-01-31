import React from 'react';
import styled from 'styled-components';

const WrapperDiv = styled.div`
  display: flex;
  grid-column-start: 2;
  width: 4rem;
  height: 4rem;

  flex-direction: column;
  justify-content: center;

  div {
    background-color: ${Props => Props.theme.primaryMono} ;
    margin: .25rem auto .25rem auto;
    height: .25rem;
    width: 2rem;
  }
  @media only screen and (min-width: 1024px) {
    display: none;
  }
`
const Hamburger: React.FC = () => {
  return (
    <WrapperDiv> 
      <div></div>
      <div></div>
      <div></div>
    </WrapperDiv> 
  )
};

export default Hamburger