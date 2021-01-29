import React from 'react';
import styled from 'styled-components';

const WrapperDiv = styled.div`
  display: flex;
  grid-column-start: 3;
  `

const Navlink: React.FC = ({children}) => {
  return (
    <WrapperDiv>
      {children}
    </WrapperDiv> 
  )
};

export default Navlink