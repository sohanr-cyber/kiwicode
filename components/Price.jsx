import React from "react";
import styles from "../styles/Price.module.css";
import { Prices } from "../data";
const Price = () => {
  return (
    <div className={styles.wrapper} id="price">
      <h1>Pricing</h1>
      <p>
        You can see our pricing below. In the FAQ section, you will find answers
        to the most frequented questions.
      </p>
      <div className={styles.flex}>
        {Prices.map((price) => (
          <div className={styles.price__card}>
            <h3>{price.title}</h3>
            <div className={styles.time}>{price.time} </div>
            <div className={styles.price}>$ {price.price}</div>
            <div className={styles.description}>{price.details}</div>
            <div className={styles.btn}>Buy Now</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Price;
