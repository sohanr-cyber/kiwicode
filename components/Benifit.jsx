import React from "react";
import styles from "../styles/Benifits.module.css";
import Image from "next/image";
import { hireUsBenefits } from "../data";
import { hireUsBenefit } from "../utils/data";
import { useRouter } from "next/router";

const Benifit = () => {
  const { locale } = useRouter()
  return (
    <div className={styles.wrapper} id="benifit">
      <h1>
        {hireUsBenefit[locale].h1}
      </h1>

      <p></p>

      <div className={styles.benifits}>
        {hireUsBenefit[locale].hireUsBenefits.map((benifit, index) => (
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
