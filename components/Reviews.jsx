import React from "react";
import styles from "../styles/Reviews.module.css";
import { reviews } from "../data";
import Image from "next/image";
const Reviews = () => {
  return (
    <div className={styles.wrapper} id="reviews">
      <h1>What successful traders say about cryptohopper</h1>
      <div className={styles.flex}>
        {reviews.map((review) => (
          <div className={styles.card}>
            <div className={styles.card__flex}>
              <div className={styles.left}>
                <Image
                  src="https://cdn-icons-png.flaticon.com/512/3665/3665909.png"
                  width="32px"
                  height="32px"
                  alt=""
                />
                <div className={styles.user__data}>
                  <div className={styles.name}>{review.name}</div>
                  <div className={styles.location}>From CreamLine</div>
                </div>
              </div>
              <div className={styles.right}>
                <Image
                  src="https://cdn-icons-png.flaticon.com/512/330/330437.png"
                  width="32px"
                  height="32px"
                  alt=""
                />
              </div>
            </div>
            {/* <div className={styles.star}></div> */}
            <div className={styles.review}>{review.review} </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
