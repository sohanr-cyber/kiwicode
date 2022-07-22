import React from "react";
import styles from "../styles/Header.module.css";
const Header = () => {

    
  return (
    <div className={styles.header} id="header">
      <h1>
        Welcome to CryptoCade. Get the Best Crypto Signals and Trade Crypto Like
        a Professional
      </h1>

      <p>
        We are helping many people through the current situation in the crypto
        market, and we are helping them achieve financial freedom. Give us a try
        and you will soon be the most successful trader in the room.
      </p>
      <div className={styles.flex}>
        <div className={styles.btn}>By memebership</div>
        <div className={styles.btn}>Join free</div>
      </div>
    </div>
  );
};

export default Header;
