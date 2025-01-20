import ArrowOutwardOutlinedIcon from "@mui/icons-material/ArrowOutwardOutlined";
import React from "react";
import "./LatestWork.css";

const LatestWork = ({title, children, link}) => {
  return (
    // <div className="">
      // <a
      //   className="sticky flex flex-col w-full pb-0 overflow-hidden .latest_case-wrapper opacity-100 cursor-pointer rounded-2xl top-48 hover:scale-100  ease-in-out duration-300" 
      //   href={link}
      // >
      <a
        className="sticky flex flex-col w-full pb-0 overflow-hidden opacity-100 cursor-pointer latest_case-wrapper rounded-2xl top-48" 
        href={link}
      >
        <div className="flex p-6 justify-between bg-[#353535]">
          <p className="text-3xl font-normal tracking-tighter text-white opacity-100 bg-[#353535]">
            {title}
          </p>
          <ArrowOutwardOutlinedIcon
            fontSize="large"
            className="p-1 text-white border-2 border-white rounded-md bg-[#353535]"
          />
        </div>
        {children}
      </a>
    // </div>
  );
};

export default LatestWork;
