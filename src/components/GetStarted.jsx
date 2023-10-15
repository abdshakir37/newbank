import React from "react";
import styles from "../style";
import { arrowUp } from "../assets";

const GetStarted = () => {
  return (
    <div
      className={`${styles.flexCenter} w-[140px] h-[140px] bg-blue-gradient rounded-full cursor-pointer p-[2px]`}
    >
      <div
        className={`${styles.flexCenter} flex-col bg-primary w-full h-full rounded-full leading-6`}
      >
        <div className={`${styles.flexStart} flex-row`}>
          <p className="font-poppins font-medium text-[18px] mr-2">
            <span className="text-gradient">Get</span>
          </p>
          <img
            src={arrowUp}
            alt="arrow"
            className="w-[22px] h-[22px] object-contain"
          />
        </div>
        <p className="font-poppins font-medium text-[18px]">
          <span className="text-gradient">Started</span>
        </p>
      </div>
    </div>
  );
};

export default GetStarted;
