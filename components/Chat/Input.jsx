import React from "react";
import styles from "../../styles/Chat/Input.module.css";
import SendIcon from "@mui/icons-material/Send";
const Input = () => {
  return (
    <div className={styles.wrapper}>
      <input type="text" placeholder="" />
      <span className={styles.button}>
        <SendIcon style={{ fontSize: "190%" }} />
      </span>
    </div>
  );
};

export default Input;
