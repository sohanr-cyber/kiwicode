import React from "react";
import styles from "../styles/Architecture.module.css";
import Image from "next/image";
import { architecture } from "../data";
import Logo from "./utils/Logo";

const Work = () => {
  return (
    <div className={styles.work__wrapper} id="architecture">
      <Logo /> <h1>What do we do?</h1>
      <div className={styles.grid}>
        {architecture.map((item) => (
          <div className={styles.item}>
            <div className={styles.icon}>
              <Image src={item.icon} width="35px" height="35px" alt="" />
            </div>
            <h4 className={styles.title}>{item.title}</h4>
            <div className={styles.detail}>{item.details}</div>
          </div>
        ))}
      </div>
      <div className={styles.btn}>Contact Us</div>
    </div>
  );
};

export default Work;
