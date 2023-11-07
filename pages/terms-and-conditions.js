import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styles from "../styles/TermsAndConditions.module.css";
import { termsAndConditions } from "../data";

const TermsAndConditions = () => {
  return (
    <>
      {/* <Navbar /> */}
      <div className={styles.wrapper}>
        <h1>Quince - Terms and Conditions</h1>
        <p>
          These terms and conditions (the "Agreement") are entered into by and
          between Quince (hereinafter referred to as "the Company" or "we")
          and the party or entity using our software development services
          (hereinafter referred to as "the Client" or "you"). By engaging our
          services, you agree to be bound by the terms and conditions outlined
          herein.
        </p>
        {termsAndConditions.map((item, index) => (
          <>
            <h3>
              {index + 1}.{item.section}
            </h3>
            {item.content.map((e, i) => (
              <p>
                {index + 1}.{i + 1}. {e}
              </p>
            ))}
          </>
        ))}
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default TermsAndConditions;
