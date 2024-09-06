import React from "react";
import Login from "../components/Login";

const page = () => {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center">
      <div className="text-center text-pretty">
        <h1 className="text-3xl font-bold">Staffs Login Portal</h1>
        <p className="mt-5 ">
          Authorized Persons only login to manage appointments of patients
        </p>
      </div>
        <Login/>
    </main>
  );
};

export default page;
