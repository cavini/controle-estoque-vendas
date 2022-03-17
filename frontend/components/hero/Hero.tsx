import React from "react";
import styles from "./styles.module.css";
import HomePageBanner from "../HomePageBanner/HomePageBanner";

const Hero = () => {
  // paddingTop will need to be scaled down on desktop, need to find variable to base it out of
  // need to put CSS styles to separate file so I can use media queries to do it
  // width and height of svg might need some reajusting for desktop as well
  return (
    <>
      <div className={styles.contentWrapper}>
        <div className={styles.svgWrapper}>
          <HomePageBanner />
        </div>
      </div>
      <div className={styles.textWrapper}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          phasellus ipsum mattis dignissim odio enim augue. Felis duis bibendum
          egestas nisl elit nisi. Mattis enim, ultrices enim orci tellus mattis
          porta turpis. Et, convallis sed malesuada nam. Fermentum tincidunt
          interdum elementum, neque felis magna tortor maecenas. Pellentesque
          lorem amet porta malesuada.
        </p>
      </div>
    </>
  );
};

export default Hero;
