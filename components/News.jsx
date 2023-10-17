import React from "react";
import styles from "../styles/News.module.css";
import Image from "next/image";
import { blogs } from "../data";
const News = () => {
  return (
    <div className={styles.wrapper} id="news">
      <h1>Latest blog articles</h1>
      <p>Keep up-to-date with the latest Blog From Our Company</p>
      <div className={styles.flex}>
        {blogs.map((item) => (
          <>
            <div className={styles.item}>
              <Image src="/images/news.jpg" width={200} height={100} alt="" />
              <div className={styles.desc}>{item.title} </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default News;
