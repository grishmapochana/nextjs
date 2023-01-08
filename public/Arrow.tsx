import React from "react";

export default function Arrow(props: any) {
  console.log({ props });
  return (
    <svg
      width="22"
      height="24"
      viewBox="0 0 22 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_10469_49150)">
        <path
          d="M10.7939 6.1875L10.7939 17.4375"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M6.27575 10.7246L10.7937 6.18711L15.3125 10.7246"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_10469_49150"
          x="0.275391"
          y="0.1875"
          width="21.0371"
          height="23.25"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="2.5" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0.52 0 0 0 0 1 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_10469_49150"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_10469_49150"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}
