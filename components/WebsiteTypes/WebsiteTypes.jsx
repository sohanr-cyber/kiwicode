import React from "react";
import styles from "../../styles/WebsiteTypes.module.css";
import { websiteTypes as data } from "../../data";
import Image from "next/image";
import WebsiteType from "./WebsiteType";

const WebsiteTypes = () => {
  return (
    <div className={styles.wrapper} id="websites">
      <h1>What Types of Website We will Build for you</h1>
      <p>
        At Quince, we're architects of the digital realm, creating immersive and
        functional online experiences tailored to your unique needs. Our
        expertise lies in crafting a diverse array of websites that redefine
        digital presence. From engaging business platforms to visually stunning
        portfolios, our portfolio encapsulates a myriad of digital landscapes.
        Here's a glimpse into the types of websites we specialize in:
      </p>

      <div className={styles.flex}>
        {data.map((item, index) => (
          <WebsiteType item={item} key={index} index={index} />
        ))}
      </div>
    </div>
  );
};

export default WebsiteTypes;
