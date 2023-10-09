import React from "react";
import styles from "../../styles/utils/BgLine.module.css";
const items = ["cyan", "rgb(0, 0 , 0, 0.1)", "cyan"];
const ietms2 = [
  "rgb(0, 0 ,255, 0.5)",
  "rgb(0, 0 , 0, 0.1)",
  "rgb(0, 0, 255, 0.5)",
];

const BgLine = () => {
  return (
    <div className={styles.container}>
      <div className={styles.line}>
        {items.map((item) => (
          <div
            className={styles.item}
            style={{ backgroundColor: `${item}` }}
          ></div>
        ))}
      </div>
      <div className={styles.line} style={{ marginTop: "30px" }}>
        {ietms2.map((item) => (
          <div
            className={styles.item}
            style={{ backgroundColor: `${item}` }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default BgLine;
