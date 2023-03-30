import { Typography, Box } from "@mui/material";
import React from "react";
import { Svg1, Svg2, Svg3, Svg4, Svg5 } from "./Svg";
import { styled } from "@mui/material/styles";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";

const OurPartners = () => {
  const svgs = [<Svg1 />, <Svg3 />, <Svg2 />, <Svg4 />, <Svg5 />];
  const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    width: "7rem",
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor:
        theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: theme.palette.mode === "light" ? "#301E4E" : "#308fe8",
    },
  }));
  return (
    <Box className="p-8">
      <Box className="our-work-container  text-left  w-1/2 text-6xl">
        <h1>
          OUR
          <br />
          PARTNERS
        </h1>
        <p className="red-theme-color text-base mt-4 font-src mt-4">
          Your success is our success.
        </p>
      </Box>
      <Box className="flex basis-full w-full justify-around mt-16">
        {svgs.map((item) => {
          return (
            <Box className="flex flex-col items-center justify-between">
              <Box>{item}</Box>
              <p>Pinterest</p>
            </Box>
          );
        })}
      </Box>
      <Box className="flex basis-full w-full justify-around mt-16">
        {svgs.map((item) => {
          return (
            <Box className="flex flex-col items-center justify-between">
              <Box>{item}</Box>
              <p>Pinterest</p>
            </Box>
          );
        })}
      </Box>
      <Box className="our-work-container mt-24 text-left  w-1/2 text-6xl">
        <h1>Testimonials</h1>
        <Box className="w-screen p-2 flex items-center justify-center">
          <Box className="border border-solid border-black w-1/2 m-8 p-4 ">
            <Box className=" flex">
              <img
                src="https://s3-alpha-sig.figma.com/img/eebf/c417/4d4828bf76f6e54e0b85f4bae6f2fcc1?Expires=1681084800&Signature=k9oyap2nQBxWFa28hNB9wedtvvJOpkxDzyiyzoPBYO1ebG8H5zp7XFWi8LpBRwBgSdf9x9U1hVvvsIeFi1mK3vL-3b8wEHiPkgdz21ewx046-dFf-VdNfNeOgY4uXh14236eAiZQVHUagisUXAUdaXBHSqqCRQLpOjFvEjncCFNs45iPgU40F7v5rUq0CHVKLcw~Ob20Af02RvSYZ5~pCPIGAgW-exrAX-W~HQAidI7pG2bLwSo4ac585ZzMlxhUwXexBQBNnNr~reADOk5RvPTq06vwg-57gVK1O8gC452nMOeuv-7Qi7jQ5mDAWT0P5BDpc-z~QOR3q3t17Aq5FA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                width="15%"
                height="15%"
                className="rounded-full"
              />
              <Box className="ml-4">
                <p className="text-3xl">“Working with Extensive is great” </p>
              </Box>
            </Box>

            <Box className="flex items-center mt-4 justify-end">
              <Box className="basis-12 h-0.5 bg-[#000000]" />
              <div className="basis-15 ml-2">
                <p className="text-sm">Hershel</p>
                <p className="red-theme-color text-xs">
                  Head of director <br />
                  GGPL PVT LTD.{" "}
                </p>
              </div>
            </Box>
            <Box className="progresbar mt-8">
              <BorderLinearProgress variant="determinate" value={40} />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default OurPartners;
