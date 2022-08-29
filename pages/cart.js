import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import CartTable from "../components/Order/CartTable";
import CartTotal from "../components/Order/CartTotal";
import styles from "../styles/Order/Cart.module.css";

const cart = () => {
  return (
    <>
      <Navbar />
      <div className={styles.wrapper}>
        <CartTable />
        <CartTotal />
      </div>
      <Footer />
    </>
  );
};

export default cart;
