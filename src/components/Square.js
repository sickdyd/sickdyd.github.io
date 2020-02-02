import React from "react"
import styled from "styled-components"
import { ReactFlashlight } from "react-flashlight"

export default (props) =>
  <Square {...props}>
    <ReactFlashlight darkness={0.5} showCursor={true} size={500}>
      <div className={props.animate + " squareRotation"}></div>
    </ReactFlashlight>
  </Square>

const Square = styled.div`

  position: absolute;

  top: ${props => props.top};
  left: ${props => props.left};
  height: ${props => props.height};
  width: ${props => props.width};

  background-color: red;
  border-radius: 15px;
  box-shadow: 0px 0px 15px 5px rgba(255, 0, 0, 0.3);

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
    border-radius: 15px;

    box-shadow:
      inset 0 0 20px #fff,
      inset 10px 0 20px #f0f,
      inset -10px 0 80px #0ff,
      inset 10px 0 300px #f0f,
      inset -10px 0 300px #0ff,
      0 0 10px #fff,
      -10px 0 40px #f0f,
      10px 0 40px #0ff;


    transition: all 500ms ease-in-out;

    &:hover {
      background-color: purple;
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