"use client";
import React from "react";
import { toast } from "react-toastify";

const Login = () => {
  const clickHandle = (e) => {
    e.preventDefault();
    toast("Email Submitted Successfully", {
      position: "top-center",
      autoClose: 3000,
      theme: "light",
    });
  };

  return (
    <form
      onSubmit={clickHandle}
      className="flex justify-center items-center flex-col gap-6 w-full max-w-[100%] px-4"
    >
      {/* Input Group */}
      <div className="flex flex-col gap-2 w-full">
        <label className="text-gray-600 text-sm font-medium">Email Address</label>
        <input
          type="email"
          placeholder="Enter your email"
          className="bg-gray-100 w-full p-3 rounded-md outline-none focus:ring-2 focus:ring-[#27AE60] transition-all"
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-[#27AE60] text-white font-semibold p-3 rounded-md hover:bg-[#219150] transition-all"
      >
        Submit
      </button>
    </form>
  );
};

export default Login;
