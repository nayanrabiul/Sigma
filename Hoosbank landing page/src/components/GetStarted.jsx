import React from "react";
import styles from "../style";
import { arrowUp } from "../assets";
const GetStarted = () => (
  <div
    className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient  cursor-pointer p-[2px]`}
  >
    <div
      className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}
    >
      <div className={`${styles.flexStart} flex-col`}>
        <p className="font-poppins font-medium text-[18px] leaading-[23px] flex flex-row">
          <span className="text-gradient">Get</span>
          <img src={arrowUp} className={`w-[23px] h-[23px] object-contain ml-2`} />
          
        </p>
        <p className="font-poppins font-medium text-[18px] leaading-[23px]">
          <span className="text-gradient">Started</span>
        </p>
      </div>
    </div>
  </div>
);

export default GetStarted;
