import styles from "../../styles/Project/Project.module.css";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import vibrant from "node-vibrant";
const Project = ({ p, index }) => {
  const [imageDominantColor, setImageDominantColor] = useState(null);
  const router = useRouter();

  useEffect(() => {
    vibrant.from(p.image).getPalette((err, palette) => {
      const colors = palette.Vibrant._rgb;
      // const colors = palette.DarkMuted._rgb;
      // const colors = palette.LightMuted._rgb;
      // const colors = palette.LightVibrant._rgb;
      // const colors = palette.Muted._rgb;

      console.log(palette);
      console.log(colors);
      setImageDominantColor(`rgb(${colors[0]},${colors[1]}, ${colors[2]},0.4)`);
    });
  }, [p]);

  return (
    <div
      className={styles.container}
      style={index % 2 != 0 ? { flexDirection: "row-reverse" } : {}}
    >
      <div className={styles.left}>
        {p.image ? (
          <Image
            src={p.image}
            width="1200"
            height="1000"
            alt=""
            loading="eager"
          />
        ) : (
          <Image
            src={
              "https://images.pexels.com/photos/18523190/pexels-photo-18523190/free-photo-of-autumn-leaves-on-the-tree.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            }
            width="1000px"
            height="780px"
            alt=""
            onLoad={onLoadCallback}
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
            <span onClick={() => router.push(p.git)}>GitHub</span>
            {p.live && (
              <span onClick={() => router.push(p.live)}>Live Demo</span>
            )}
          </p>
        )}{" "}
      </div>
    </div>
  );
};

export default Project;
