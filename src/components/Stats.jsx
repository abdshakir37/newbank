import React from "react";
import { stats } from "../constants";

import style from "../style";
import styles from "../style";

const Stats = () => {
  return (
    <section
      className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}
    >
      {stats.map((stats) => (
        <div
          key={stats.id}
          className={`flex-1 flex justify-start items-center m-3`}
        >
          <h4 className="font-poppins font-semibold xs:text-[40px] text-[30px] xs:leading-[50px] leading-[40px] text-white">
            {stats.value}
          </h4>
          <p className="font-poppins  xs:text-[20px] text-[16px] xs:leading-[30px] leading-[25px] text-gradient uppercase ml-3">
            {stats.title}
          </p>
        </div>
      ))}
    </section>
  );
};

export default Stats;
