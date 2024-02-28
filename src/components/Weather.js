import React from "react";
import { BG_URL_2 } from "../utils/constants";
import WeatherInfo from "./WeatherInfo";
import Table from "./Table";

const Weather = () => {
  const backgroundStyles = {
    backgroundImage: `url(${BG_URL_2})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  return (
    <div style={backgroundStyles} className="h-screen w-screen flex">
      <WeatherInfo />
      <Table />
    </div>
  );
};

export default Weather;
