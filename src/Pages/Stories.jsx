import React, { use, useEffect, useState } from "react";
import Cookies from "js-cookie";
import Story from "../Components/Story";

const Stories = () => {
  const [storyDetails, setStoryDetails] = useState([]);
  const jwtToken = Cookies.get("jwt_token");
  // console.log(jwtToken);
  const url = "/api/insta-share/stories";
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${jwtToken}`,
    },
  };

  let data = async () => {
    const response = await fetch(url, options);
    const details = await response.json();
    // console.log(details);
    setStoryDetails(details.users_stories);
    // console.log(storyDetails);
  };

  useEffect(() => {
    data();
  }, []);

  return (
    <div className="flex">
      {storyDetails.map((i) => (
        <Story key={i.user_id} postData={i} />
      ))}
    </div>
  );
};

export default Stories;
