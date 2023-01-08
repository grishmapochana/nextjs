// import Facebook from "@components/icons/Facebook";
// import Lock from "@components/icons/Lock";
// import LogoSvg from "@components/icons/Logo";
// import UserProfile from "@components/icons/UserProfile";
// import React from "react";
// import s from "./signIn.module.css"
import Link from "next/link";
import React from "react";
export default function Signin() {
  return (
    <div
      className="h-screen w-full grid grid-cols-3 object-fill"
      style={{
        backgroundImage: `url('/images/signIn.png')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="col-span-2 p-12 flex flex-col justify-between">
        <div className="text-white">
          <Link href="/">
            <span className="cursor-pointer">{/* <LogoSvg /> */}</span>
          </Link>
        </div>
        <div className="text-white text-[80px] font-bold leading-tight pr-96">
          Discover, Collect and Sell Unique NFTs in the CEEK Metaverse
        </div>
      </div>
      <div className="px-24 pt-32 pb-12 bg-white text-center flex flex-col justify-between">
        <div>
          <div className="text-2xl text-[#3B5162]">Sign In</div>
          <button className="mt-5 mx-auto flex gap-6 py-4 px-10 bg-gradient-to-r from-[#1B1FB7] to-[#5DA6F6] text-white text-xl font-semibold rounded-xl">
            {/* <Facebook /> */}
            <div>CONNECT WITH FACEBOOK</div>
          </button>
          <div className={`mt-7 text-xl grid grid-cols-5`}>
            <div
              className="h-1 col-span-2 bg-gradient-to-l from-[#C4C4C4]"
              style={{ margin: "10px 0 10px" }}
            ></div>
            <p>OR</p>
            <div
              className="h-1 col-span-2 bg-gradient-to-r from-[#C4C4C4]"
              style={{ margin: "10px 0 10px" }}
            ></div>
          </div>

          <div className="mt-7 flex flex-col gap-6">
            <div className={`rounded-xl overflow-hidden flex gap-4 p-4 `}>
              <div className="my-auto">
                {/* <UserProfile className="my-auto" /> */}
              </div>
              <input
                type="text"
                placeholder="Username"
                className="bg-transparent w-full border-none focus:outline-none"
              />
            </div>
            <div className={`rounded-xl overflow-hidden flex gap-4 p-4 `}>
              <div className="my-auto">
                {/* <Lock className="my-auto" /> */}
              </div>
              <input
                type="password"
                placeholder="Password"
                className="bg-transparent w-full border-none focus:outline-none"
              />
            </div>
            <div className="text-xl text-left flex gap-4">
              <input
                type="checkbox"
                className="w-6 h-6 my-auto"
                style={{ accentColor: "#1B1FB7" }}
              />
              Remember me
            </div>
            <div className="flex flex-wrap">
              <div className="w-full text-center sm:px-3">
                <button
                  type="button"
                  className={`updateButton w-52 md:w-80 text-lg lg:text-2xl font-bold text-white py-4`}
                  // onClick={() => updateProfile()}
                  // disabled={loader}
                >
                  {/* {loader ? <Loader /> : */}
                  LOG IN
                </button>
              </div>
            </div>

            <button className="textMultiColorGradient text-xl">
              Forgot Password?
            </button>
          </div>
        </div>
        <div className="text-xl">
          Not a member? Please{" "}
          <button className="textMultiColorGradient">Sign up</button>
        </div>
      </div>
    </div>
  );
}
