import React from 'react';
import styled from 'styled-components';

const WrapperDiv = styled.div`
  display: grid;
  grid-template-rows: auto;
  grid-auto-flow: row;

  grid-template-columns: repeat(1, [col] 1fr);
  grid-gap: 16px;

  @media only screen and (min-width: 768px) {
    grid-template-columns: repeat(2, [col] 1fr);
    grid-gap: 32px;
  }

  @media only screen and (min-width: 1024px) {
    grid-template-columns: repeat(4, [col] 1fr);
  }

  @media only screen and (min-width: 1224px) {
    grid-template-columns: repeat(6, [col] 1fr);
  }

  @media only screen and (min-width: 1824px) {
    grid-template-columns: repeat(10, [col] 1fr);
  }
  `

const Grid: React.FC = ({children}) => {
  return (
    <WrapperDiv>
      {children}
    </WrapperDiv> 
  )
};

export default Grid