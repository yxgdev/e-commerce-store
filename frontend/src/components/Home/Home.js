import React from "react";
import Annoucement from "../Annoucement/Annoucement";
import Categories from "../Categories/Categories";
import Navbar from "../Navbar/Navbar";
import Slider from "../Slider/Slider";

const Home = () => {
  return (
    <>
      <Annoucement></Annoucement>
      <Navbar> </Navbar>
      <Slider />
      <Categories />
    </>
  );
};

export default Home;
