import React, { useEffect, useState } from "react";
import { FaHeart, FaComment, FaShare } from "react-icons/fa";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const Post = (props) => {
  let { postData } = props;
  let { profile_pic, user_name, user_id, post_details, post_id, likes_count, created_at, comments } = postData;

  let jwtToken = Cookies.get("jwt_token");
  let url = `/api/insta-share/users/${user_id}`;
  let likeUrl = `/api/insta-share/posts/${post_id}/like`;
  const [likeStatus, setLikeStatus] = useState(false);
  const [likesCount, setLikesCount] = useState(likes_count);

  let options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${jwtToken}`,
    },
  };

  let likeOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${jwtToken}`,
    },
    body: JSON.stringify({ like_status: true }),
  };

  const navigate = useNavigate();
  const openProfile = async () => {
    // Logic to open the user's profile
    // console.log(`Opening profile of ${user_id}`);
    let response = await fetch(url, options);
    let userDetails = await response.json();
    // console.log(userDetails);
    navigate("/SearchProfile", { state: { userData: userDetails } });
  };

  useEffect(() => console.log("hello"), [likeStatus]);

  const handleLike = async () => {
    if (!likeStatus) {
      setLikeStatus(true);
      setLikesCount(likesCount + 1); // Increment the likes count
      try {
        let response = await fetch(likeUrl, likeOptions);
        let likeResponse = await response.json();
        console.log(likeResponse);
      } catch (error) {
        console.error("Error liking the post:", error);
      }
    }
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
          {likeStatus ? <FaHeart className="text-red-500 cursor-pointer text-xl" onClick={handleLike} /> : <FaHeart className="text-gray-500 cursor-pointer text-xl" onClick={handleLike} />}
          <FaComment className="cursor-pointer text-xl" />
          <FaShare className="cursor-pointer text-xl" />
        </div>
        <p className="font-semibold text-gray-800 mt-2 text-lg">{likesCount} likes</p> <p className="text-gray-800 text-base">{post_details.caption}</p>
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
