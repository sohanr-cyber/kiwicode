import React from "react";
import styles from "../styles/Architecture.module.css";
import Image from "next/image";
import { architecture } from "../data";
import Logo from "./utils/Logo";

const Work = () => {
  return (
    <div className={styles.work__wrapper} id="architecture">
      <Logo /> <h1>How does it work?</h1>
      <p>
        Make as much money as possible in the crypto world! Join our InvestHere
        Family VIP members now! Get up to 9 crypto signals on Binance or Bitmex
        and Bybit per day, daily insights on the crypto market, daily updates,
        crypto analysis and much more!
      </p>
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
      <div className={styles.btn}>Get Membership now</div>
    </div>
  );
};

export default Work;
