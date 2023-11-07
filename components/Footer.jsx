import React from "react";
import styles from "../styles/Footer.module.css";
import Image from "next/image";
import CopyrightIcon from "@mui/icons-material/Copyright";
import Logo from "./utils/Logo";
import { useRouter } from "next/router";

const Footer = () => {
  const router = useRouter();
  return (
    <div className={styles.wrapper} id="footer">
      <div className={styles.grid}>
        {" "}
        <div className={styles.left}>
          <logo></logo>
          <div className={styles.name}>
            <Logo />
          </div>
        </div>
        <div className={styles.mid}>
          <h3 className={styles.contact}>Contact Us</h3>
          <div className={styles.email}>
            Eamil us : <span> testEmail@gmail.com</span>
          </div>
          {/* <div className={styles.telegram}>
            Telegram : Click <span>Here</span> to contact use
          </div> */}
          <div className={styles.flex}>
            <div className={styles.icon}>
              <Image
                src="/images/instagram.png"
                width="20px"
                height="20px"
                alt="inst"
              />
            </div>
            <div className={styles.icon}>
              {" "}
              <Image
                src="/images/facebook.png"
                width="20px"
                height="20px"
                alt="inst"
              />
            </div>
            <div className={styles.icon}>
              {" "}
              <Image
                src="/images/telegram.png"
                width="20px"
                height="20px"
                alt="inst"
              />
            </div>
          </div>
        </div>
        <div className={styles.right}>
          <h3 className={styles.heading}>
            <h4>About Quince</h4>
          </h3>
          <p>
            Quince is a leading software development company that specializes in
            delivering innovative solutions tailored to your business needs.
            With a commitment to excellence, we are dedicated to helping
            businesses thrive in the digital age.
          </p>

          <div className={styles.flex}>
            <span onClick={() => router.push("/terms-and-conditions")}>
              Terms & Condition
            </span>
            <span onClick={() => router.push("/privacy-policy")}>Privacy</span>
          </div>
        </div>
      </div>
      <div className={styles.rights}>
        <CopyrightIcon style={{ fontSize: "130%" }} />
        2022 All Rights Reserved
      </div>
    </div>
  );
};

export default Footer;
