import React from "react";
import styled from "styled-components";

export default (props) => (
  <Square {...props}>
    <div className={"square-shadow"}></div>
  </Square>
);

const Square = styled.div`
  position: absolute;
  transform: translateZ(0);
  will-change: transform;

  top: ${(props) => props.top};
  left: ${(props) => props.left};
  height: ${(props) => props.height};
  width: ${(props) => props.width};

  border-radius: 15px;

  animation: rotate;
  animation-direction: forwards;
  animation-delay: ${(props) => props.delay};
  animation-duration: ${(props) => props.duration};
  animation-timing-function: linear;
  animation-iteration-count: infinite;

  transition: all 1000ms ease-in-out;

  .square-shadow {
    transform: translateZ(0);
    will-change: box-shadow;

    position: absolute;
    height: ${(props) => props.height};
    width: ${(props) => props.width};
    border-radius: 15px;

    box-shadow: inset 0 0 20px rgba(255, 255, 255, 0.3),
      inset 10px 0 20px rgba(255, 0, 255, 0.3),
      inset -10px 0 80px rgba(0, 255, 255, 0.3),
      inset 10px 0 300px rgba(255, 0, 255, 0.3),
      inset -10px 0 300px rgba(0, 255, 255, 0.3), 0 0 10px #fff,
      -10px 0 40px #f0f, 10px 0 40px #0ff;

    transition: all 500ms ease-in-out;

    &:hover {
      box-shadow: inset 0 0 50px #fff, inset 20px 0 80px #f0f,
        inset -20px 0 80px #0ff, inset 20px 0 300px #f0f,
        inset -20px 0 300px #0ff, 0 0 20px #fff, -10px 0 80px #f0f,
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
`;
