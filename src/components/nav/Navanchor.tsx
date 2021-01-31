import React from 'react';
import styled from 'styled-components';

interface Props {
  href?: string;
}

const WrapperDiv = styled.a`
  font-size: 1.5rem;
  display: flex;
  padding: 1rem 1.5rem .75rem 1.5rem;
  color: #000000;
  text-decoration: none;

  :hover {
    color:#000000; 
    background-color: ${Props => Props.theme.primaryColour};
    text-decoration:none; 
    cursor: pointer;  
  }
`

const Navanchor: React.FC<Props> = ({children, href}) => {
  return (
    <WrapperDiv href={href}>
      {children}
    </WrapperDiv> 
  )
};

export default Navanchor
