"use client"
import React from "react";
import Link from "next/link";

interface Button{
    btnType :any,
    btnLink:string,
    btnText:string
    className:string
}

const Button:React.FC<Button> = ({btnType,btnLink,btnText,className}) => {
  return (
    <>
      <button type={btnType} className={`btn btn-neutral ${className} text-white rounded-[7px]`}>
        <Link href={btnLink}>{btnText}</Link>
      </button>
    </>
  );
};

export default Button;
