import React from 'react';

export const cloneAndPopulate = (props) => {
  // função que irá mapear cada component filho passado ao pai
  // params => array, callback
  return React.Children.map(props.children, (child) => {
    // função que clona elemtos recebidos para assim alterá-los
    // no caso recebe as propriedades do pai e a propria
    return React.cloneElement(child, {
      ...props,
      ...child.props,
    });
  });
};
