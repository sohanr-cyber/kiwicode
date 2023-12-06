import Image from "next/image";
import React from "react";
import styles from "../styles/Chat.module.css";
import { useRouter } from "next/router";
import Chatbox from "./Chat/Chatbox";
import Auth from "./Auth";

const Chat = () => {
  const router = useRouter();
  const user = false;

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.chat__link}>
          <div
            className={styles.icon}
            onClick={() => router.push(user ? "?chat=true" : "?auth=true")}
          >
            <div className={styles.chat}>Chat with One Of Our Admin</div>
            <Image
              src="https://cdn-icons-png.flaticon.com/128/684/684849.png"
              width="35px"
              height="35px"
              alt="inst"
            />
          </div>
        </div>
      </div>
      {router.query.chat == "true" && <Chatbox />}
      {router.query.auth == "true" && <Auth />}
    </>
  );
};

export default Chat;
