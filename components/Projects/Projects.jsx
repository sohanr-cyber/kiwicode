import React from "react";
import styles from "../../styles/Project/Projects.module.css";
import Project from "./Project";
import { projects } from "../../data";
const Projects = () => {
  return (
    <div className={styles.wrapper} id="projects">
      <h1>Here are what We have built</h1>
      <p>
        Explore our journey at Quince, where innovation is the cornerstone of
        our success. Our portfolio represents a testament to our dedication,
        showcasing cutting-edge software solutions that redefine industry
        benchmarks. Each creation, meticulously designed and impeccably
        executed, speaks volumes about our commitment to excellence
      </p>
      <div className={styles.projects}>
        {projects.map((p, i) => (
          <Project p={p} index={i} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
