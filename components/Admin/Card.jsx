import Image from "next/image";
import React from "react";
import styles from "../../styles/Admin/Card.module.css";
import PeopleIcon from "@mui/icons-material/People";
const Card = () => {
  return (
    <div className={styles.card__wrapper}>
      <div className={styles.card__container}>
        {" "}
        <div className={styles.left}>
          <div className={styles.number}>54</div>
          <div className={styles.title}>Customers</div>
        </div>
        <div className={styles.right}>
          <PeopleIcon style={{ fontSize: "220%", color: "blue" }} />
        </div>
      </div>
    </div>
  );
};

export default Card;
