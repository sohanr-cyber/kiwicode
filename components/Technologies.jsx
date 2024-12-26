import React from "react";
import styles from "../styles/Technologies.module.css";
import Image from "next/image";
import { useRadioGroup } from "@mui/material";
import { useRouter } from "next/router";

const webDevelopmentTechnologies = [
  {
    name: "Javascript",
    color: "rgb(233, 225, 0)",
    logo: "https://cdn-icons-png.flaticon.com/128/5968/5968292.png",
  },
  {

    name: "ReactJS",
    color: "rgb(0, 166, 255)",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2048px-React-icon.svg.png",
  },
  {
    name: "NextJS",
    color: "rgb(0, 0, 0)",
    logo: "/images/nextjs.png",
  },
  {
    name: "Node.js",
    color: "rgb(27, 167, 11)",
    bg: "rgb(27, 167, 11,0.1)",

    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/2048px-Node.js_logo.svg.png",
  },
  {
    name: "Express.js",
    color: "rgb(0, 0, 0)",
    bg: "rgb(0, 0, 0,0.1)",

    logo: "https://img.icons8.com/?size=100&id=kg46nzoJrmTR&format=png",
  },
  {
    name: "MongoDB",
    color: "rgb(7, 182, 47)",
    bg: "rgb(7, 182, 47,0.1)",
    logo: "/images/mongodb.png",
  },
  {
    name: "Git",
    color: "rgb(18, 4, 53)",
    bg: "rgb(18, 4, 53,0.1)",
    logo: "https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/git.svg",
  },
  {
    name: "HTML",
    color: "rgb(221, 72, 31)",
    bg: "rgb(221, 72, 31,0.1)",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/2048px-HTML5_logo_and_wordmark.svg.png",
  },
  {
    name: "CSS",
    color: "rgb(0, 0, 255)", bg: "rgb(0, 0, 255,0.1)",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/2048px-CSS3_logo_and_wordmark.svg.png",
  },
  {
    name: "Redis",
    color: "rgb(255, 0, 0)",
    bg: "rgb(255, 0, 0,0.1)",
    logo: "/images/redis.png",
  },
  {
    name: "Redux",
    color: "rgb(140, 0, 255)",
    bg: "rgb(140, 0, 255,0.1)",

    logo: "https://img.icons8.com/?size=160&id=b6vIINYN0kfW&format=png",
  },
];

const t = {
  en: { h1: "What Technologies we use" },
  bn: { h1: "আমরা যে টেকনোলজি ব্যবহার করি" }
}

const Technologies = () => {
  const { locale } = useRouter()
  return (
    <div className={styles.wrapper} id="technologies">
      <h1>
        {t[locale].h1} </h1>
      <div className={styles.techs}>
        {webDevelopmentTechnologies.map((item) => (
          <div className={styles.item} style={{ background: `${item.bg}` }}>
            <Image src={item.logo} width="50px" height="50px" alt="" />
            <div className={styles.title} style={{ color: `${item.color}`, }}>{item.name} </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Technologies;
