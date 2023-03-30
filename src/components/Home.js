import React from "react";
import Box from "@mui/material/Box";
import Nav from "./Nav";

const Home = () => {
  return (
    <>
      <Box className="home-wrapper">
        <img
          width={"100%"}
          height={"100vh"}
          className="overflow-hidden relative"
          src="https://s3-alpha-sig.figma.com/img/2755/8ada/aa349392d9dc56be21a1c950bb7002ad?Expires=1680480000&Signature=aLKzkzlQRHGsF6CzbrW7LC91EVbADs3lXJYztnqQvI7jdqI4lrMbN8awnZhNAdxdsQynGOmrIZq2auQEqmSOUM7TDUBFMxnEgWjoMkAQ3opACFaHQe0WPwPXTG37-3vvhKrhW95Ltj-8AL7nYUs8QPO-xplAIxNNu~akC6Yx-sBv0A73zYJ6joBBp9YxZFW5~V5mvpGVdimddeaFPuFGRsXlGrZBoGTY1Uq11TnWAVjEP6zA0q22a9h77XyvzX4bq1R~hTwy~2PQEFKAgKTXD-31POhNlT3Go5WsMfkZ5qcHIQR9jPJqHAStkBALU0VyP3gOgSDnliEiuYNXDe0hJA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
        />
        <Box className="extensive-container p-8 text-left absolute inset-y-1/3 w-1/2 text-6xl">
          <h1>
            We are
            <br /> <span className="text-red-600">Extensive</span>
          </h1>
          <p className="text-2xl">Helping you stand out in a crowded market</p>
        </Box>
      </Box>
    </>
  );
};
export default Home;
