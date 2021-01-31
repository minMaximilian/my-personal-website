import React from 'react';
import styled from 'styled-components';

interface Props {
  visible: boolean;
}

const WrapperDiv = styled.div<Props>`
  @media only screen and (max-width: 1023px) {
      ${Props => Props.visible ? `
      display: flex;
      position: absolute;
      background-color: #fff;
      border-right: 1px ${Props.theme.secondaryMono} solid;
      border-top: 1px ${Props.theme.secondaryMono} solid;
      top: 4rem;
      height: calc(100vh - 4rem);
      flex-direction: column;
      width: 20rem;
    ` : `
      display: none;
    `}
  }

  @media only screen and (min-width: 1024px) {
    display: flex;
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