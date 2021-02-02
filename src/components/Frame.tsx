import React from 'react';
import styled from 'styled-components';

const WrapperDiv = styled.div`
  color: ${Props => Props.theme.textColour};
  display: flex;
  flex-direction: column;
  padding: 1rem;
  border-radius: 1rem;
  border: 1px ${Props => Props.theme.tertiaryMono} solid;
  `

const Frame: React.FC = ({children}) => {
  return (
    <WrapperDiv>
      {children}
    </WrapperDiv> 
  )
};

export default Frame