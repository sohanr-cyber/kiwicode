import React from "react";
import styles from "../styles/Faq.module.css";
import FaqQuestion from "./FaqQuestion";

const FAQ = () => {
  return (
    <div className={styles.wrapper}>
      <h2>Frequently Asked Questions</h2>
      <div className={styles.topics}>
        Exchange accounts – Methods of Payment – Trading – Our Team
      </div>
      <div className={styles.faqs}>
        {[1, 2, 2, 23].map((item) => (
          <>
            {/* <div className={styles.left}>
              <FaqQuestion />
            </div>
            <div className={styles.right}>
              <FaqQuestion />
            </div> */}
            <FaqQuestion />
          </>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
