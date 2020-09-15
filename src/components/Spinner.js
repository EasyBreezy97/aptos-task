import React from 'react';
import styled from 'styled-components'

const Spinner = () => {
  return <Loader>
    <div className="lds-dual-ring"></div>
  </Loader>
}

const Loader = styled('div')`
 {
  display: inline-block;
  width: 80px;
  height: 80px;
  position:absolute;
  top:50%;
  left:50%;
  transform:translate(-50%,-50%);
}
:after {
  content: " ";
  display: block;
  width: 64px;
  height: 64px;
  margin: 8px;
  border-radius: 50%;
  border: 6px solid #fff;
  border-color: #813f3f transparent #813f3f transparent;
  animation: lds-dual-ring 1.2s linear infinite;
}
@keyframes lds-dual-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

`

export default Spinner;