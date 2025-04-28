import React, { use, useEffect, useState } from "react";
import Cookies from "js-cookie";
import Post from "../Components/Post";
import Sidebar from "../Components/Sidebar";
// import { ClipLoader } from "react-spinners";

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

  const suggestions = [
    { username: "niat.studentgeneral...", name: "Followed by katkurimaruthvik..." },
    { username: "dornala_amrutha", name: "Followed by venu._gopal..." },
    { username: "madhav_7_198", name: "Followed by venu._gopal..." },
    { username: "_vivek_reddi__", name: "Followed by venu._gopal..." },
    { username: "_xai_77x", name: "Followed by venu._gopal..." },
  ];

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
    <div className="flex pr-[12vw] mt-5">
      <div className="flex flex-wrap pl-[12vw] w-full">
        {postDetails.map((i) => (
          <Post key={i.post_id} postData={i} />
        ))}
      </div>
      <Sidebar />
    </div>
  );
};

export default Posts;
