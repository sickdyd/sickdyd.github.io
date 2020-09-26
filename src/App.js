import React from "react";
import SectionHome from "./components/SectionHome";
import SectionProjects from "./components/SectionProjects";
import SectionContact from "./components/SectionContact";
import "./App.css";

export default function App() {
  return (
    <>
      <SectionHome />
      <SectionProjects />
      <SectionContact />
    </>
  );
}
