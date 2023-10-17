import styles from "../../styles/Project/Project.module.css";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const Project = ({ p, index }) => {
  const [imageDominantColor, setImageDominantColor] = useState(null);

  return (
    <div
      className={styles.container}
      style={index % 2 != 0 ? { flexDirection: "row-reverse" } : {}}
    >
      <div className={styles.left}>
        {p.image ? (
          <Image src={p.image} width="1200" height="1000" alt="" />
        ) : (
          <Image
            src="/projects/invh.png"
            width="1000px"
            height="780px"
            alt=""
          />
        )}
      </div>
      <div
        className={styles.right}
        style={imageDominantColor ? { background: imageDominantColor } : {}}
      >
        <div className={styles.title}>{p.title}</div>
        <p>{p.overview}</p>
        {p.technologiesUsed && (
          <p className={styles.tech}>
            technologies-Used :
            {p.technologiesUsed.map((u) => (
              <span>|| {u}</span>
            ))}
          </p>
        )}
        {p.keyFeatures && (
          <p className={styles.tech}>
            keyFeatures :
            {p.keyFeatures.map((u) => (
              <span>|| {u}</span>
            ))}
          </p>
        )}
        {p.git && (
          <p className={styles.link}>
            <span>GitHub</span>
            {p.live && <span>Live Demo</span>}
          </p>
        )}{" "}
      </div>
    </div>
  );
};

export default Project;
