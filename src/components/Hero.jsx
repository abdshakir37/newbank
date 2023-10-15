import React from "react";
import styles from "../style";
import { discount, robot } from "../assets";
import GetStarted from "./GetStarted";

const Hero = () => {
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        <div className="flex flex-row items-center py-[6px] bg-discount-gradient rounded-sm mb-2 px-2">
          <img className="w-[32px] h-[32px]" src={discount} alt="discount" />
          <p className={`${styles.paragraph}`}>
            <span className="text-white">20%</span> Discount for{" "}
            <span className="text-white">1 Month</span> Account
          </p>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[70px] text-[52px] text-white ss:leading-[90px] leading-[70px]">
            The New <br className="sm:block hidden" /> {""}
            <span className="text-gradient">Innovative</span> {""}
          </h1>
          <div className="ss:flex hidden md:mr-4">
            <GetStarted />
          </div>
        </div>

        <h1 className=" font-poppins font-semibold ss:text-[66px] text-[50px] text-white ss:leading-[90px] leading-[70px] w-full">
          Payment System
        </h1>

        <p className={`${styles.paragraph} max-w-[550px] mt-5`}>
          The New Innovative Payment System is a game-changer, introducing a
          seamless, secure, and user-friendly approach to transactions.
          Embracing cutting-edge technology, it revolutionizes the way we pay
          and get paid.
        </p>
      </div>

      <div
        className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
      >
        <img src={robot} alt="robot" className="w-full h-full relative z-[5]" />

        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] bottom-40 white__gradient rounded-full" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </section>
  );
};

export default Hero;
