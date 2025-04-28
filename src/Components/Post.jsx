import React from "react";
import { FaHeart, FaComment, FaShare } from "react-icons/fa";

const Post = (props) => {
  let { postData } = props;
  let { profile_pic, user_name, post_details, likes_count, created_at, comments } = postData;

  return (
    <div className="flex flex-col w-full h-screen">
      <div className="bg-white flex">
        <img src={profile_pic} className="h-10 w-10 rounded-full border border-gray-300" />
        <h1 className="font-semibold text-gray-800">{user_name}</h1>
      </div>
      <div>
        <img src={post_details.image_url} />
      </div>
      <div className="p-4">
        <div className="flex space-x-4 text-gray-600">
          <FaHeart className="text-red-500 cursor-pointer" />
          <FaComment className="cursor-pointer" />
          <FaShare className="cursor-pointer" />
        </div>
        <p className="font-semibold text-gray-800 mt-2">{likes_count} likes</p>
        <p className="text-gray-800">{post_details.caption}</p>
        <p className="text-gray-600">
          <span className="font-semibold text-gray-800">{comments[0].user_name}</span> {comments[0].comment}
        </p>
        <p className="text-gray-600">
          <span className="font-semibold text-gray-800">{comments[1].user_name}</span> {comments[1].comment}
        </p>
        <p className="text-gray-500 text-sm mt-2">{created_at}</p>
      </div>
    </div>
  );
};

export default Post;
