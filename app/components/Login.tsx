"use client";
import React, { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import TextInput from "../components/TextInput";
import Button from "../components/Button";

const Login = () => {
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const router = useRouter();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setLoginData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <form className="mt-5">
      <TextInput
        inputName="email"
        prefix="Email"
        prefixClass="block text-sm  font-medium text-gray-700"
        type="email"
        className="mb-4 w-full text-gray-800"
        onChange={handleChange}
        errorMsg={error}
        placeHolder="Enter your Staff email ID"
      />
      <TextInput
        inputName="password"
        prefix="Password"
        prefixClass="block text-sm font-medium text-gray-700"
        type="password"
        className="mb-4 w-full text-gray-800"
        onChange={handleChange}
        errorMsg={error}
        placeHolder="Enter your Staff password"
      />
      <Button btnType="submit" btnLink="" btnText="Login" className="w-full" />
    </form>
  );
};

export default Login;
