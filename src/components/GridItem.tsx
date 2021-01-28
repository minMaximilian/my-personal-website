import React from 'react';
import styled from 'styled-components';

interface Props {
  className?: string;
}

const WrapperDiv = styled.div<Props>`
  display: grid;
  ${Props => {
    switch (Props.className) {
      case 'xs':
        return `
          @media only screen and (min-width: 768px) {
            grid-column: span 1;
          }

          @media only screen and (min-width: 1024px) {
            grid-column: span 2;
          }

          @media only screen and (min-width: 1224px) {
            grid-column: span 2;
          }

          @media only screen and (min-width: 1824px) {
            grid-column: span 2;
          }
        `
      case 's':
        return `
          @media only screen and (min-width: 768px) {
            grid-column: span 1;
          }

          @media only screen and (min-width: 1024px) {
            grid-column: span 2;
          }

          @media only screen and (min-width: 1224px) {
            grid-column: span 2;
          }

          @media only screen and (min-width: 1824px) {
            grid-column: span 4;
          }
        `
      case 'm':
        return `
          @media only screen and (min-width: 768px) {
            grid-column: span 2;
          }

          @media only screen and (min-width: 1024px) {
            grid-column: span 4;
          }

          @media only screen and (min-width: 1224px) {
            grid-column: span 4;
          }

          @media only screen and (min-width: 1824px) {
            grid-column: span 6;
          }
        `
      case 'l':
        return `
          @media only screen and (min-width: 768px) {
            grid-column: span 2;
          }

          @media only screen and (min-width: 1024px) {
            grid-column: span 4;
          }

          @media only screen and (min-width: 1224px) {
            grid-column: span 6;
          }

          @media only screen and (min-width: 1824px) {
            grid-column: span 8;
          }
        `

      case 'xl':
        return `
          @media only screen and (min-width: 768px) {
            grid-column: span 2;
          }

          @media only screen and (min-width: 1024px) {
            grid-column: span 4;
          }

          @media only screen and (min-width: 1224px) {
            grid-column: span 6;
          }

          @media only screen and (min-width: 1824px) {
            grid-column: span 10;
        `
        default:
        return `
          @media only screen and (min-width: 768px) {
            grid-column: span 1;
          }

          @media only screen and (min-width: 1024px) {
            grid-column: span 2;
          }

          @media only screen and (min-width: 1224px) {
            grid-column: span 2;
          }

          @media only screen and (min-width: 1824px) {
            grid-column: span 2;
          }
        `
    }
  }};
  `

const GridItem: React.FC<Props> = ({children, className}) => {
  return (
    <WrapperDiv className={className}>
      {children}
    </WrapperDiv> 
  )
};

export default GridItem