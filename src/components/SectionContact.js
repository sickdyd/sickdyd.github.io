import React from "react"
import styled from "styled-components"

export default () => {

  return (
    <Section>
      <div className="text">
        <span style={{color: "#555555"}}>
          I am located in Osaka, for any enquire please contact me at <span style={{color: "white"}}>roberto.reale.ja@gmail.com</span>
        </span>
      </div>
    </Section>
  )
}

const Section = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-top: 5vh;

  min-height: 20vh;

  font-size: calc(2vmin + 10px);
  font-weight: lighter;

  .text {
    text-align: center;
    padding: 20px;
  }
  span {
    text-align: center;
  }
`