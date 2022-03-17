import React from "react";
import styles from "./styles.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.linkContainer}>
        <a href="">Termos de Uso</a> | <a href="">Política de Privacidade</a>
      </div>
      <p>© 2022 - DIREITOS RESERVADOS</p>

      <div className={styles.blueBar}></div>
    </footer>
  );
};

export default Footer;
