import React, { use, useEffect, useState } from "react";
import Cookies from "js-cookie";
import Post from "../Components/Post";
import { ClipLoader } from "react-spinners";

const Posts = () => {
  const [postDetails, setPostDetails] = useState([]);
  const [loading, setLoading] = useState(true);
  const jwtToken = Cookies.get("jwt_token");
  console.log(jwtToken);
  const url = "/api/insta-share/posts";
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${jwtToken}`,
    },
  };

  let data = async () => {
    const response = await fetch(url, options);
    const Details = await response.json();
    console.log(Details);
    setPostDetails(Details.posts);
    setLoading(false);
  };

  useEffect(() => {
    data();
  }, []);

  if (loading) {
    return (
      <div
        className="
    flex justify-center items-center h-screen"
      >
        <ClipLoader
          size={150}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
        ;
      </div>
    );
    // Show nothing while loading
  }

  return postDetails.length ? (
    postDetails.map((i) => <Post key={i.post_id} postData={i} />)
  ) : (
    <p>no posts to display</p>
  );
};

export default Posts;
