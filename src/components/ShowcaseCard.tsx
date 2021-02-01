import React from 'react';
import styled from 'styled-components';
import Card from './Card';

interface Props {
  href?: string;
  imgSrc?: string;
}

const WrapperDiv = styled.a`
  
`

const ShowcaseCard: React.FC<Props> = ({children, href, imgSrc}) => {
  return (
    <WrapperDiv href={href}>
      <Card>
        {imgSrc ? <img src={imgSrc} ></img> : ''}
        {children}
      </Card>
    </WrapperDiv>
  )
};

export default ShowcaseCard

