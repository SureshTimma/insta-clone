import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import Profile from "../Components/Profile";

const UserProfile = () => {
  const url = "/api/insta-share/my-profile";
  const jwtToken = Cookies.get("jwt_token");
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

  return <Profile myProfile={profileDetails} />;
};

export default UserProfile;
