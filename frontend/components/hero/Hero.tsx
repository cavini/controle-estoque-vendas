import React from "react";
import styles from "../hero/styles.module.css";
import HomePageSvg from "../svgs/HomePageSvg";

const Hero = () => {
  // paddingTop will need to be scaled down on desktop, need to find variable to base it out of
  // need to put CSS styles to separate file so I can use media queries to do it
  // width and height of svg might need some reajusting for desktop as well
  return (
    <>
      <div className={styles.paragraphWrapper}>
        <p className={styles.paragraph}>
          Muito mais <span className={styles.span}>praticidade</span> para
          organizar seu estoque
        </p>
      </div>
      <div className={styles.svgWrapper}>
        <HomePageSvg />
      </div>
    </>
  );
};

export default Hero;
