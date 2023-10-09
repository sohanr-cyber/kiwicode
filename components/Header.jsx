import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import styles from "../styles/Header.module.css";
import { motion } from "framer-motion";
const welcomeData = "Welcome to InvestHere";
const welcomePData =
  " Thank you for visiting our website. We are a leading investment company, dedicated to helping you grow your wealth and achieve your financial goals. Our team of expert advisors is here to help you make informed investment decisions and maximize your returns.";
const welcomeP2Data =
  "Explore our investment products and contact us today to learn more about how we can help you achieve your financial dreams.";
const Header = () => {
  const [welcome, setWelcome] = useState("");
  const [welcomeP, setWelcomeP] = useState("");
  const [welcomeP2, setWelcomeP2] = useState("");

  useEffect(() => {
    let count = 0;
    let interval = setInterval(() => {
      setWelcome((prev) => prev + welcomeData[count]);
      count++;
      if (count >= welcomeData.length) {
        clearInterval(interval);
      }
    }, 60);
  }, []);

  useEffect(() => {
    if (welcome.length >= welcomeData.length) {
      let count = 0;
      let interval = setInterval(() => {
        setWelcomeP((prev) => prev + " " + welcomePData.split(" ")[count]);
        count++;
        if (count >= welcomePData.split(" ").length) {
          clearInterval(interval);
        }
      }, 90);
    }
  }, [welcome]);

  useEffect(() => {
    if (welcomeP.length >= welcomePData.length) {
      let count = 0;
      let interval = setInterval(() => {
        setWelcomeP2((prev) => prev + " " + welcomeP2Data.split(" ")[count]);
        count++;
        if (count >= welcomeP2Data.split(" ").length) {
          clearInterval(interval);
        }
      }, 87);
    }
  }, [welcomeP]);

  return (
    <div className={styles.header} id="header">
      <video autoPlay={true} muted loop id="myVideo">
        <source src="assets/bg-video.mp4" type="video/mp4" />
      </video>
      <div className={styles.content}>
        <h1>
          {welcome.split(" ").map((part, index) => (
            <span style={part == "InvestHere" ? { color: "yellowgreen" } : {}}>
              {" " + part}
            </span>
          ))}
        </h1>
        <p>{welcomeP}</p> <p>{welcomeP2}</p>
      </div>
    </div>
  );
};

export default Header;
