import React from "react";
import styles from "../../styles/Project/Projects.module.css";
import Project from "./Project";
import { projects } from "../../data";
import { project } from "../../utils/data";
import { useRouter } from "next/router";
const Projects = () => {
  const { locale } = useRouter()
  return (
    <div className={styles.wrapper} id="projects">
      <h1>
        {project[locale].h1}
      </h1>
      <p>
        {project[locale].p}   </p>
      <div className={styles.projects}>
        {project[locale].projects.map((p, i) => (
          <Project p={p} index={i} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
