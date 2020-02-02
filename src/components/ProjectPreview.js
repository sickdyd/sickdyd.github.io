import React from "react"
import styled from "styled-components"
import iconGitHub from "../imgs/github.svg"
import iconDemo from "../imgs/demo.svg"
import iconNPM from "../imgs/npm.svg"

export default props => {

  const {
    gh,
    npm,
    demo,
    name,
    description,
  } = props;

  return (
    <ProjectPreview {...props}>
      <div className="container">
        <div className="description">
          <h1>{name}</h1>
          <span>{description}</span>
        </div>
        <div className="links">
          <a href={gh} target="_blank" rel="noopener noreferrer">
            <img className="icon" src={iconGitHub} alt="gh" />
          </a>
          {
            npm &&
            <a href={npm} target="_blank" rel="noopener noreferrer">
              <img className="icon" src={iconNPM} alt="npm" />
            </a>
          }
          <a href={demo} target="_blank" rel="noopener noreferrer">
            <img className="icon" src={iconDemo} alt="demo" />
          </a>
        </div>
      </div>
    </ProjectPreview>
  )
}

const ProjectPreview = styled.div`

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 100vw;

  border-radius: 4px;

  .container {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 90vw;
    max-width: 700px;
    height: 67.5vw;
    max-height: 400px;
    overflow: hidden;

    margin-bottom: 60px;

    background-image: ${props => "url('" + props.image + "')"};
    background-position: center;
    background-size: cover;

    border-radius: 4px;

    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.3);
    z-index: 10;
    transition: all 800ms ease-in-out;
  }

  .description,
  .links {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 0%;
    padding: 0;
    opacity: 0;
    z-index: 10;
    transition: all 200ms ease-in-out;
  }

  .description {
    display: none;
  }

  .links {
    position: absolute;
    display: flex;
    flex-direction: row;
    height: 60px;
    opacity: 1;
    bottom: 0;
    background-color: rgba(31, 31, 31, 1);

    .icon {
      opacity: 1;
    }
  }

  .icon {
    width: 30px;
    height: 30px;
    margin-right: 20px;
    opacity: 1;
  }

  @media (min-width: 1200px) {

    margin: 20px 0 20px 0;

    .container {
      &:hover > .description {
        height: calc(100% - 60px);
        opacity: 1;
      }
      &:hover > .links {
        height: 60px;
        opacity: 1;
      }
      &:hover .icon {
        opacity: 1;
      }
      .icon {
        opacity: 0;
      }
    }

    .icon {
      transition: all 400ms ease-in-out;
    }

    .description,
    .links {
      display: flex;
    }

    .description {
      justify-content: flex-start;
      background-color: rgba(0, 0, 0, 0.9);
      padding: 20px;
    }
    .links {
      position: absolute;
      flex-direction: row;
      bottom: 0;
      height: 0;
      background-color: rgba(31, 31, 31, 1);
    }
  }
`