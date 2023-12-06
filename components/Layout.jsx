import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Chat from "./Chat";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
      <Chat />
    </>
  );
};

export default Layout;
