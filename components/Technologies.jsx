import React from "react";
import styles from "../styles/Technologies.module.css";
import Image from "next/image";

const webDevelopmentTechnologies = [
  {
    name: "Javascript",
    logo: "https://cdn-icons-png.flaticon.com/128/5968/5968292.png",
  },
  {
    name: "ReactJS",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2048px-React-icon.svg.png",
  },
  {
    name: "NextJS",
    logo: "/images/nextjs.png",
  },
  {
    name: "Node.js",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/2048px-Node.js_logo.svg.png",
  },
  {
    name: "Express.js",
    logo: "https://img.icons8.com/?size=100&id=kg46nzoJrmTR&format=png",
  },
  {
    name: "MongoDB",
    logo: "/images/mongodb.png",
  },
  {
    name: "Git",
    logo: "https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/git.svg",
  },
  {
    name: "HTML",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/2048px-HTML5_logo_and_wordmark.svg.png",
  },
  {
    name: "CSS",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/2048px-CSS3_logo_and_wordmark.svg.png",
  },
  {
    name: "Redis",
    logo: "/images/redis.png",
  },
  {
    name: "Redux",
    logo: "https://img.icons8.com/?size=160&id=b6vIINYN0kfW&format=png",
  },
];

const Technologies = () => {
  return (
    <div className={styles.wrapper} id="technologies">
      <h1>What Technologies we use </h1>
      <div className={styles.techs}>
        {webDevelopmentTechnologies.map((item) => (
          <div className={styles.item}>
            <Image src={item.logo} width="50px" height="50px" alt="" />
            <div className={styles.title}>{item.name} </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Technologies;
