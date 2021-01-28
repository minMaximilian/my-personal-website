import React from 'react';
import styled from 'styled-components';

const WrapperDiv = styled.div`
  display: flex;
  padding: 1rem;
  background-color: #d8d8d8;
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