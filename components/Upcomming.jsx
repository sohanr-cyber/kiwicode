import React from "react";
import styles from "../styles/Upcomming.module.css";
import Link from "next/link";

const Upcomming = () => {
  return (
    <div
      className={styles.wrapper}
      style={{
        backgroundImage: "url('images/telegram.png')",
      }}
    >
      <div className={styles.left}>
        <h1>Start trading with Cryptoverse for free!</h1>
        <h3>Free to use - no credit card required</h3>
        <Link href="/">Let's get started</Link>
      </div>
      <div className={styles.right}></div>
    </div>
  );
};

export default Upcomming;
