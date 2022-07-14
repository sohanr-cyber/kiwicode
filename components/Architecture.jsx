import React from "react";
import styles from "../styles/Architecture.module.css";
import Image from "next/image";

const Work = () => {
  return (
    <div className={styles.work__wrapper}>
      <h1>Crypto Signals - How does it work?</h1>
      <p>
        Make as much money as possible in the crypto world! Join our CrytoCade
        Family VIP members now! Get up to 9 crypto signals on Binance or Bitmex
        and Bybit per day, daily insights on the crypto market, daily updates,
        crypto analysis and much more!
      </p>

      <div className={styles.grid}>
        {[1, 2, 2, 2].map((item) => (
          <div className={styles.item}>
            <div className={styles.icon}>
              <Image
                src="/images/statistics.png"
                width="35px"
                height="35px"
                alt=""
              />
            </div>
            <h4 className={styles.title}>Anlysis</h4>
            <div className={styles.detail}>
              Our hybrid set of market indicators and risk strategies ensure
              high profits with low risk. Our traders trade review each crypto
              signal for accuracy before sharing it with our VIP Members
            </div>
          </div>
        ))}
      </div>

      <div className={styles.btn}>Get Membership now</div>
    </div>
  );
};

export default Work;
