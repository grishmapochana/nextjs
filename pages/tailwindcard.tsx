import React from "react";

export default function tailwindcard() {
  return (
    <>
      {/* gradient(270deg, #F0899E 0%, #9617D2 24.48%, #4E0FFF 51.04%, #2C60FD 75%, #30F0F6 100%) */}
      <div className=" min-h-screen flex">
        <div className="relative   accent-blue-700 basis-3/4">
          <img
            src="/CEEKVR_TV_1 2.png "
            className="h-[775px] w-full object-fit"
          />
          <div className="absolute top-0 mt-4 ml-4">
            <img src="/Vector.png" />
          </div>
          <div className="absolute bottom-0 mb-5 text-left">
            <h2 className="text-4xl font-semibold font-Titillium   text-white">
              Discover,Collect and Sell Unique NFTs in CEEK Metaverse
            </h2>
          </div>
        </div>
        <div className=" font-Titillium bg-white ">
          <div>Sign In</div>
          <div>
            <button>CONNECT WITH FACEBOOK</button>
          </div>
          <div>or</div>
          <div>
            <input placeholder="Username" />
          </div>
          <div>
            <input placeholder="Passowrd" />
          </div>
          <div>
            <input type="checkbox" />
            Remember Me
          </div>
          <div>
            <button>Login</button>
          </div>
          <div>
            <h3>Forgot Password?</h3>
          </div>
        </div>
      </div>
    </>
  );
}
{
  /* <div class="mx-auto flex min-h-screen max-w-screen-sm items-center justify-center">
  <div class="h-36 w-full rounded-md bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1">
    <div class="flex h-full w-full items-center justify-center bg-gray-800 back">
      <h1 class="text-2xl font-black text-white">
        the quick brown fox jumps over the lazy dog
      </h1>
    </div>
  </div>
</div>; */
}
