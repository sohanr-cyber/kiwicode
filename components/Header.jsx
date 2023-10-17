import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import styles from "../styles/Header.module.css";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
const welcomeData =
  "Code Your Way to Success Where Attractiveness Meets Effectiveness";
const welcomePData =
  "At KiwiCode we're passionate about creating innovative and cutting-edge software solutions. Our mission is to transform your ideas into reality, providing you with software that not only meets your needs but exceeds your expectations.";
const welcomeP2Data =
  "Discover Our Services and Reach Out Today to Explore How We Can Elevate Your Success";
const Header = () => {
  const [welcome, setWelcome] = useState("");
  const [welcomeP, setWelcomeP] = useState("");
  const [welcomeP2, setWelcomeP2] = useState("");
  const router = useRouter();
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
      {/* <video autoPlay={true} muted loop id="myVideo">
        <source src="assets/bg3.mp4" type="video/mp4" />
      </video> */}
      <div className={styles.content}>
        <h1>
          {welcome.split(" ").map((part, index) => (
            <span style={part == "InvestHere" ? { color: "yellowgreen" } : {}}>
              {" " + part}
            </span>
          ))}
        </h1>
        <h3>{welcomeP}</h3> <h3>{welcomeP2}</h3>
        <motion.div
          initial={{ opacity: 0, y: 200000 }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{ duration: 15.5 }}
          className={styles.btn}
          onClick={() => router.push("/#projects")}
        >
          See Our Project
        </motion.div>
      </div>{" "}
      <motion.div
        initial={{ opacity: 0, y: -200000 }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{ duration: 13.5 }}
        className={styles.star}
      ></motion.div>
      <motion.div
        initial={{ opacity: 0, y: -200000 }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{ duration: 14 }}
        className={styles.triangle}
      ></motion.div>
      <motion.div
        initial={{ opacity: 0, x: -200000 }}
        animate={{
          opacity: 1,
          x: 0,
        }}
        transition={{ duration: 14.5 }}
        className={styles.circle_1}
      >
        <div className={styles.inner_cirlce_1}></div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 200000 }}
        animate={{
          opacity: 1,
          x: 0,
        }}
        transition={{ duration: 15 }}
        className={styles.circle_2}
      >
        <div className={styles.inner_cirlce_1}></div>
      </motion.div>
    </div>
  );
};

export default Header;
