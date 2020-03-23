import React from "react"
import styled from "styled-components"
import ProjectPreview from "./ProjectPreview"

export default () => {

  return (
    <Section>
      <ProjectPreview
        name={"Portfolio portal"}
        description={"Completed in about 15 hours. The mockup of a website that shows users, works and single projects."}
        image={"react-api-challenge"}
        gh={"https://github.com/sickdyd/react-api-challenge"}
        demo={"https://sickdyd.github.io/react-api-challenge/"}
      />
      <ProjectPreview
        name={"Sickdyd's console"}
        description={"A retro style MS-DOS console website. Built with ReactJS."}
        image={"console"}
        gh={"https://github.com/sickdyd/console"}
        demo={"https://sickdyd.github.io/console/"}
      />
      <ProjectPreview
        name={"React Search Autocomplete"}
        description={"A replica of the Google search box, completely customizable."}
        image={"react-search-autocomplete"}
        gh={"https://github.com/sickdyd/react-search-autocomplete"}
        npm={"https://www.npmjs.com/package/react-search-autocomplete"}
        demo={"https://sickdyd.github.io/react-search-autocomplete-demo/"}
      />
      <ProjectPreview
        name={"React Dynamic Badge"}
        description={"The badge shows a number corresponding to the number of email recipients that are not visible. Resize the window to see the badge in action."}
        image={"react-responsive-design"}
        gh={"https://github.com/sickdyd/react-dynamic-badge"}
        npm={"https://www.npmjs.com/package/react-dynamic-badge"}
        demo={"https://sickdyd.github.io/react-responsive-design/"}
      />
      <ProjectPreview
        name={"React Flashlight"}
        description={"A project done for fun. A component that allows to add a flashlight effect to one or more elements."}
        image={"react-flashlight"}
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
    font-size: calc(2vmin + 20px);
    z-index: 10;
  }
`