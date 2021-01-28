import React from 'react';
import styled from 'styled-components';

const WrapperDiv = styled.div`
  display: flex;
`

const Jumbotron: React.FC = ({children}) => {
  return (
    <WrapperDiv>
      {children}
    </WrapperDiv>
  )
}