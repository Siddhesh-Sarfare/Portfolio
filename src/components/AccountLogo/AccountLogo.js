import React from "react";
import AClogo from "../../assets/passportdp-removebg-preview.png";
import "./AccountLogo.css";

const AccountLogo = () => {
  return (
    <>
      <div className="flex w-full p-2 rounded-lg navlogo_wrapper">
        <a href="/" aria-current="page" className="bg-transparent">
          <img
            src={AClogo}
            loading="lazy"
            alt=""
            className="align-middle rounded-full navbar_logo"
          />
        </a>
        <div className="w-0 h-5 navbar_spacer"></div>
        <a href="/#projects" className="text-white bg-transparent line-block">
          <div className="inline-block ml-2 text-base font-normal tracking-wider align-middle bg-transparent menu_text-link">
            Projects
          </div>
        </a>
      </div>
    </>
  );
};

export default AccountLogo;
