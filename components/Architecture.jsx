import React from "react";
import styles from "../styles/Architecture.module.css";
import Image from "next/image";
import { architecture } from "../data";
import Logo from "./utils/Logo";
import { useRouter } from "next/router";
const colors = [
  "rgb(255, 0, 0, 0.1)",
  "rgb(0, 129, 0, 0.1)",
  "rgb(255, 255, 0, 0.1)",
  "rgb(131, 0, 131, 0.1)",
];
const Work = () => {
  const router = useRouter();
  return (
    <div className={styles.work__wrapper} id="service">
      <Logo /> <h1>What do we do?</h1>
      <p>
        Quince offers a comprehensive suite of services tailored to elevate your
        digital presence and ensure sustained success
      </p>
      <div className={styles.grid}>
        {architecture.map((item, index) => (
          <div
            className={styles.item}
            style={{
              backgroundColor: `${colors[index]}`,
              boxShadow: `1px 1px 1px 1px ${colors[index]}`,
            }}
          >
            <div className={styles.icon}>
              <Image src={item.icon} width="55px" height="55px" alt="" />
            </div>
            <div className={styles.left}>
              <div className={styles.title}>{item.title}</div>
              <div className={styles.detail}>{item.details}</div>
            </div>
          </div>
        ))}
      </div>
      <div
        className={styles.btn}
        onClick={() => router.push("mailto:sohanur25800@gmail.com")}
      >
        Contact Us
      </div>
    </div>
  );
};

export default Work;
