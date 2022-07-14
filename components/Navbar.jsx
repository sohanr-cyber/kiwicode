import React from "react";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  const user = false;
  return (
    <div className={styles.navbar}>
      <div className={styles.nav__logo}>
        Crypto<span>C</span>ade
      </div>
      <div className={styles.nav__items}>
        <div className={styles.item}>Home</div>
        <div className={styles.item}>About</div>
        <div className={styles.item}>Pricing</div>
        <div className={styles.item}>Services</div>
        <div className={styles.item}>News</div>
      </div>

      <div className={styles.nav__right}>
        {user ? (
          <div className={styles.profile}>Mark 41</div>
        ) : (
          <>
            <div className={styles.sign}>Log in</div>
            <div className={styles.sign}>Sign up</div>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
