import React from 'react';
import Frame from './Frame';

const Card: React.FC = ({children}) => {
  return (
    <Frame>
      {children}
    </Frame> 
  )
};

export default Card