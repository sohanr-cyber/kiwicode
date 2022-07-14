import React from "react";
import styles from "../styles/Price.module.css";

const Price = () => {
  return (
    <div className={styles.wrapper}>
      <h1>Pricing</h1>
      <p>
        You can see our pricing below. In the FAQ section, you will find answers
        to the most frequented questions.
      </p>
      <div className={styles.flex}>
        {[1, 2, 3].map((item) => (
          <div className={styles.price__card}>
            <h3>Blue Premium</h3>
            <div className={styles.time}>1 Month </div>
            <div className={styles.price}>$ 42</div>
            <div className={styles.description}>
              2-3 Signals Daily 82% Success Rate Entry, Take Profit & Stop Loss
              Amount To Risk Per Trade Risk Reward Ratio
            </div>
            <div className={styles.btn}>Buy Now</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Price;
