import React from "react";
import Header from "./Header";
import Input from "./Input";
import Box from "./Box";
import styles from "../../styles/Chat/ChatBox.module.css";

const Chatbox = () => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <Box />
      <Input />
    </div>
  );
};

export default Chatbox;
