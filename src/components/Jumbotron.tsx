import React from 'react';
import styled from 'styled-components';

const WrapperDiv = styled.div`
  display: flex;
  min-height: 30rem;
  background-color: ${Props => Props.theme.tertiaryMono};
  border-left: solid 1px ${Props => Props.theme.secondaryMono};
  border-right: solid 1px ${Props => Props.theme.secondaryMono};
  margin: 0 2rem 0 2rem;
  font-size: 2.5rem;
  color: ${Props => Props.theme.secondaryMono};
  justify-content: center;
  align-items: center;

`

const Jumbotron: React.FC = ({children}) => {
  return (
    <WrapperDiv>
      {children}
    </WrapperDiv>
  )
}

export default Jumbotron