import React from "react";
import Box from "@mui/material/Box";
import { Typography, Button } from "@mui/material";

const WhatWeDo = () => {
  return (
    <>
      <Box className="what-we-do-wrapper text-left p-8 mt-8">
        <Typography className="text-left">WHO WE ARE</Typography>
        <br />
        <br />
        <Box className="extensive-container text-left inset-y-1/3 text-6xl">
          <h1 className="">
            We are <br /> Extensive.
          </h1>
          <Typography className="w-full font-src">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </Typography>
        </Box>
        <button className="text-base bg-[#301E4E] rounded text-white p-2 mt-14 mb-28 font-src">
          BOOK A FREE MARKETING AUDIT{" "}
        </button>
        <Box className="flex items-baseline justify-between w-full">
          <Box className="extensive-container w-1/2 wht-we-do-container relative mt-32 text-left inset-y-1/3 text-6xl">
            <svg
              width="400"
              height="500"
              viewBox="0 0 636 676"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute blob-svg"
            >
              <path
                d="M636 482C636 639.677 347.5 746.252 1.5 619.5C-190.143 619.5 -110.5 431.429 -110.5 273.752C-110.5 116.075 120.857 0 312.5 0C504.143 0 636 324.323 636 482Z"
                fill="#E7D7F6"
              />
            </svg>
            <Box className="absolute">
              <h1>
                WHAT <br />
                WE DO.
              </h1>
              <Typography>
                We do lots of stuffs , basically <br />
                adding value to your product .
              </Typography>
            </Box>
          </Box>
          <Box className="text-5xl">
            <p>Digital Marketing </p>
            <br />
            <p>Digital Marketing </p>
            <br />
            <p>Digital Marketing </p>
            <br />
            <p>Digital Marketing </p>
            <button className="text-base bg-[#301E4E] rounded text-white px-2 py-1 mb-28 font-src">
              View all
            </button>
          </Box>
        </Box>
      </Box>
    </>
  );
};
export default WhatWeDo;
