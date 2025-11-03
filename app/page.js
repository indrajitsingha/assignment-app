import Image from "next/image";
import Login from "./components/Login";
import { ToastContainer } from "react-toastify";

export default function Home() {
  return (
    <section className="h-[100vh] w-[100%] flex flex-col md:flex-row justify-center items-center">
      {/* Left Section */}
      <div className="bg-[#27AE60] w-[100%] md:w-[50%] h-[50vh] md:h-[100vh] flex justify-start items-start flex-col text-white">
        <div className="text-[4vw] md:text-[2vw] font-semibold p-[5%]">
          Mirror
        </div>

        <div className="p-[5%] w-[90%] md:w-[70%]">
          <h1 className="text-[5vw] md:text-[2vw] font-semibold leading-tight mb-[2%]">
            Lorem ipsum dolor sit amet.
          </h1>
          <p className="text-[3.5vw] md:text-[1vw] text-gray-100">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor rem harum incidunt magnam ea perferendis sunt ipsum vitae dolores sapiente!
          </p>
        </div>
      </div>

      {/* Right Section */}
      <div className="bg-white w-[100%] md:w-[50%] h-[50vh] md:h-[100vh] flex justify-center items-center">
        <div className="flex justify-center items-center w-[90%] md:w-[60%] flex-col">
          <div className="w-[100%] mb-[5%] border-b-2 py-[3%] text-center md:text-left">
            <h1 className="text-[5vw] md:text-[1.8vw] text-black font-semibold mb-[2%]">
              Access to your Account
            </h1>
            <p className="text-gray-500 text-[3.5vw] md:text-[1vw]">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore, sed?
            </p>
          </div>
          <Login />
        </div>
      </div>

      <ToastContainer />
    </section>
  );
}
