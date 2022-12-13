import React from "react";
import BestCollection from "./BestCollection/BestCollection";
import BestSelling from "./BestSelling/BestSelling";
import MainBanner from "./MainBanner/MainBanner";
import TrendingProduct from "./TrendingProduct/TrendingProduct";

const HomePage = () => {
  return (
    <>
      <MainBanner />
      <TrendingProduct />
      <BestSelling />
      <BestCollection />
    </>
  );
};

export default HomePage;
