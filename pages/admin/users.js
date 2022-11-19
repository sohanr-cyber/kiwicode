import React from "react";
import UserTable from "../../components/Admin/UserTable";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

const admin = () => {
  return (
    <>
      <Navbar />
      <UserTable />
      <Footer />
    </>
  );
};

export default admin;
