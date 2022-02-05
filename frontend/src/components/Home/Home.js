import React from "react";
import Annoucement from "../Annoucement/Annoucement";
import Categories from "../Categories/Categories";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import Newsletter from "../Newsletter.js/Newsletter";
import Products from "../Products/Products";
import Slider from "../Slider/Slider";

const Home = () => {
  return (
    <>
      <Annoucement></Annoucement>
      <Navbar> </Navbar>
      <Slider />
      <Categories />
      <Products />
      <Newsletter />
      <Footer />
    </>
  );
};

export default Home;
