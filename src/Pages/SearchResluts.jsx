import React from "react";
import Navbar from "../Components/Navbar";
import { useLocation } from "react-router-dom";
import { FaHeart, FaComment, FaShare } from "react-icons/fa";

const SearchResluts = () => {
  const location = useLocation();
  const { postData } = location.state || {};
  // console.log(postData);

  return (
    <div>
      <Navbar />
      <div className="flex gap-4 m-4 flex-wrap justify-center">
        {postData.map((i) => {
          let { profile_pic, user_name, post_details, likes_count, created_at, comments } = i;
          return (
            <div className="flex flex-col w-[30%] h-auto p-4 bg-gray-50 rounded-lg shadow-md ">
              <div className="bg-white flex items-center p-2">
                <img src={profile_pic} className="h-12 w-12 rounded-full border border-gray-300 mr-3" alt="Profile" />
                <h1 className="font-semibold text-gray-800 text-lg">{user_name}</h1>
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
        })}
      </div>
    </div>
  );
};

export default SearchResluts;
