import React from "react"
import styled from "styled-components"
import ProjectPreview from "./ProjectPreview"
// images
import reactResponsiveDesign from "../imgs/react-responsive-design.png"
import console from "../imgs/console.png"
import reactDynamicBadge from "../imgs/react-dynamic-badge.png"
import reactApiChallenge from "../imgs/react-api-challenge.png"
import reactSearchAutocomplete from "../imgs/react-search-autocomplete.png"
import reactFlashlight from "../imgs/react-flashlight.png"

export default () => {

  return (
    <Section>
      <ProjectPreview
        name={"React api challenge"}
        description={"This is the result of a challenge from a company. Completed in about 15 hours. Is the mockup of a website that shows users, works and single projects."}
        image={reactApiChallenge}
        gh={"https://github.com/sickdyd/react-api-challenge"}
        demo={"https://sickdyd.github.io/react-api-challenge/"}
      />
      <ProjectPreview
        name={"Sickdyd's console"}
        description={"A website with a retro style MS-DOS console for navigation. Built with ReactJS."}
        image={console}
        gh={"https://github.com/sickdyd/console"}
        demo={"https://sickdyd.github.io/console/"}
      />
      <ProjectPreview
        name={"React responsive design"}
        description={"The mock of a website that allows to filter and reorder emails. Is the result of a challenge. Built with ReactJS."}
        image={reactResponsiveDesign}
        gh={"https://github.com/sickdyd/react-responsive-design"}
        demo={"https://sickdyd.github.io/react-responsive-design/"}
      />
      <ProjectPreview
        name={"React Search Autocomplete"}
        description={"A customizable search box."}
        image={reactSearchAutocomplete}
        gh={"https://github.com/sickdyd/react-search-autocomplete"}
        npm={"https://www.npmjs.com/package/react-search-autocomplete"}
        demo={"https://sickdyd.github.io/react-search-autocomplete-demo/"}
      />
      <ProjectPreview
        name={"React Dynamic Badge"}
        description={"A customizable component that shows the number of hidden items and update on resizing. Available on NPM."}
        image={reactDynamicBadge}
        gh={"https://github.com/sickdyd/react-responsive-design"}
        npm={"https://www.npmjs.com/package/react-dynamic-badge"}
        demo={"https://sickdyd.github.io/react-responsive-design/"}
      />
      <ProjectPreview
        name={"React Flashlight"}
        description={"A component that allows to add a flashlight effect to one or more elements."}
        image={reactFlashlight}
        gh={"https://github.com/sickdyd/react-flashlight"}
        npm={"https://www.npmjs.com/package/react-flashlight"}
        demo={"https://sickdyd.github.io/react-flashlight-demo/"}
      />
    </Section>
  )
}

const Section = styled.section`

  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 20px;
  min-height: 100vh;

  z-index: 10;

  h1 {
    margin: 60px 0 60px 0;
    font-size: calc(1vmin + 20px);
    z-index: 10;
  }
`