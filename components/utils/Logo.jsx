import Image from "next/image";
import React, { useEffect, useState } from "react";
import styles from "../../styles/utils/Logo.module.css";
import { motion } from "framer-motion";
const title = "Cryptocado";
const Logo = () => {
  const [image, setImage] = useState(false);

  return (
    <div className={styles.container}>
      {title.split("").map((char, index) => (
        <motion.span
          initial={{ opacity: 0, y: -20000, x: 20000 }}
          animate={{
            opacity: 1,
            y: 0,
            x: 0,
            transition: { duration: 8.5 + index * 0.25 },
          }}
          style={char == "o" ? { color: "orange" } : {}}
        >
          {char}
        </motion.span>
      ))}
    </div>
  );
};

export default Logo;
