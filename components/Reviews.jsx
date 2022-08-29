import React from "react";
import styles from "../styles/Reviews.module.css";
import { reviews } from "../data";
const Reviews = () => {
  return (
    <div className={styles.wrapper} id="reviews">
      <h1>What successful traders say about cryptohopper</h1>
      <div className={styles.flex}>
        {reviews.map((review) => (
          <div className={styles.card}>
            <div className={styles.name}>{review.name}</div>
            {/* <div className={styles.star}></div> */}
            <div className={styles.review}>{review.review} </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
