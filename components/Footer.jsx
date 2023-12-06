import React from "react";
import styles from "../styles/Footer.module.css";
import Image from "next/image";
import CopyrightIcon from "@mui/icons-material/Copyright";
import Logo from "./utils/Logo";
import { useRouter } from "next/router";

const routes = [
  [
    { title: "Home", route: "/" },
    { title: "About", route: "/about" },
  ],
  [
    { title: "Contact", route: "/" },
    { title: "Projects", route: "/#projects" },
  ],

  [
    { title: "service", route: "/#service" },
    { title: "websites", route: "/#website" },
  ],
  [
    { title: "Technologies", route: "/#technologies" },
    { title: "Privacy Policy ", route: "/#website" },
  ],
  [
    { title: "Terms and Condition", route: "/terms-and-condition" },
    { title: "Career", route: "/" },
  ],
];

const Footer = () => {
  const router = useRouter();
  return (
    <div className={styles.wrapper} id="footer">
      <div className={styles.grid}>
        <div className={styles.left}>
          <logo></logo>
          <div className={styles.name} style={{ textAlign: "left" }}>
            <Logo />
          </div>

          <p>
            Quince is a remote-first company, with team members located across
            the globe. This allows us to access the best talent and keep our
            overhead low, ultimately benefiting our clients. With a commitment
            to excellence, we are dedicated to helping businesses thrive in the
            digital age.
          </p>
        </div>
        <div className={styles.mid}>
          <h2>Our Company</h2>
          {routes.map((item) => (
            <div className={styles.flex}>
              <div
                className={styles.link}
                onClick={() => router.push(item[0].route)}
              >
                {item[0].title}
              </div>
              <div
                className={styles.link}
                onClick={() => router.push(item[1].route)}
              >
                {item[1].title}
              </div>
            </div>
          ))}
        </div>
        <div className={styles.right}>
          <h2 className={styles.contact}>Contact Us</h2>
          <div className={styles.email}>
            Eamil us : <span> testEmail@gmail.com</span>
          </div>
          <div className={styles.phone}>
            Call us : <span> 01744329811</span>
          </div>
          {/* <div className={styles.telegram}>
            Telegram : Click <span>Here</span> to contact use
          </div> */}
          <div className={styles.flex}>
            <div className={styles.icon}>
              <Image
                src="/images/instagram.png"
                width="30px"
                height="30px"
                alt="inst"
              />
            </div>
            <div className={styles.icon}>
              {" "}
              <Image
                src="/images/facebook.png"
                width="30px"
                height="30px"
                alt="inst"
              />
            </div>
            <div className={styles.icon}>
              {" "}
              <Image
                src="/images/telegram.png"
                width="30px"
                height="30px"
                alt="inst"
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <CopyrightIcon style={{ fontSize: "130%" }} />
        2022 All Rights Reserved
      </div>
    </div>
  );
};

export default Footer;
