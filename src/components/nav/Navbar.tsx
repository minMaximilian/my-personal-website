import React, { useState } from 'react';
import styled from 'styled-components';
import Hamburger from './Hamburger';
import Navlink from './Navlink';
import Navlogo from './Navlogo';

interface Props {
  logo?: string;
}

const WrapperDiv = styled.div<Props>`
  border-bottom: 1px ${Props => Props.theme.primaryColour} solid;
  display: grid;
  grid-template-rows: 4rem;
  grid-auto-flow: row;

  ${Props => Props.logo ? 'grid-template-columns: 4rem 1fr;' : 'grid-template-columns: 0rem 1fr;'}
  height: 4rem;
  @media only screen and (min-width: 1024px) {
    ${Props => Props.logo ? 'grid-template-columns: 10rem 4rem 1fr 0fr 10rem;' : 'grid-template-columns: 10rem 0rem 1fr 0fr 10rem;'}
  }

  @media only screen and (min-width: 1824px) {
    ${Props => Props.logo ? 'grid-template-columns: 20rem 4rem 1fr 0fr 20rem;' : 'grid-template-columns: 20rem 0rem 1fr 0fr 20rem;'}
  }
  `

const Navbar: React.FC<Props> = ({children, logo}) => {
  const [nav, setNav] = useState(false);

  return (
    <WrapperDiv>
      {logo ? <Navlogo logo={logo}></Navlogo> : ''}
      {children ?
      <div onClick={() => setNav(!nav)}>
        <Hamburger />
      </div>
      : ''}
      
      <Navlink visible={nav}>
        {children}
      </Navlink>
    </WrapperDiv> 
  )
};

export default Navbar