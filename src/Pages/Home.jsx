import React from "react";
import Posts from "./Posts";
import Navbar from "../Components/Navbar";
import Stories from "./Stories";

const home = () => {
  return (
    <div>
      <Navbar />
      <Stories />

      <Posts />
    </div>
  );
};

export default home;
