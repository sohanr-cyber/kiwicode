import React from "react";
import styles from "../../styles/Project/Projects.module.css";
import Project from "./Project";
import { projects } from "../../data";
const Projects = () => {
  return (
    <div className={styles.wrapper} id="projects">
      <h1>Here are what We have built</h1>
      <div className={styles.projects}>
        {projects.map((p, i) => (
          <Project p={p} index={i} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
