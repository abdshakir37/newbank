import React from "react";
import { apple, bill, google } from "../assets";
import styles, { layout } from "../style";

const Billing = () => {
  return (
    <section id="product" className={layout.sectionReverse}>
      <div className={layout.sectionImgReverse}>
        <img className="w-full h-full relative z[5]" src={bill} alt="bill" />
        <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
        <div className="absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient" />
      </div>

      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          {" "}
          Easily control your <br className="sm:block hidden" /> billing and
          invoice
        </h2>
        <p className={`${styles.paragraph} mt-4 max-w-[500px]`}>
          Our platform provides effortless control over billing and invoicing.
          Customize invoices to align with your brand. Simplify operations,
          ensuring accuracy and organization. With a user-friendly interface,
          managing and tracking invoices is a stress-free experience, enabling
          you to focus on propelling your business towards greater success.
        </p>

        <div className="flex flex-wrap sm:mt-10 mt-6">
          <img
            className="w-[128px] h-[42px] object-contain mr-5 cursor-pointer hover:opacity-90 duration-300"
            src={apple}
            alt="googlepay"
          />
          <img
            className="w-[128px] h-[42px] object-contain cursor-pointer hover:opacity-90 duration-300"
            src={google}
            alt="googlepay"
          />
        </div>
      </div>
    </section>
  );
};

export default Billing;
