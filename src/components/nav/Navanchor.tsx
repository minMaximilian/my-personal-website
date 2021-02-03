import React from 'react';
import styled from 'styled-components';

interface Props {
  href?: string;
}

const WrapperDiv = styled.a`
  @media only screen and (max-width: 1023px) {
    border-bottom: solid ${Props => Props.theme.secondaryColour} 1px;
  }

  color: ${Props => Props.theme.textColour};
  font-size: 1.5rem;
  display: flex;
  padding: 1rem 1.5rem .75rem 1.5rem;
  text-decoration: none;
  justify-content: center;

  :hover {
    color: ${Props => Props.theme.textColour}; 
    background-color: ${Props => Props.theme.secondaryColour};
    text-decoration: none; 
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
