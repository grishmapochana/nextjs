import React, { useState } from "react";
import Drawer from "../components/Drawer";

export default function () {
  // const [showSidebar, setShowSidebar] = useState(false);
  // const handleSidebar = (value: any) => {
  //   setShowSidebar(value);
  // };
  return (
    <>
      <div className="w-full relative font-semibold text-[#3B5162]  h-20 bg-rose-50 flex justify-between font-Titillium">
        <div className="flex  items-center ">
          <div className=" pl-8 ">
            <img className="h-[42px] w-[47px]" src="/LOGO.svg" />
          </div>
          <div className=" hidden sm:block ml-10  mt-2 bg-gradient-to-r from-[#1B1FB7]  to-[#5DA6F6] p-[3px] rounded-full ">
            <button className="cursor-pointer h-[50px] w-[113px] rounded-full px-3 py-2 bg-white">
              Explore
            </button>
          </div>
          <div className=" hidden sm:block  ml-2  mt-2 bg-gradient-to-r from-[#73e8f4] via-[#441af5] to-[#E18D9F] p-[3px] rounded-full ">
            <button className="cursor-pointer h-[50px] w-[113px] rounded-full px-3 py-2 bg-white">
              Create
            </button>
          </div>
        </div>
        <div className="  mr-4 mt-2 flex items-center">
          <div className=" hidden sm:block w-24 h-10 ml-2   bg-gradient-to-r from-[#73e8f4] via-[#441af5] to-[#E18D9F] p-[3px] rounded-full ">
            <div className="p-5 h-full relative cursor-pointer w-full rounded-full px-3 py-2 bg-white">
              <button className="cursor-pointer absolute w-6 h-6 ml-2  mb-1 bottom-0 left-0">
                <img className="h-full w-full" src="/light.svg" />
              </button>
              <button className="cursor-pointer w-6 h-6 mr-2  mb-1 absolute bottom-0 right-0  ">
                <img className="h-full w-full " src="/light.svg" />
              </button>
            </div>
          </div>
          <div className=" cursor-pointer hidden sm:block mr-4 ml-4 ">
            <img src="/burger.svg" />
          </div>
          <div className="  mr-4   bg-gradient-to-r from-[#73e8f4] via-[#441af5] to-[#E18D9F] p-[3px] rounded-full ">
            <button className="cursor-pointer h-[50px] w-[113px] rounded-full px-3 py-2 bg-white">
              Log In
            </button>
          </div>
          <div className="  updateButton">
            <button className="cursor-pointer h-[50px] w-[113px] px-4 py-2 text-white">
              Sign Up
            </button>
          </div>

          <div
            className=" cursor-pointer block sm:hidden mr-4 ml-4 "
            // onClick={() => {
            //   setShowSidebar(true);
            // }}
          >
            <img src="/burger.svg" />
          </div>
        </div>
      </div>
      <div className="w-full font-semibold mt-4  text-[#3B5162]  h-20 bg-rose-50 flex justify-between font-Titillium">
        <div className="flex  items-center ">
          <div className=" pl-8 relative">
            <img className="h-[42px] w-[47px]" src="/LOGO.svg" />
          </div>
          <div className=" cursor-pointer hidden sm:block w-32 ml-10   mt-2 ">
            <button>Manage Roles</button>
          </div>
          <div className=" cursor-pointer hidden sm:block w-20    mt-2 ">
            <button>Profile</button>
          </div>
          <div className=" cursor-pointer hidden sm:block w-24    mt-2 ">
            <button>My items</button>
          </div>
          <div className="hidden sm:block  mt-2 bg-gradient-to-r from-[#1B1FB7]  to-[#5DA6F6] p-[3px] rounded-full ">
            <button className="cursor-pointer h-[50px] w-[113px] rounded-full px-3 py-2 bg-white">
              Explore
            </button>
          </div>
          <div className="hidden sm:block ml-2  mt-2 bg-gradient-to-r from-[#73e8f4] via-[#441af5] to-[#E18D9F] p-[3px] rounded-full ">
            <button className="cursor-pointer h-[50px] w-[113px] rounded-full px-3 py-2 bg-white">
              Create
            </button>
          </div>
        </div>
        <div className="mr-4 mt-2 flex items-center">
          <div className=" hidden sm:block w-24 h-10 ml-2   bg-gradient-to-r from-[#73e8f4] via-[#441af5] to-[#E18D9F] p-[3px] rounded-full ">
            <div className="p-5 h-full relative cursor-pointer w-full rounded-full px-3 py-2 bg-white">
              <button className=" cursor-pointer absolute w-6 h-6 ml-2  mb-1 bottom-0 left-0">
                <img className="h-full w-full" src="/light.svg" />
              </button>
              <button className="cursor-pointer  w-6 h-6 mr-2  mb-1 absolute bottom-0 right-0  ">
                <img className="h-full w-full " src="/light.svg" />
              </button>
            </div>
          </div>
          <div className=" cursor-pointer hidden sm:block mr-4 ml-4 ">
            <img src="/burger.svg" />
          </div>
          <div className="  mr-4   bg-gradient-to-r from-[#73e8f4] via-[#441af5] to-[#E18D9F] p-[3px] rounded-full ">
            <button className=" h-[50px] w-[113px] cursor-pointer  rounded-full px-3 py-2 bg-white">
              Log In
            </button>
          </div>
          <div className="  updateButton">
            <button className="cursor-pointer h-[50px] w-[113px] px-4 py-2 text-white">
              Sign Up
            </button>
          </div>

          <div
            className="cursor-pointer block sm:hidden mr-4 ml-4 "
            // onClick={() => {
            //   setShowSidebar(true);
            // }}
          >
            <img src="/burger.svg" />
          </div>
        </div>
      </div>
      {/* {showSidebar ? <Drawer value={showSidebar} handle={handleSidebar} /> : ""} */}
      <div className="flex items-center mb-4">
        <input
          id="default-radio-1"
          type="radio"
          value=""
          name="default-radio"
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
        <label
          htmlFor="default-radio-1"
          className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          Default radio
        </label>
      </div>
      <div className="bg-red-100 mx-auto container">
        <div className=" flex items-center">
          <input
            checked
            id="default-radio-2"
            type="radio"
            value=""
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            htmlFor="default-radio-2"
            className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Checked state
          </label>
        </div>
      </div>
   </>)
}
