import React from "react";
import { BG_URL_2 } from "../utils/constants";

const LoggedInApp = () => {
  const backgroundStyles = {
    backgroundImage: `url(${BG_URL_2})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  return (
    <div
      style={backgroundStyles}
      className="h-screen w-screen flex justify-center items-center text-4xl font-bold text-white underline"
    >
      You are logged into the app
    </div>
  );
};

export default LoggedInApp;
