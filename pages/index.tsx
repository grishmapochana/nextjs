// import React from "react";

// export default function index() {
//   return <div>index</div>;
// }

import React from "react";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const CarousalItem = ({
  item,
  isLoading,
  openItem,
  ...rest
}: {
  item: any;
  isLoading: boolean;
  openItem: boolean;
}) => {
  return (
    <div
      key={item.id}
      className="shadow-sm p-3
      rounded-lg border-100"
    >
      {isLoading ? (
        <div className="bg-white rounded-3xl">
          <div className="bg-gray h-80 p-3 overflow-hidden animate-pulse w-full rounded-tr-3xl rounded-tl-3xl">
            {" "}
          </div>
          <div className="p-3">
            <div className="grid mt-2">
              <div className="h-8 w-full bg-gray rounded animate-pulse"></div>
            </div>
            <div className="grid mt-2">
              <div className="h-8 w-full bg-gray rounded animate-pulse"></div>
            </div>
          </div>
          <div className="p-3">
            <div className="grid mt-2">
              <div className="h-8 w-full bg-gray rounded animate-pulse"></div>
            </div>
          </div>
          <div className="p-3">
            <div className="grid grid-cols-3 gap-4 mt-2">
              <div className="h-8 w-full bg-gray rounded animate-pulse"></div>
              <div className="h-8 w-full bg-gray rounded animate-pulse"></div>
              <div className="h-8 w-full bg-gray rounded animate-pulse"></div>
            </div>
          </div>
        </div>
      ) : (
        <div
          className={`border border-[#BFBFC3] bg-white box-border rounded-3xl`}
          style={{ cursor: "pointer" }}
        >
          <div className="group relative">
            <div className=" absolute -inset-0.5 rounded-lg group-hover:bg-gradient-to-r from-pink-600 to-purple-600  blur transition duration-1000 group-hover:opacity-75 group-hover:duration-200"></div>
            <div className="relative rounded-3xl bg-white  ">
              <div style={{ height: "300px" }}>
                {/* {item?.asset?.image ? */}
                <img
                  className="w-full rounded-tr-3xl rounded-tl-3xl h-full  object-cover "
                  src="https://gateway.ipfscdn.io/ipfs/QmVShbfe5T7YhUaKECFnNKrQj3ubrokLp2MLFx9HNqnR2z/0"
                  alt="chef"
                />
                {/* <img
              className="w-full rounded-tr-3xl rounded-tl-3xl"
              src={item?.asset?.image || "/m-2.png"}
              alt={item?.asset?.name || "/pu-1.png"}
              style={{ height: "100%", width: "100%", objectFit: "cover" }}
              // onClick={handleClick}
            /> */}
              </div>
              <div className="text-center relative py-4">
                <span
                  className="absolute transform -translate-x-12 -translate-y-20 z-50
      text-green-500 rounded-full hover:text-green-400 transition-all
      duration-200 cursor-pointer border-white"
                >
                  <Image
                    className="w-200 h-133 inline-block object-cover rounded-full shadow-sm"
                    alt="CompanyIcon"
                    src={item?.seller?.image || "/pu-1.png"}
                    width="100"
                    height="100"
                  />
                </span>
              </div>
              <div className="text-center relative">
                <p className="mb-1 text-3xl font-bold cursor-pointer">
                  {item?.asset?.name
                    ? item?.asset?.name
                    : `LAND TOKEN #${item?.asset?.id || 1}`}
                </p>
                <span className="text-lg text-gray-700 hover:text-gray-900">
                  <span className={`text-[rgba(0, 0, 14, 0.5)] font-bold`}>
                    by
                  </span>{" "}
                  <span className={`text-[#0d00ff] font-bold`}>
                    {item?.user?.name ||
                      "0x..." +
                        (item?.user?.walletAddress?.slice(38, 42) || "48CZ")}
                  </span>
                </span>
                <p
                  className="p-5 text-gray-700 text-base"
                  style={{
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    height: "90px",
                  }}
                >
                  {item?.description}
                </p>
              </div>
              <div className="p-3 grid grid-cols-3 gap-6 content-center pt-5">
                <div className="text-left pl-3 text-sm">
                  {item.buyoutCurrencyValuePerToken || true ? (
                    <span className={`text-[#0D00FF] font-semibold`}>
                      {" "}
                      $
                      {/* {shortenDisplayPrice(
                    (
                      item?.buyoutCurrencyValuePerToken?.displayValue * 0.097042
                    ).toFixed(2)
                  )}{" "} */}
                      2 USD
                    </span>
                  ) : (
                    <></>
                  )}
                </div>
                {item.buyoutCurrencyValuePerToken || true ? (
                  <>
                    <div className="text-center">
                      <span
                        className={`textMultiColorGradient font-semibold text-sm`}
                      >
                        {/* {`${shortenDisplayPrice(
                      parseFloat(
                        item?.buyoutCurrencyValuePerToken?.displayValue
                      ).toFixed(2)
                    )} ${item?.buyoutCurrencyValuePerToken?.symbol}`} */}
                        4 MTOKEN
                      </span>
                    </div>
                    <div
                      className="flow-root space-x-2 text-right pr-3"
                      // style={{ display: "inline-flex" }}
                    >
                      <button
                        className="font-bold rounded items-center"
                        onClick={() => {
                          // updateLikeStatus(item.id);
                        }}
                      >
                        {/* {liked ? (
                      <Heart stroke="#0D00FF" fill="#0D00FF" />
                    ) : (
                      <Heart stroke={twColors["icon"]} />
                    )} */}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          stroke="#0D00FF"
                          fill="#0D00FF"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          // stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                          />
                        </svg>
                      </button>
                      {/* <span className="font-semibold "> {likes} </span> */}
                      <span className="font-semibold "> 4 </span>
                      {/* <button
                className="font-bold rounded items-center"
                onClick={() => setIsOpen(!isOpen)}
                >
                <Share stroke={twColors["icon"]} />
              </button> */}
                    </div>
                  </>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const Carousal = ({
  items,
  isLoading,
  openItem,
  ...rest
}: {
  items: any;
  isLoading: boolean;
  openItem: boolean;
}) => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <>
      <Carousel
        // arrows={isMobile ? false : true}
        arrows={true}
        responsive={responsive}
        {...rest}
      >
        {items?.map((asset: any, index: any) => (
          <CarousalItem
            openItem={openItem}
            item={asset}
            isLoading={isLoading}
            key={`item-${index}`}
          ></CarousalItem>
        ))}
      </Carousel>
    </>
  );
};

export default function index() {
  const items = Array(10)
    .fill(0)
    .map((it) => ({ name: "yo" }));
  return (
    <>
      <div className=" mb-3 flex-wrap w-full h-20 flex-row block ">
        <div className="ml-5 sm:ml-10 my-2.5 float-left">
          <div className="inline-block mt-2  max-w-full m-0">
            <img
              className="cursor-pointer h-16"
              src="/header-logo.png"
              alt="CEEK Logo"
            />
          </div>
        </div>
        <div className="float-right  cursor-pointer block  mt-6 mx-2 mr-4">
          <img src="/burger.png" alt="burger" />
        </div>
        <div
          className="  float-right w-80  flex  flex-row  border
         border-gray-300  bg-white rounded-full py-2 px-3 mt-3   "
        >
          <div>
            <button className=" cursor-pointer bg-gradient-to-r from-blue-500 via-indigo-500 to-pink-500  text-white text-lg px-4 py-3 w-32 ml-2  rounded-full bg-blue-500">
              SignIn
            </button>
          </div>
          <div>
            <button className=" cursor-pointer bg-gradient-to-r from-blue-500 via-indigo-500 to-pink-500  text-white text-lg px-4 py-3 w-32 rounded-full    ml-6  bg-blue-500">
              SignUp
            </button>
          </div>
        </div>
        <div className="  float-right mt-6 mx-3 text-lg bg-indigo-100 rounded-full py-2.5 px-6 cursor-pointer">
          Create
        </div>
        <div className="  float-right mt-6 mx-3 text-lg rounded-full py-2.5 px-6 cursor-pointer">
          My Items
        </div>
        <div className="  float-right mt-6 mx-3 text-lg rounded-full py-2.5 px-6 cursor-pointer">
          Profile
        </div>
      </div>
      <div className="relative w-full h-100 sm:h-96 lg:h-60v bg-gradient-to-l md:bg-gradient-to-r bg-no-repeat bg-cover bg-left bg-fixed overflow-hidden">
        <div className="h-full w-full absolute hidden sm:block">
          <Image
            src="/banner-1.png"
            layout="fill"
            alt="Hero Banner"
            className="z-10"
            objectFit="cover"
            objectPosition="left center"
          ></Image>
        </div>
        <div className="h-full w-full block sm:hidden mt-8 absolute top-0">
          <Image
            src="/banner-1-mobile.png"
            layout="fill"
            alt="Hero Banner Mobile"
            className="z-10"
            objectFit="cover"
            objectPosition="left center"
          ></Image>
        </div>
        <div className="h-full w-full hidden sm:block  md:h-120p lg:h-full xl:w-full absolute right-0 sm:-mt-24 md:-mt-16 lg:mt-0  md:-mr-36 lg:-mr-20 xl:-mr-24 2xl:-mr-36">
          <Image
            src="/banner-2.png"
            alt="Hero Banner Artist"
            layout="fill"
            objectFit="contain"
            objectPosition="right center"
          ></Image>
        </div>
        <div className="h-full w-full sm:hidden absolute">
          <Image
            src="/banner-2.png"
            alt="Hero Banner Artist Mobile"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          ></Image>
        </div>
        <div
          className="z-20 absolute space-y-4 w-4/5 md:w-3/5 lg:w-2/5 mt-10 sm:mt-0"
          style={{ left: "10%", top: "35%" }}
        >
          <span className="mt-12 sm:mt-0 text-white text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-7xl font-bold block">
            Discover, collect, and sell extraordinary NFTs
          </span>
          <span className=" text-white block ">
            on the world’s first & largest NFT marketplace
          </span>
          <div className=" flex gap-3 lg:top-86 sm:top-36">
            <button className=" py-2 px-4 2xl:w-64 2xl:text-xl rounded">
              Create
            </button>
          </div>
        </div>
      </div>
      <div className="box-border p-4 shadow-none">
        <div>
          <h2 className="p-3 text-2xl font-extrabold">Trending</h2>

          {<Carousal items={items} isLoading={false} openItem={true} />}
        </div>
      </div>
      <div className="box-border p-4 shadow-none">
        <div>
          <h2 className="p-3 text-2xl font-extrabold">Trending</h2>

          {<Carousal items={items} isLoading={false} openItem={true} />}
        </div>
      </div>
      <div className="box-border p-4 shadow-none">
        <div>
          <h2 className="p-3 text-2xl font-extrabold">Trending</h2>

          {<Carousal items={items} isLoading={false} openItem={true} />}
        </div>
      </div>
    </>
  );
}
