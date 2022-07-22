import React from "react";
import styles from "../styles/News.module.css";
import Image from "next/image";
const News = () => {
  return (
    <div className={styles.wrapper} id="news">
      <h1>Latest blog articles</h1>
      <p>
        Keep up-to-date with the latest trading trends and expert insights on
        the world of cryptocurrencies, ICOs, and blockchain technology.
      </p>
      <div className={styles.flex}>
        {[1, 2, 2, 2, 2, 2, 2].map((item) => (
          <>
            <div className={styles.item}>
              <Image src="/images/news.jpg" width={200} height={100} alt="" />
              <div className={styles.desc}>
                Ethereum Has Confirmed a Breakout from the Ascending Triangle
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default News;
