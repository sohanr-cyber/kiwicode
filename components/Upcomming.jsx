import React from "react";
import styles from "../styles/Upcomming.module.css";
import Link from "next/link";

const Upcomming = () => {
  return (
    <div
      className={styles.wrapper}
      style={{
        backgroundImage: "url('images/mobile.jpg')",
        backgroundPosition: "right",
      }}
      id="upcomming"
    >
      <div className={styles.left}>
        <h1>Start trading with Cryptoverse for free!</h1>
        <h3>Free to use - no credit card required</h3>
        <Link href="/">Let's get started</Link>
      </div>
      <div className={styles.right}>
        {/* <h2>Mobile App is Comming !</h2> */}
        <h2 style={{ color: "yellow" }}>
          <a href="assets/nft.apk">Download Our Mobile App</a>
        </h2>
      </div>
    </div>
  );
};

export default Upcomming;
