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
      <span className="copyright">
        Reale Roberto Josef Antonio © 2020
      </span>
    </Section>
  )
}

const Section = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-top: 0vh;

  font-size: calc(2vmin + 10px);
  font-weight: lighter;

  span {
    text-align: center;
  }

  .text {
    display: flex;
    flex-direction: column;
    text-align: center;
    padding: 20px;
  }

  .copyright {
    text-align: center;
    font-size: calc(1vmin + 10px);
    color: #555555;
    margin-bottom: 20px;
  }
`