import { ReactNode } from "react";
import GoTop from "../components/GoTop";
import H1 from "../components/H1";
import RecentWorkEntry from "../components/RecentWorkItem";
import TextWrapper from "../components/TextWrapper";

export type Project = {
  title: ReactNode;
  contents: ReactNode;
};

export default function RecentWork() {
  return (
    <>
      <TextWrapper>
        <H1 withBack>Projects</H1>
        <p className="text-quinary">
          Here you can check out some of the projects I&apos;ve worked on.
        </p>
      </TextWrapper>
      <RecentWorkEntry
        techStackIcons={["typescript", "redux", "jest"]}
        title="WEATHER APP"
        description="The weather app is a simple application that shows the weather in your current location."
        link="https://github.com/sickdyd/weather-app"
        target="_blank"
        image="projects/weather-app.png"
      />
      <RecentWorkEntry
        techStackIcons={["typescript", "node.js", "jest"]}
        title="TS MAP CACHE"
        description="A library that allows caching function calls."
        link="https://github.com/sickdyd/ts-map-cache"
        target="_blank"
      />
      <RecentWorkEntry
        techStackIcons={["typescript", "jest"]}
        title="REACT SEARCH AUTOCOMPLETE"
        description="A component that provides search autocomplete functionality, inspired to the one used by Google."
        link="https://github.com/sickdyd/react-search-autocomplete"
        target="_blank"
        image="projects/react-search-autocomplete.png"
      />
      <GoTop />
    </>
  );
}
