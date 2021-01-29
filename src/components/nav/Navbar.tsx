import React from 'react';
import styled from 'styled-components';
import Navlink from './Navlink';
import Navlogo from './Navlogo';

interface Props {
  logo?: string;
}

const WrapperDiv = styled.div<Props>`
  display: grid;
  grid-template-rows: 4rem;
  grid-auto-flow: row;

  ${Props => Props.logo ? 'grid-template-columns: 4rem 4fr 2fr;' : 'grid-template-columns: 0rem 4fr 2fr;'}
  height: 4rem;
  border-bottom: 1px ${Props => Props.theme.primaryColour} solid;
  `

const Navbar: React.FC<Props> = ({children, logo}) => {
  return (
    <WrapperDiv>
      {logo ? <Navlogo logo={logo}></Navlogo> : ''}
      <Navlink>
        {children}
      </Navlink>
    </WrapperDiv> 
  )
};

export default Navbar