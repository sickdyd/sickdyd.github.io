import React from "react"
import styled from "styled-components"
import { ReactFlashlight } from "react-flashlight"

export default (props) =>
  <Square {...props}>
    <ReactFlashlight darkness={0.5} showCursor={true} size={300}>
      <div className={props.animate + " squareRotation"}></div>
    </ReactFlashlight>
  </Square>

const Square = styled.div`

  position: absolute;

  top: ${props => props.top};
  left: ${props => props.left};
  height: ${props => props.height};
  width: ${props => props.width};

  animation: rotate;
  animation-direction: forwards;
  animation-delay: ${props => props.delay};
  animation-duration: ${props => props.duration};
  animation-timing-function: linear;
  animation-iteration-count: infinite;

  .squareRotation {
    position: absolute;
    height: ${props => props.height};
    width: ${props => props.width};
    border-radius: 4px;

    transition: all 200ms ease-in-out;

    &:hover {
      
    }

  .animate {
    box-shadow:
      inset 0 0 50px #fff,
      inset 20px 0 80px #f0f,
      inset -20px 0 80px #0ff,
      inset 20px 0 300px #f0f,
      inset -20px 0 300px #0ff,
      0 0 20px #fff,
      -10px 0 80px #f0f,
      10px 0 80px #0ff;
    }

  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`