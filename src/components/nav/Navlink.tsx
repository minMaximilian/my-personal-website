import React from 'react';
import styled from 'styled-components';

interface Props {
  visible: boolean;
}

const WrapperDiv = styled.div<Props>`
  ${Props => Props.visible ? `
    display: none;
  ` : `
    display: flex;
  `}
  display: flex;
  flex-direction: row-reverse;
  grid-column-start: 3;
  @media only screen and (min-width: 1024px) {
    grid-column-start: 4;
  }
`

const Navlink: React.FC<Props> = ({children, visible}) => {
  return (
    <WrapperDiv visible={visible}>
      {children}
    </WrapperDiv> 
  )
};

export default Navlink