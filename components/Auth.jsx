import React from "react";
import styles from "../styles/Passport.module.css";
const Auth = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div
          className={styles.google__auth}
          onClick={() =>
            window.open("http://localhost:3000/api/login/google", "_self")
          }
        >
          Sign in with Google
        </div>
        <span>X</span>
      </div>
    </div>
  );
};

export default Auth;
