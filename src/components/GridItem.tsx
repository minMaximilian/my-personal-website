import React from 'react';
import styled from 'styled-components';

interface Props {
  className?: string;
}

const WrapperDiv = styled.div<Props>`
  display: grid;
  grid-column: span 1;
  color: ${Props => Props.theme.textColour};

  @media only screen and (min-width: 768px) {
    grid-column: span ${Props => (Props.className==='xs' && 1) || (Props.className && 2) || 1};
  }

  @media only screen and (min-width: 1024px) {
    grid-column: span ${Props => (Props.className==='xs' && 2) || (Props.className==='s' && 2) || (Props.className && 4) || 2};
  }

  @media only screen and (min-width: 1224px) {
    grid-column: span ${Props => (Props.className==='xs' && 2) || (Props.className==='s' && 2) || (Props.className==='m' && 4) || (Props.className && 6) || 2};
  }

  @media only screen and (min-width: 1824px) {
    grid-column: span ${Props => (Props.className==='xs' && 2) || (Props.className==='s' && 2) || (Props.className==='m' && 6) || (Props.className==='l' && 8) || (Props.className==='xl' && 10) || 2};
  }
`

const GridItem: React.FC<Props> = ({children, className}) => {
  return (
    <WrapperDiv className={className}>
      {children}
    </WrapperDiv> 
  )
};

export default GridItem