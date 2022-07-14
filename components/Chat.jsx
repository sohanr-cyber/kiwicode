import Image from "next/image";
import React from "react";
import styles from "../styles/Chat.module.css";
const Chat = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.chat__link}>
        <div className={styles.icon}>
          <div className={styles.chat}>Chat with One Of Our traders</div>
          <Image
            src="/images/telegram.png"
            width="35px"
            height="35px"
            alt="inst"
          />
        </div>
      </div>
    </div>
  );
};

export default Chat;
