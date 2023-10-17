import Image from "next/image";
import React, { useEffect, useState } from "react";
import styles from "../../styles/utils/Logo.module.css";
import { motion } from "framer-motion";
const title = "Kiwi Code";
const colors = [
  "crimson",
  "yellowgreen",
  "gold",
  "purple",
  "aqua",
  "pink",
  "yellow",
  "blue",
  "tomato",
];
const Logo = ({ dyanamic }) => {
  const [image, setImage] = useState(false);

  return (
    <div className={styles.container}>
      {title.split("").map((char, index) =>
        dyanamic ? (
          <motion.span
            initial={{ opacity: 0, y: -20000, x: 20000 }}
            animate={{
              opacity: 1,
              y: 0,
              x: 0,
              transition: { duration: 8.5 + index * 0.25 },
            }}
            style={char == "o" ? { color: "orange" } : { color: colors[index] }}
          >
            {char}
          </motion.span>
        ) : (
          <motion.span
            style={char == "o" ? { color: "orange" } : { color: colors[index] }}
          >
            {char}
          </motion.span>
        )
      )}
    </div>
  );
};

export default Logo;
