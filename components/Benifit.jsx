import React from "react";
import styles from "../styles/Benifits.module.css";
import Image from "next/image";
import { benifits } from "../data";

const Benifit = () => {
  return (
    <div className={styles.wrapper} id="benifit">
      <h1>Benefits of Joining – InvestHere Family</h1>
      {/* <p className={styles.description}>
        Get up to 80 highly professional crypto trading signals every month on
        telegram for Binance or Bitmex and Bybit exchange. All the ParadiseVIP
        crypto trading calls are made by our Paradise Team and are based on
        technical and fundamental analysis. Our Paradise Team are sharing their
        crypto trades with you, so grab the opportunity and start trading
        cryptocurrency like a pro today!
      </p> */}
      <p></p>

      <div className={styles.benifits}>
        {benifits.map((benifit, index) => (
          <div className={styles.benifit}>
            <div className={styles.title}>
              <span>
                <Image
                  width="35px"
                  height="35px"
                  src="/images/check-mark.png"
                  alt="Check-mark"
                />
              </span>
              <span>{benifit.title}</span>
            </div>
            <p>{benifit.details}</p>
          </div>
        ))}
      </div>

      <p className={styles.description}>
        Don't miss out on the opportunity to grow your wealth with Avocado. By
        joining us, you can access expert investment advice, a wide range of
        investment products, competitive returns, and a convenient and secure
        platform. Sign up now and start achieving your financial goals today
      </p>
    </div>
  );
};

export default Benifit;
