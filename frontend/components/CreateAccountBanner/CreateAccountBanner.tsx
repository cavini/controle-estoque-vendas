import React from "react";
import styles from "./styles.module.css";
const CreateAccountBanner = () => {
  return (
    <div className={styles.svgContainer}>
      <p>comece agora</p>

      <svg
        width="609"
        height="31"
        viewBox="0 0 609 31"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M607.865 17.1368C608.661 16.3409 608.661 15.0505 607.865 14.2546L594.895 1.28459C594.099 0.488681 592.809 0.488681 592.013 1.28459C591.217 2.08049 591.217 3.37091 592.013 4.16681L603.542 15.6957L592.013 27.2246C591.217 28.0206 591.217 29.311 592.013 30.1069C592.809 30.9028 594.099 30.9028 594.895 30.1069L607.865 17.1368ZM0.717407 17.7337L606.424 17.7338L606.424 13.6577L0.717407 13.6576L0.717407 17.7337Z"
          fill="#FAF9F6"
        />
      </svg>
      <a href="">criar conta</a>
    </div>
  );
};

export default CreateAccountBanner;
