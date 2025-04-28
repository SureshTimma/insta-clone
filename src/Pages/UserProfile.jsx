import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import Profile from "../Components/Profile";
import Navbar from "../Components/Navbar";
import { useNavigate } from "react-router-dom";

const UserProfile = () => {
  const url = "/api/insta-share/my-profile";
  const jwtToken = Cookies.get("jwt_token");
  const navigate = useNavigate();

  useEffect(() => {
    if (!jwtToken) {
      navigate("/");
    }
  }, [jwtToken]);

  const [profileDetails, setProfileDetails] = useState({});
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${jwtToken}`,
    },
  };

  let data = async () => {
    const responce = await fetch(url, options);
    const details = await responce.json();
    // console.log(typeof details, details);
    setProfileDetails(details.profile);
  };

  useEffect(() => {
    data();
  }, []);

  return (
    <div>
      <Navbar />
      <Profile myProfile={profileDetails} />;
    </div>
  );
};

export default UserProfile;
