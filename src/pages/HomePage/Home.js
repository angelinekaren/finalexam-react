import React from "react";
import HomeSection from "../../components/Home/HomeSection";
import Products from "../../components/Products/Products";
import PromoSection from "../../components/PromoSection/PromoSection";
import AboutUs from "../../components/AboutUs/AboutUs";
import ContactUs from "../../ContactUs/ContactUs";

const Home = () => {
  return (
    <>
      <HomeSection />
      <Products />
      <PromoSection />
      <AboutUs />
      <ContactUs />
    </>
  );
};

export default Home;
