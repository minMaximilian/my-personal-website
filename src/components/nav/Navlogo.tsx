import React from 'react';
import styled from 'styled-components';

interface Props {
  logo?: string;
}

const WrapperDiv = styled.img`
  display: none;
  @media only screen and (min-width: 1024px) {
    display: grid;
  }
  grid-column-start: 2;
  width: 4rem;
  height: 4rem;
  `

const Navlogo: React.FC<Props> = ({logo}) => {
  return (
    <WrapperDiv src={logo}>
    </WrapperDiv> 
  )
};

export default Navlogo