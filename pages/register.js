import React from "react";
import styles from "../styles/Auth/Register.module.css";
import Navbar from "../components/Navbar";
import Introduction from "../components/Auth/Introduction";
import RegistrationForm from "../components/Auth/RegistrationForm";
import Footer from "../components/Footer";
const Register = () => {
  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.flex}>
        <Introduction />
        <RegistrationForm />
      </div>
      <Footer />
    </div>
  );
};

export default Register;
