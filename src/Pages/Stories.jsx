import React, { use, useEffect } from "react";
import Cookies from "js-cookie";

const Stories = () => {
  const jwtToken = Cookies.get("jwt_token");
  console.log(jwtToken);
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
    const data = await response.json();
    console.log(data);
  };

  useEffect(() => {
    data();
  });

  return <div>hello posts</div>;
};

export default Stories;
