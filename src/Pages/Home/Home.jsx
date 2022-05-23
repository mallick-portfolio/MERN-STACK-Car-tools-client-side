import React from "react";
import Footer from "../Shared/Footer.jsx";
import Banner from "./Banner.jsx";
import HomeTools from "./HomeTools.jsx";
import Reviews from "./Reviews.jsx";

const Home = () => {
  return (
    <div>
      <Banner />
      <HomeTools />
      <Reviews />
      <Footer />
    </div>
  );
};

export default Home;
