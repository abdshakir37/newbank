import React from "react";
import { quotes } from "../assets";

const Feedback = ({ content, name, title, img }) => {
  return (
    <div className="flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[400px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card">
      <img
        src={quotes}
        alt="quotes"
        className="w-[40px] h-[25px] object-contain"
      />
      <p className="font-poppins leading-[30px] text-white my-10">{content}</p>
      <div className="flex">
        <img src={img} alt={name} className="w-[50px] h-[50px]" />
        <div className="flex flex-col ml-4">
          <h4 className="font-poppins font-semibold leading-[30px] text-white ">
            {name}
          </h4>
          <p className="font-poppins leading-[30px] text-dimWhite text-[14px]">
            {title}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
