import React, { useState } from "react";

const WeatherInfo = () => {
  const [location, setLocation] = useState("");
  return (
    <div className="w-1/2 bg-white bg-opacity-80 rounded-md flex flex-col items-center ">
      <h1 className="text-2xl font-bold text-gray-800">Weather Info</h1>
      <label>Location</label>
    </div>
  );
};

export default WeatherInfo;
