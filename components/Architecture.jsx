import React from "react";
import styles from "../styles/Architecture.module.css";
import Image from "next/image";
import { architecture } from "../data";
import Logo from "./utils/Logo";
import { useRouter } from "next/router";
import { offer } from "../utils/data";
import t from "../utils/dict";
const colors = [
  "rgb(255, 0, 0, 0.1)",
  "rgb(0, 129, 0, 0.1)",
  "rgb(255, 255, 0, 0.1)",
  "rgb(131, 0, 131, 0.1)",
];
const Work = () => {
  const router = useRouter();
  const { locale } = router
  return (
    <div className={styles.work__wrapper} id="service">
      <Logo /> <h1>
        {offer[locale].h1}
      </h1>
      <p>
        {offer[locale].p}
      </p>
      <div className={styles.grid}>
        {offer[locale].offers.map((item, index) => (
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
        {t("contactUs", locale)}
      </div>
    </div>
  );
};

export default Work;
