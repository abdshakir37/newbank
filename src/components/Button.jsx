import React from "react";

const Button = ({ styles }) => {
  return (
    <button
      type="button"
      className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-primary outline-none rounded-md hover:opacity-90 duration-300 ${styles}`}
    >
      Get Started
    </button>
  );
};

export default Button;
