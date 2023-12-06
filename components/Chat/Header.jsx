import React from "react";
import styles from "../../styles/Chat/Header.module.css";


const Header = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.heading}>Chat with Quince</div>
    </div>
  );
};

export default Header;
