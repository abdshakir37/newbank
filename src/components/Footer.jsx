import React from "react";
import styles from "../style";
import { logo } from "../assets";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
      <div className={`${styles.flexStart} md:flex-row flex-col mb-6 w-full`}>
        <div className="flex flex-1 flex-col justify-start mr-10">
          <img
            className="w-[260px] h-[70px] object-contain"
            src={logo}
            alt="logo"
          />
          <p className={`${styles.paragraph} mt-4 max-w-[300px]`}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum,
            veritatis.
          </p>
        </div>

        <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
          {footerLinks.map((footerLinks) => (
            <div
              key={footerLinks}
              className="flex flex-col ss:my- my-4 min-w-[150px]"
            >
              <h4 className="font-poppins font-medium text-[18px] text-white">
                {footerLinks.title}
              </h4>
              <ul className="mt-4 list-none">
                {footerLinks.links.map((link, index) => (
                  <li
                    key={link.name}
                    className={`font-poppins text-dimWhite hover:text-secondary cursor-pointer ${
                      index !== footerLinks.links.length - 1 ? "mb-4" : "mb-0"
                    }`}
                  >
                    {link.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="flex w-full justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3f3e45]">
        <p className="font-poppins text-[18px] text-white">
          All Rights Reserved
        </p>

        <div className="flex md:mt-0 mt-6">
          {socialMedia.map((social, index) => (
            <img
              className={`w-[20px] h-[20px] object-contain cursor-pointer ${
                index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
              } `}
              key={social.id}
              src={social.icon}
              alt={social.id}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Footer;
