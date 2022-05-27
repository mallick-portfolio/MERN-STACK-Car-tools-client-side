import React from "react";
import Footer from "../Shared/Footer.jsx";
import Banner from "./Banner.jsx";
import HomeTools from "./HomeTools.jsx";
import Partner from "./Partner.jsx";
import Reviews from "./Reviews.jsx";
import Summary from "./Summary.jsx";

const Home = () => {
  return (
    <div>
      <Banner />
      <Partner />
      <HomeTools />
      <Reviews />
      <Summary />
      <Footer />
    </div>
  );
};

export default Home;
