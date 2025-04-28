import React, { useEffect } from "react";
import Posts from "./Posts";
import Navbar from "../Components/Navbar";
import Stories from "./Stories";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const home = () => {
  const jwtToken = Cookies.get("jwt_token");
  const navigate = useNavigate();

  useEffect(() => {
    if (!jwtToken) {
      navigate("/");
    }
  }, [jwtToken]);

  return (
    <div>
      <Navbar />
      <Stories />

      <Posts />
    </div>
  );
};

export default home;
