import React from 'react';
import styled from 'styled-components';

interface Props {
  href?: string;
}

const WrapperDiv = styled.a`
  @media only screen and (max-width: 1023px) {
    border-bottom: solid ${Props => Props.theme.secondaryMono} 1px;
  }

  font-size: 1.5rem;
  display: flex;
  padding: 1rem 1.5rem .75rem 1.5rem;
  color: #000000;
  text-decoration: none;
  justify-content: center;

  :hover {
    color:#000000; 
    background-color: ${Props => Props.theme.secondaryMono};
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
