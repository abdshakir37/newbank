import React from "react";
import { feedback } from "../constants";
import styles from "../style";
import { card } from "../assets";
import Feedback from "./Feedback";

const Testimonial = () => {
  return (
    <section
      id="clients"
      className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}
    >
      <div className="z-0 absolute w-[60%] h-[60%] -right-[50%]  rounded-full blue__gradient"></div>
      {/* to-do */}
      <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
        <h1 className={styles.heading2}>
          What people are <br className="sm:block hidden" />
          saying about us
        </h1>
      </div>

      <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
        {feedback.map((card) => (
          <Feedback key={card.id} {...card} />
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
