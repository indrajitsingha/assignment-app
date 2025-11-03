import Image from "next/image";
import Login from "./components/Login";

import { ToastContainer } from 'react-toastify';

// #27AE60
export default function Home() {
  return (
    <section className=" h-[100vh] w-[100%] flex justify-center items-center ">
      <div className="  bg-[#27AE60]  w-[50%] h-[100%] flex justify-start items-start flex-col ">
        <div className="text-xl  p-10 ">Mirror</div>
        <div className=" p-10 w-[400px] ">
          <h1 className=" text-[32px]  font-semibold">Lorem ipsum dolor sit amet.</h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore, sed?</p>
        </div>
      </div>
      <div className="  bg-white  w-[50%] h-[100%] flex justify-center items-center ">
        <div className=" flex justify-center items-center w-[100%]  flex-col ">

          <div className=" w-[380px] mb-5  border-b-2 py-5">
            <h1 className=" text-[25px] text-black font-semibold">Access to your Account</h1>
            <p className=" text-gray-500 text-sm">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore, sed?</p>
          </div>
          <Login/>
        </div>
      </div>
      <ToastContainer/>
    </section>
  );
}
