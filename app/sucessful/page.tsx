"use client"
import React from "react";
import Link from "next/link";
import HeaderCard from "../components/HeaderCard";
const page = () => {
  return (
    <section className="flex h-screen items-center justify-center">
        <div className="flex flex-col justify-center items-center text-center space-y-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-28 w-28 text-green-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <HeaderCard
                title="Appointment Booked Sucessfully !"
                titleClass="text-4xl"
                text="You will recieve a message when your appointment has been scheduled."
                textClass="py-0"
              />
          <Link
            href="/"
            className="inline-flex items-center rounded border border-indigo-600 bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700 focus:outline-none focus:ring"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mr-2 h-3 w-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7 16l-4-4m0 0l4-4m-4 4h18"
              />
            </svg>
            <span className="text-sm font-medium"> Home </span>
          </Link>
        </div>
    </section>
  );
};

export default page;
