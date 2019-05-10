import React from 'react';
import loadingSpinner from './loading-spinner.svg';
export default (props) => {
  const size  = props.size ? props.size : '40px';
  return(
    <img width={size} height={size} src={loadingSpinner} />
  );
};
