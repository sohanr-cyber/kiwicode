import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import BillingDetails from "../components/Order/BillingDetails";
import styles from "../styles/Order/Checkout.module.css";

const checkout = () => {
  return (
    <>
      <Navbar />
      <div className={styles.wrapper}>
        <BillingDetails />
      </div>
      <Footer />
    </>
  );
};

export default checkout;
