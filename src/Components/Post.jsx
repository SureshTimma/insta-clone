import React from "react";
import { FaHeart, FaComment, FaShare } from "react-icons/fa";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const Post = (props) => {
  let { postData } = props;
  let { profile_pic, user_name, user_id, post_details, likes_count, created_at, comments } = postData;

  let jwtToken = Cookies.get("jwt_token");
  let url = `https://apis.ccbp.in/insta-share/users/${user_id}`;
  let options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${jwtToken}`,
    },
  };

  const navigate = useNavigate();
  const openProfile = async () => {
    // Logic to open the user's profile
    console.log(`Opening profile of ${user_id}`);
    let response = await fetch(url, options);
    let userDetails = await response.json();
    // console.log(userDetails);
    navigate("/SearchProfile", { state: { userData: userDetails } });
  };

  return (
    <div className="flex flex-col w-full h-auto p-4 bg-gray-50 rounded-lg shadow-md mb-6">
      <div className="bg-white flex items-center p-2">
        <img src={profile_pic} className="h-12 w-12 rounded-full border border-gray-300 mr-3" alt="Profile" />
        <h1 className="font-semibold text-gray-800 text-lg cursor-pointer" onClick={openProfile}>
          {user_name}
        </h1>
      </div>
      <div className="">
        <img src={post_details.image_url} className="w-full rounded-lg" alt="Post" />
      </div>
      <div className="p-4">
        <div className="flex space-x-4 text-gray-600">
          <FaHeart className="text-red-500 cursor-pointer text-xl" />
          <FaComment className="cursor-pointer text-xl" />
          <FaShare className="cursor-pointer text-xl" />
        </div>
        <p className="font-semibold text-gray-800 mt-2 text-lg">{likes_count} likes</p>
        <p className="text-gray-800 text-base">{post_details.caption}</p>
        {comments.map((comment, index) => (
          <p key={index} className="text-gray-600 text-sm">
            <span className="font-semibold text-gray-800">{comment.user_name}</span> {comment.comment}
          </p>
        ))}
        <p className="text-gray-500 text-sm mt-2">{created_at}</p>
      </div>
    </div>
  );
};

export default Post;
