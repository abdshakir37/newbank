import React from "react";
import styles from "../style";
import Button from "./Button";

const CallToAction = () => {
  return (
    <section
      className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}
    >
      <div className="flex-1 flex flex-col">
        <h2 className={styles.heading2}>Try our service today</h2>
        <p className={`${styles.paragraph} max-w-[500px] mt-5`}>
          Click on the button to start your journey.
        </p>
      </div>
      <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10 `}>
        <Button />
      </div>
    </section>
  );
};

export default CallToAction;
