import React from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import styles from "./styles.module.css";

const Layout = (props: any) => {
  return (
    <>
      <div className={styles.Layout}>
        <Navbar />
        {props.children}
        <Footer />
      </div>
      <div className={styles.blueBar}></div>
    </>
  );
};

export default Layout;
