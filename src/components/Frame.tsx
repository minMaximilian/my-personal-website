import React from 'react';
import styled from 'styled-components';

const WrapperDiv = styled.div`
  color: ${Props => Props.theme.textColour};
  display: flex;
  padding: 1rem;
  background-color: ${Props => Props.theme.secondaryMono};
  border-radius: 1rem;
  `

const Frame: React.FC = ({children}) => {
  return (
    <WrapperDiv>
      {children}
    </WrapperDiv> 
  )
};

export default Frame