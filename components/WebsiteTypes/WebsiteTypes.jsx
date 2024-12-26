import React from "react";
import styles from "../../styles/WebsiteTypes.module.css";
import { websiteTypes as data } from "../../data";
import Image from "next/image";
import WebsiteType from "./WebsiteType";
import { useRouter } from "next/router";
import { websiteType } from "../../utils/data";

const WebsiteTypes = () => {
  const router = useRouter()
  const { locale } = router
  return (
    <div className={styles.wrapper} id="websites">
      <h1>
        {websiteType[locale].h1}
      </h1>
      <p>
      {websiteType[locale].p}

      </p>

      <div className={styles.flex}>
        {websiteType[locale].websiteTypes.map((item, index) => (
          <WebsiteType item={item} key={index} index={index} />
        ))}
      </div>
    </div>
  );
};

export default WebsiteTypes;
