import React from "react";
import { useState } from "react";

export default function Drawer(props: any) {
  const { value, handle } = props;
  return (
    <>
      {
        <div className="flex justify-end  absolute  ">
          <div className=" ">
            <button
              className=" mb-10 text-4xl fixed right-10 top-6 z-50  "
              onClick={() => handle(!value)}
            >
              <img src="/arrow.svg" />
            </button>
          </div>
          <div className=" text-[#0D00FF] fixed top-0 right-0 h-screen p-4 overflow-y-auto bg-white w-96 font-semibold   font-Titillium">
            <ul>
              <li className="  w-32   mt-2 ">
                <button>Manage Roles</button>
              </li>
              <li className="  w-20    mt-2 ">
                <button>Profile</button>
              </li>
              <li className=" w-24    mt-2 ">
                <button>My items</button>
              </li>
              <li className=" w-24    mt-2 ">
                <button>Explore</button>
              </li> 

           
              <li className=" w-24    mt-2 ">
                <button>Create</button>
              </li>
            </ul>
          </div>
        </div>
      }
    </>
  );
}
