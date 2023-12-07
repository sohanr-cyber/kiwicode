import React, { useEffect, useState } from "react";
import styles from "../../styles/WebsiteTypes.module.css";
import Image from "next/image";
import { useRouter } from "next/router";
import Vibrant from "node-vibrant";
import slugify from "slugify";
const WebsiteType = ({ item, index }) => {
  const [imageDominantColor, setImageDominantColor] = useState(null);
  const router = useRouter();
  const [surfaceColor, setSurfaceColor] = useState();
  return (
    <div
      className={styles.item}
      style={
        index % 2 == 0 ? { marginTop: "-35px" } : { marginBottom: "-35px" }
      }
    >
      <div className={styles.pic}>
        <div
          className={styles.surface}
          style={
            surfaceColor
              ? {
                  background: `linear-gradient(360deg , ${surfaceColor}, rgb(0 , 0 , 0 , 0))`,
                }
              : {}
          }
        ></div>
        <Image
          src={
            item.images
              ? item.images[0]
              : "https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg?auto=compress&cs=tinysrgb&w=600"
          }
          alt=""
          width="250px"
          height="180px"
        />
      </div>
      <div className={styles.bottom}>
        <div className={styles.title}>{item.type}</div>
        <div className={styles.description}>
          {item.description.length > 150
            ? `${item.description.substring(0, 150)}...`
            : item.description}
        </div>
        <div
          className={styles.btn}
          onClick={() => router.push(`/websiteType/${slugify(item.type)}`)}
        >
          Learn More
        </div>
      </div>
    </div>
  );
};

export default WebsiteType;
