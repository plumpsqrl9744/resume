import React from "react";
import Intro from "./details/Intro";
import Section from "../component/Section";
import Career from "./details/Career";
import Project from "./details/Project";
import Education from "./details/Education";
import Skills from "./details/Skills";

export default function Main() {
  return (
    <div>
      <Section isProfile={true}>
        <Intro />
      </Section>
      <Section title="Career.">
        <Career />
      </Section>
      <Section title="Project.">
        <Project />
      </Section>
      <Section title="Skills.">
        <Skills />
      </Section>
      <Section title="Education.">
        <Education />
      </Section>
    </div>
  );
}
