import React, { use, useEffect, useState } from "react";
import Cookies from "js-cookie";
import Post from "../Components/Post";
import Sidebar from "../Components/Sidebar";
// import { useNavigate } from "react-router-dom";
// import { ClipLoader } from "react-spinners";

const Posts = () => {
  const [postDetails, setPostDetails] = useState([]);
  const [loading, setLoading] = useState(true);
  const jwtToken = Cookies.get("jwt_token");
  // console.log(jwtToken);
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
    const details = await response.json();
    console.log(details);
    setPostDetails(details.posts);
    console.log(postDetails);
    // setLoading(false);
  };

  useEffect(() => {
    data();
  }, []);

  // if (loading) {
  //   return (
  //     <div className="flex justify-center items-center h-screen">
  //       <ClipLoader size={150} aria-label="Loading Spinner" data-testid="loader" />;
  //     </div>
  //   );
  // }

  // return postDetails.length ? postDetails.map((i) => <Post key={i.post_id} postData={i} />) : <p>no posts to display</p>;

  return (
    <div className="flex justify-center px-[12vw] mt-5">
      <div className="flex flex-col w-[60%] ">
        {postDetails.map((i) => (
          <Post key={i.post_id} postData={i} />
        ))}
      </div>

      <div className="ml-10">
        <Sidebar />
      </div>
    </div>
  );
};

export default Posts;
