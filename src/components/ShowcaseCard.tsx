import React from 'react';
import styled from 'styled-components';
import Card from './Card';

interface Props {
  href?: string;
  imgSrc?: string;
  title?: string;
}

const WrapperDiv = styled.a`
  text-decoration: none;
  img {
    width: 100%;
  }
`

const ShowcaseCard: React.FC<Props> = ({children, href, imgSrc, title}) => {
  return (
    <WrapperDiv href={href}>
      <Card>
        {imgSrc ? <img src={imgSrc} ></img> : ''}
        {title ? <h3>{title}</h3> : ''}
        {children}
      </Card>
    </WrapperDiv>
  )
};

export default ShowcaseCard

