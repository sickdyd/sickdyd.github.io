import React from "react";
import PropTypes from "prop-types";
import Square from "./Square";

export default function BackgroundSquares() {
  const squares = [
    {
      left: "15vw",
      top: "0",
      width: "10vmax",
      height: "10vmax",
      delay: Math.random() * -55000 + "ms",
      duration: Math.random() * 25000 + 55000 + "ms",
    },
    {
      left: "25vw",
      top: "5vh",
      width: "20vmax",
      height: "20vmax",
      delay: Math.random() * -55000 + "ms",
      duration: Math.random() * 25000 + 55000 + "ms",
    },
    {
      left: "35vw",
      top: "25vh",
      width: "25vmax",
      height: "25vmax",
      delay: Math.random() * -55000 + "ms",
      duration: Math.random() * 25000 + 55000 + "ms",
    },
    {
      left: "45vw",
      top: "45vh",
      width: "35vmax",
      height: "35vmax",
      delay: Math.random() * -55000 + "ms",
      duration: Math.random() * 25000 + 55000 + "ms",
    },
    {
      left: "25vw",
      top: "145vh",
      width: "10vmax",
      height: "10vmax",
      delay: Math.random() * -55000 + "ms",
      duration: Math.random() * 25000 + 55000 + "ms",
    },
    {
      left: "65vw",
      top: "200vh",
      width: "15vmax",
      height: "15vmax",
      delay: Math.random() * -55000 + "ms",
      duration: Math.random() * 25000 + 55000 + "ms",
    },
    {
      left: "15vw",
      top: "250vh",
      width: "10vmax",
      height: "10vmax",
      delay: Math.random() * -55000 + "ms",
      duration: Math.random() * 25000 + 55000 + "ms",
    },
  ];

  return squares.map((shape, i) => <Square key={"square" + i} {...shape} />);
}

BackgroundSquares.propTypes = {
  number: PropTypes.number,
};

BackgroundSquares.defaultProps = {
  number: 1,
};
