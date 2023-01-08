import React, { useRef } from "react";
import Arrow from "../public/Arrow";

export default function signup() {
  const ref: any = useRef(null);

  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <div className="flex min-h-fit  font-semibold font-Titillium text-[#3B5162]">
        <div className="basis-3/4 flex flex-col justify-end ">
          <div className="mt-20 px-20">
            <h3 className="text-5xl font-semibold">Terms of Service</h3>
            <h4 className="text-2xl font-extrabold mt-8">Overview</h4>
            <div className="text-2xl font-semibold leading-10">
              <p className=" mt-8 ">
                Welcome to CEEK VR INC! We are a developer of virtual reality
                experiences streamed to mobile VR devices and other console,
                desktop virtual reality devices (“CEEK VR ready devices”).
              </p>

              <p className="  mt-8 ">
                These Terms of Use govern your use of our service. As used in
                these Terms of Use, “ CEEK VR INC service,” “our service” or
                “the service” means the service provided by CEEK VR SOFTWARE AND
                HARDWARE for discovering and experiencing virtual reality,
                including all features and functionalities, website, and user
                interfaces, as well as all content and software associated with
                our service.
              </p>
              <p className="  mt-8 ">
                These Terms of Use govern your use of our service. As used in
                these Terms of Use, “ CEEK VR INC service,” “our service” or
                “the service” means the service provided by CEEK VR SOFTWARE AND
                HARDWARE for discovering and experiencing virtual reality,
                including all features and functionalities, website, and user
                interfaces, as well as all content and software associated with
                our service.
              </p>
              <p className="mt-8"> Using the Software</p>
              <p className="mt-8">
                As long as you comply with these Terms, you have the right to
                use the Software for your own personal noncommercial use. This
                license is for the sole purpose of enabling you to use and enjoy
                the Software, in the manner permitted by these Terms........ .
              </p>
            </div>
          </div>
          <div className="h-40 flex gap-8 px-20 py-5 updateButton rounded-none">
            <button
              onClick={handleClick}
              className="bg-transparent h-28 w-64 border-2 rounded-lg border-white flex justify-center items-center text-white"
            >
              <div>
                <Arrow fill="black" />
              </div>
              SCROLL UP
            </button>
            <button className="bg-transparent h-28 w-64 border-2 rounded-lg border-white flex justify-center items-center text-white">
              <div className="rotate-180">
                <Arrow />
              </div>
              SCROLL DOWN
            </button>
          </div>
        </div>

        <div className="bg-white  shadow-2xl flex flex-col  text-xl pt-8 pb-4">
          <div className="flex flex-col gap-4  px-28">
            <div>
              <h1 className="mb-8 text-3xl text-center">Sign up</h1>
            </div>
            <div className="text-center w-80">
              <button className="rounded-2xl flex items-center justify-center gap-6 mb-4 w-full p-5  text-white bg-gradient-to-r from-[#1B1FB7] to-[#5DA6F6]">
                <img src="./Vector.svg"></img>CONNECT WITH FACEBOOK
              </button>
            </div>

            <div className="relative flex  gap-4 ">
              <input
                type="text"
                className="drop-shadow-xl w-full p-5 pl-16  rounded-2xl  "
                name="email"
                placeholder="Email"
              />
              <img
                src="/email.svg"
                className="absolute pl-8 mt-[26px] top-0 bottom-0 left-0  "
              ></img>
            </div>
            <div className="relative  flex gap-4">
              <input
                type="text"
                className=" p-5 pl-16 w-full rounded-2xl drop-shadow-xl "
                name="email"
                placeholder="YYYY / MM / DD"
              />
              <img
                src="/birth.svg"
                className="absolute pl-8 mt-[26px] top-0 bottom-0 left-0  "
              ></img>
            </div>
            <div className="bg-white flex gap-1 drop-shadow-xl p-4 pl-8 rounded-2xl">
              <input
                id="radio"
                type="radio"
                className=" w-10 h-10   "
                name="email"
                placeholder="Email"
              />
              <label htmlFor="radio" className=" mt-[5px] ml-2 w-full  ">
                Male
              </label>
              <input
                id="radio1"
                type="radio"
                className=" w-10 h-10   "
                name="email"
                placeholder="Email"
              />
              <label htmlFor="radio1" className="mt-[5px] ml-2 w-full  ">
                Female
              </label>
            </div>
            <div className="relative flex gap-4">
              <input
                type="text"
                className="drop-shadow-xl w-full p-5 pl-16  rounded-2xl  "
                name="email"
                placeholder="Email"
              />
              <img
                src="/Profile.svg"
                className="absolute pl-7 mt-[24px] top-0 bottom-0 left-0  "
              ></img>
            </div>
            <div className="relative flex gap-4">
              <input
                type="password"
                className="drop-shadow-xl  w-full p-5 pl-16 rounded-2xl "
                name="password"
                placeholder="Password"
              />
              <img
                src="/pwd.svg"
                className="absolute pl-8 mt-[26px] top-0 bottom-0 left-0  "
              ></img>
            </div>
            <div className="relative flex gap-4">
              <input
                type="password"
                className="drop-shadow-xl w-full p-5 pl-16 rounded-2xl "
                name="confirm_password"
                placeholder="Confirm Password"
              />

              <img
                src="/pwd.svg"
                className="absolute pl-8 mt-[26px] top-0 bottom-0 left-0  "
              ></img>
            </div>
            <div className="flex gap-4  mt-2 items-center justify-start pl-2">
              <input
                id="link-checkbox"
                type="checkbox"
                value=""
                className="w-6 h-6"
              />
              <label htmlFor="link-checkbox" className="pt-6 ">
                I have read and agreed to the <br></br>
                <p className=" text-lg mt-1 text-transparent bg-clip-text bg-gradient-to-r from-[#2C60FD] via-[#4E0FFF] to-[#9617D2] ">
                  TERMS OF SERVICE
                </p>
              </label>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="updateButton py-4 w-full text-white"
              >
                SIGN UP
              </button>
            </div>
            <div className="text-center">
              <p>
                Already a member? Please{" "}
                <span className="text-lg mt-1 text-transparent bg-clip-text bg-gradient-to-r from-[#9617D2] to-[#30F0F6] ">
                  Sign In
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
