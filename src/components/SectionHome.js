import React from "react";
import styled from "styled-components";
import BackgroundSquares from "./BackgroundSquares";

export default () => {
  return (
    <Section>
      <BackgroundSquares number={4} />
      <div style={{ color: "rgba(255, 255, 255, 0.9)" }} className="text">
        <span className="big">
          Hello, I'm Roberto Reale.
          <br />
          I'm a Full Stack Developer.
        </span>
        <span>Scroll down to see my work.</span>
      </div>
    </Section>
  );
};

const Section = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  min-height: 100vh;

  font-size: calc(2vmin + 10px);
  font-weight: lighter;

  span {
    text-align: center;
  }

  .text {
    position: absolute;
    display: flex;
    flex-direction: column;
    bottom: 20vh;
    z-index: 10;
  }

  .big {
    color: rgb(255, 255, 255, 0.9);
    font-size: calc(2vmin + 15px);
    font-weight: bold;
  }
`;
