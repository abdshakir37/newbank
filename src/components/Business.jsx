import React from "react";
import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";

const FeatureCard = ({ icon, title, content, index }) => (
  <div
    className={`flex flex-row p-6 rounded-2xl ${
      index !== features - 1 ? "mb-6" : "mb-0"
    } feature-card`}
  >
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter}`}>
      <img src={icon} alt="icon" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins text-white font-semibold mb-1">{title}</h4>
      <p className="font-poppins text-dimWhite  mb-1">{content}</p>
    </div>
  </div>
);

const Business = () => {
  return (
    <section className={layout.section} id="features">
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          You do the business, <br /> we'll handle the money
        </h2>
        <p className={`${styles.paragraph} max-w-[500px] mt-4 `}>
          Focus on your business's growth and gains, We'll manage your finances,
          easing your strains, Efficient handling, as prosperity sustains.
        </p>
        <Button styles="mt-8" />
      </div>

      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((feature, index) => (
          <FeatureCard key={feature.id} {...feature} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Business;
