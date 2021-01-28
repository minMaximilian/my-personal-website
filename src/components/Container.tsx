import React from 'react';
import styled from 'styled-components';

const WrapperDiv = styled.div`
  display: flex;
  margin: 0 64px 0 64px;
  flex-direction: column;
  `

const Container: React.FC = ({children}) => {
  return (
    <WrapperDiv>
      {children}
    </WrapperDiv> 
  )
};

export default Container