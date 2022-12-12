import Image from "next/image";
import React from "react";
import styles from "../../styles/Profile/UserInfo.module.css";

const ProfileInfo = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.shape}>
        <div className={styles.position}>Campus Ambassador</div>
      </div>
      <div className={styles.photo__wrapper}>
        <div className={styles.profile__photo}>
          <Image
            src="https://cdn-icons-png.flaticon.com/512/4333/4333609.png"
            width="150px"
            height="150px"
            alt=""
          />
        </div>
      </div>
      <div className={styles.others__info}>
        <div className={styles.name}>John Smith</div>
        <div className={styles.email}>john44@gmail.com</div>
      </div>

      <div className={styles.star}></div>
      <div className={styles.triangle}></div>
      <div className={styles.circle_1}>
        <div className={styles.inner_cirlce_1}></div>
      </div>
      <div className={styles.circle_2}>
        <div className={styles.inner_cirlce_1}></div>
      </div>
    </div>
  );
};

export default ProfileInfo;
