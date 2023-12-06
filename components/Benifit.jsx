import React from "react";
import styles from "../styles/Benifits.module.css";
import Image from "next/image";
import { hireUsBenefits } from "../data";

const Benifit = () => {
  return (
    <div className={styles.wrapper} id="benifit">
      <h1>Benefits of Hiring Us</h1>
   
      <p></p>

      <div className={styles.benifits}>
        {hireUsBenefits.map((benifit, index) => (
          <div className={styles.benifit}>
            <div className={styles.title}>
              <span>
                <Image
                  width="35px"
                  height="35px"
                  src="/images/check-mark.png"
                  alt="Check-mark"
                />
              </span>
              <span>{benifit.title}</span>
            </div>
            <p>{benifit.details}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Benifit;
