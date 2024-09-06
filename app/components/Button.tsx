"use client"
import React from "react";
import Link from "next/link";
import { ButtonProps } from "../utils/interface";

const Button:React.FC<ButtonProps> = ({btnType,btnLink,btnText,className}) => {
  return (
    <>
      <button type={btnType} className={`btn btn-neutral ${className} text-white rounded-[7px]`}>
        {/* <Link href={btnLink}>{btnText}</Link> */}
        {btnText}
      </button>
    </>
  );
};

export default Button;
