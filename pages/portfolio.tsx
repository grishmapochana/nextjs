import React from "react";
import Image from "next/image";
import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";
export default function portfolio() {
  return (
    <>
      <div className="min-h-screen px-10">
        <nav className="py-10 mb-12 flex justify-between">
          <h1 className="text-xl">Dev by</h1>
          <ul className="flex items-center">
            <li>
              <BsFillMoonStarsFill className="cursor-pointer text-2xl" />
            </li>
            <li>
              <a
                href="#"
                className="text-white text-lg bg-gradient-to-r from-cyan-500 to-teal-500 px-4 py-2 rounded-md ml-8"
              >
                Resume
              </a>
            </li>
          </ul>
        </nav>
        <div className="p-10 text-center">
          <h2 className="text-5xl py-2 text-teal-600 font-medium">
            Grishma Pochana
          </h2>
          <h3 className="text-3xl py-2 text-cyan-500">Developer</h3>
          <p className="text-xl py-5 leading-8 tracking-wide text-gray-800 max-w-md mx-auto">
            Freelancer providing services for programming and design content
            needs.Join me down below and lets's get cracking
          </p>
        </div>
        <div className="  flex justify-center gap-6 text-3xl py-3 text-gray-600">
          <AiFillTwitterCircle />
          <AiFillLinkedin />
          <AiFillYoutube />
        </div>
        {/* <div className="max-w-lg overflow-hidden mx-auto bg-gradient-to-b from-teal-500 rounded-full "> */}
        <div className=" mt-20 mx-auto w-96 h-96 overflow-hidden  bg-gradient-to-b from-teal-500 rounded-full  p-4">
          <Image
            className=" object-cover rounded-tr-3xl rounded-tl-3xl object-center pl-2 "
            src="/dev-ed-wave.png"
            // src="/dev.gif"
            alt="dev.gif"
            layout="responsive"
            width="50"
            height="50"
            objectFit="cover"
          />
          {/* </div> */}
        </div>
      </div>
      <div className="text-center">
        <h3 className="text-3xl">Services I Offer</h3>
        <p className="text-2xl max-w-md mx-auto text-transparent bg-clip-text  bg-gradient-to-r from-purple-400 to-pink-600 py-5 leading-8 tracking-wide">
          Freelancer providing services for programming and design content
          needs.Join me down below and lets's get cracking
        </p>
      </div>

      <div className="max-w-6xl mx-auto lg:flex gap-10 ">
        <div className="text-center  mt-10 w-96  mx-auto shadow-lg shadow-gray-300 p-10 rounded-lg">
          <div className="w-40 h-40  mx-auto ">
            <Image
              src="/design.png"
              layout="responsive"
              width={100}
              height={100}
            />
          </div>
          <h3 className="text-lg font-medium pt-8 pb-2">Beautiful desigs</h3>
          <p>
            Freelancer providing services for programming and design content
            needs.Join me down below and lets's get cracking
          </p>
          <h4 className="py-4 text-teal-600">Design Tools I use</h4>
          <p className="text-gray-800 py-1">Photoshop</p>
          <p className="text-gray-800 py-1">Figma</p>
          <p className="text-gray-800 py-1">Illustrator</p>
        </div>
        <div className="text-center mt-10 w-96  mx-auto shadow-lg shadow-gray-300 p-10 rounded-lg">
          <div className="w-40 h-40  mx-auto ">
            <Image
              src="/code.png"
              layout="responsive"
              width={100}
              height={100}
            />
          </div>
          <h3 className="text-lg font-medium pt-8 pb-2">Beautiful desigs</h3>
          <p>
            Freelancer providing services for programming and design content
            needs.Join me down below and lets's get cracking
          </p>
          <h4 className="py-4 text-teal-600">Design Tools I use</h4>
          <p className="text-gray-800 py-1">Photoshop</p>
          <p className="text-gray-800 py-1">Figma</p>
          <p className="text-gray-800 py-1">Illustrator</p>
        </div>
        <div className="text-center mt-10 w-96  mx-auto shadow-lg shadow-gray-300 p-10 rounded-lg">
          <div className="w-40 h-40  mx-auto ">
            <Image
              src="/consulting.png"
              layout="responsive"
              width={100}
              height={100}
            />
          </div>
          <h3 className="text-lg font-medium pt-8 pb-2">Beautiful desigs</h3>
          <p>
            Freelancer providing services for programming and design content
            needs.Join me down below and lets's get cracking
          </p>
          <h4 className="py-4 text-teal-600">Design Tools I use</h4>
          <p className="text-gray-800 py-1">Photoshop</p>
          <p className="text-gray-800 py-1">Figma</p>
          <p className="text-gray-800 py-1">Illustrator</p>
        </div>
      </div>
      <div className="flex mt-4 ml-12">
        {/* <div className="  z-50 border-4 border-black text-center py-6 w-40 h-40 rounded-full">
          05
        </div> */}
        <div className="  border-4 border-pink-500  text-center  py-6 w-20 h-20 rounded-full">
          04
        </div>
        <div className="  -ml-4  border-4 border-blue-500 text-center w-20 py-6 h-20 rounded-full">
          03
        </div>
        <div className="  -ml-4   border-4 border-green-500 text-center w-20 py-6 h-20 rounded-full">
          02
        </div>
      </div>
      <div className="flex mr-4 ">
        <div className=" -mt-8 ml-20  z-10 border-4 border-yellow-500 text-center w-20  py-6 h-20 rounded-full">
          01
        </div>
        <div className=" -ml-4 -mt-8 z-10 border-4 border-yellow-500 text-center w-20  py-6 h-20 rounded-full">
          01
        </div>
      </div>
    </>
  );
}
