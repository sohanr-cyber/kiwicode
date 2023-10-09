import React from "react";
import styles from "../../styles/utils/Confetti.module.css";
import Confetti from "react-confetti";
import { useState } from "react";
import { useEffect } from "react";

const Confettie = ({ setConfettiOn }) => {
  const [screenDimensions, setScreenDimensions] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 0,
    height: typeof window !== "undefined" ? window.innerHeight : 0,
  });
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    function handleResize() {
      setScreenDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setIsRunning(false);
    }, 5000);
  }, []);

  useEffect(() => {
    !isRunning &&
      setTimeout(() => {
        setConfettiOn(false);
      }, 3000);
  }, [isRunning]);

  return (
    <div className={styles.container}>
      <Confetti
        width={screenDimensions.width}
        height={screenDimensions.height}
        numberOfPieces={350}
        recycle={isRunning}
        gravity={0.11}
        // confettiSource={{
        //   x: screenDimensions.width,
        //   y: screenDimensions.height,
        // }}

        // wind={0.01}
        // colors={["#FF4136", "#0074D9", "#B10DC9"]}
      />
    </div>
  );
};

export default Confettie;
