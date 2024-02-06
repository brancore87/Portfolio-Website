"use client";

import SectionHeading from "./SectionHeading";
import Project from "./Project";
import React from "react";
import { useSectionInView } from "../lib/hooks";
import { projectsData } from "../lib/data";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-52">
      <SectionHeading>My Projects</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
