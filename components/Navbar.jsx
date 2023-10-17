import React, { useEffect, useState } from "react";
import styles from "../styles/Navbar.module.css";
import { useRouter } from "next/router";
import MenuIcon from "@mui/icons-material/Menu";
import ClearIcon from "@mui/icons-material/Clear";
import Logo from "./utils/Logo";
import { motion } from "framer-motion";
const Navbar = () => {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    setInterval(() => {
      setVisible((prev) => !prev);
    }, 20000);
  }, []);

  useEffect(() => {
    if (!visible) {
      setVisible(true);
    }
  }, [visible]);

  const user = false;
  return (
    <motion.div
      initial={{ opacity: 0, y: -2000 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: { duration: 10 },
      }}
      className={styles.navbar}
    >
      <div className={styles.nav__logo} onClick={() => router.push("/")}>
        {visible ? <Logo dyanamic={true} /> : <></>}
      </div>

      <motion.div
        initial={{ opacity: 0, y: -20000 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { duration: 12 },
        }}
        className={styles.nav__items}
      >
        <div className={styles.item} onClick={() => router.push("/")}>
          Home
        </div>
        <div className={styles.item} onClick={() => router.push("/#header")}>
          About
        </div>
        <div className={styles.item} onClick={() => router.push("/#projects")}>
          Projects
        </div>
        <div
          className={styles.item}
          onClick={() => router.push("/#architecture")}
        >
          Services
        </div>
        <div className={styles.item} onClick={() => router.push("/#reviews")}>
          Reviews
        </div>
        <div className={styles.item} onClick={() => router.push("/#news")}>
          News
        </div>
      </motion.div>
      <motion.div
        className={styles.nav__right}
        initial={{ opacity: 0, y: -20000 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { duration: 13 },
        }}
      >
        <div className={styles.profile}>
          <div
            className={styles.item}
            onClick={() => router.push("mailto:sohanur25800@gmail.com")}
          >
            Contact
          </div>
        </div>
      </motion.div>
      {!open && (
        <div className={styles.icon} onClick={() => setOpen(true)}>
          <MenuIcon />
        </div>
      )}
      {open && (
        <div className={styles.nav__vertical}>
          <div className={styles.nav__items}>
            <div className={styles.icon} onClick={() => setOpen(false)}>
              <ClearIcon />
            </div>
            <div className={styles.item} onClick={() => router.push("/")}>
              Home
            </div>
            <div
              className={styles.item}
              onClick={() => router.push("/#header")}
            >
              About
            </div>
            <div
              className={styles.item}
              onClick={() => router.push("/#project")}
            >
              Projects
            </div>
            <div
              className={styles.item}
              onClick={() => router.push("/#architecture")}
            >
              Services
            </div>
            <div
              className={styles.item}
              onClick={() => router.push("/#reviews")}
            >
              Reviews
            </div>
            <div className={styles.item} onClick={() => router.push("/#news")}>
              News
            </div>
          </div>

          <div className={styles.nav__right}>
            <div className={styles.profile}>
              <div
                className={styles.item}
                onClick={() => router.push("mailto:sohanur25800@gmail.com")}
              >
                Contact
              </div>
            </div>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default Navbar;
