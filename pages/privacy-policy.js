import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styles from "../styles/TermsAndConditions.module.css";
import { QuincePrivacyPolicy } from "../data";

const TermsAndConditions = () => {
  return (
    <>
      <Navbar />
      <div className={styles.wrapper}>
        <h1>Quince - Privacy Policy</h1>
        <p>
          Quince is committed to protecting the privacy of its users. This
          Privacy Policy explains how we collect, use, and disclose your
          personal information when you use our website, products, and services
        </p>

        {QuincePrivacyPolicy.map((item, index) => (
          <>
            <h3>
              {index + 1}.{item.title}
            </h3>
            {item.content.map((e, i) => (
              <p>
                {index + 1}.{i + 1}. {e}
              </p>
            ))}
          </>
        ))}
      </div>
      <Footer />
    </>
  );
};

export default TermsAndConditions;
