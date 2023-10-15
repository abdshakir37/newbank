import React from "react";
import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const Card = () => {
  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Find a better card deal <br className="sm:block hidden" /> in a few
          easy steps
        </h2>
        <p className={`${styles.paragraph}`}>
          Discover your perfect credit card deal by comparing features, fees,
          and benefits to choose the one aligning with your financial
          preferences.
        </p>
        <Button styles="mt-10 rounded-md" />
      </div>

      <div className={layout.sectionImg}>
        <img src={card} alt="card" className="h-full w-full object-contain" />
      </div>
    </section>
  );
};

export default Card;
