import React, { useState } from "react";
import styles from "../styles/Faq.module.css";

const FaqQuestion = ({ faq }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className={styles.question__wrapper}>
      <div className={styles.question} onClick={() => setOpen((prev) => !prev)}>
        {faq.question}
      </div>
      {open && <div className={styles.answer}>{faq.answear}</div>}

      <div className={styles.open} onClick={() => setOpen((prev) => !prev)}>
        {open ? <>-</> : <>+</>}
      </div>
    </div>
  );
};

export default FaqQuestion;
