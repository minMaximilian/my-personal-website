import React from 'react';
import styled from 'styled-components';

interface Props {
  span?: string;
}

const WrapperDiv = styled.div<Props>`
  display: grid;
  grid-column: span ${Props => Props.span ? Props.span : 1};
  `
// 
const GridItem: React.FC<Props> = ({children, span}) => {
  return (
    <WrapperDiv span={span}>
      {children}
    </WrapperDiv> 
  )
};

export default GridItem