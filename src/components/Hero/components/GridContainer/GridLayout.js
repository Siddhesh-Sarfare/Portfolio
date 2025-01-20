import React from "react";
import './GridLayout.css';

const GridLayout = ({ children }) => {
  return (
    <header>
      <div className="pl-10 pr-10">
        <div className="container m-auto">
          <div className="flex flex-col justify-center px-12 py-24 bg-[#1c1c1c] will-change-[background] mt-20">
            {children}
          </div>
        </div>
      </div>
    </header>
  );
};

export default GridLayout;
