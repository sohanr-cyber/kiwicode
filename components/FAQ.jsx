import React from "react";
import styles from "../styles/Faq.module.css";
import FaqQuestion from "./FaqQuestion";
import { Faqs } from "../data";
const FAQ = () => {
  return (
    <div className={styles.wrapper} id="faq">
      <h2>Frequently Asked Questions</h2>

      <div className={styles.faqs}>
        {Faqs.map((faq) => (
          <FaqQuestion faq={faq} />
        ))}
      </div>
    </div>
  );
};

export default FAQ;
