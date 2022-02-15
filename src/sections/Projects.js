import React from 'react'
import styled from 'styled-components'
import ProjectPreview from '../components/ProjectPreview'

export default () => {
  return (
    <Section>
      <ProjectPreview
        name={'TS Map Cache'}
        description={
          <>
            A simple NPM package to allow caching function calls.
            <br />
            <br />
            Technologies: TypeScript
          </>
        }
        image={'ts-map-cache'}
        gh={'https://github.com/sickdyd/ts-map-cache'}
        npm={'https://www.npmjs.com/package/ts-map-cache'}
      />
      <ProjectPreview
        name={'React Search Autocomplete'}
        description={
          <>
            A component inspired by the Google search box, completely customizable.
            <br />
            <br />
            Technologies: React, TypeScript
          </>
        }
        image={'react-search-autocomplete'}
        gh={'https://github.com/sickdyd/react-search-autocomplete'}
        npm={'https://www.npmjs.com/package/react-search-autocomplete'}
        demo={'https://sickdyd.github.io/react-search-autocomplete/'}
      />
      <ProjectPreview
        name={'Weather App'}
        description={
          <>
            The Weather App is a simple application built do display the weather of your current
            location.
            <br />
            <br /> Technologies: React, Razzle, TypeScript, Redux, Emotion, Express, Axios
          </>
        }
        image={'weather-app'}
        gh={'https://github.com/sickdyd/weather-app'}
        demo={'https://weather-app-sickdyd.vercel.app/'}
      />
      <ProjectPreview
        name={'TokyoCatch'}
        description={
          <>
            A website to play cranes online.
            <br />
            <br /> Technologies: React, TypeScript, Node.js, GraphQL and MongoDB.
          </>
        }
        image={'tc'}
        demo={'https://tokyocatch.com'}
      />
      <ProjectPreview
        name={'React Dynamic Badge'}
        description={
          'A component that shows a number corresponding to the number of email recipients that are not visible. Resize the window to see the badge in action.'
        }
        image={'react-responsive-design'}
        gh={'https://github.com/sickdyd/react-dynamic-badge'}
        npm={'https://www.npmjs.com/package/react-dynamic-badge'}
      />
      <ProjectPreview
        name={"Sickdyd's console"}
        description={'A retro style MS-DOS console website. Built with ReactJS.'}
        image={'console'}
        demo={'https://sickdyd.github.io/console/'}
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
