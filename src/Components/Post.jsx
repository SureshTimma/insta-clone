import React from "react";

const Post = (props) => {
  let { postData } = props;
  let {
    profile_pic,
    user_name,
    post_details,
    likes_count,
    created_at,
    comments,
  } = postData;

  return (
    <div className="flex flex-col w-full h-screen">
      <div className="bg-white flex">
        <img
          src={profile_pic}
          className="h-10 w-10 rounded-full border border-gray-300"
        />
        <h1 className="font-semibold text-gray-800">{user_name}</h1>
      </div>
      <div>
        <img src={post_details.image_url} />
      </div>
      <div>
        <p>{likes_count} likes</p>
        <p>{post_details.caption} likes</p>
        <p>
          {comments[0].user_name} {comments[0].comment}
        </p>
        <p>
          {comments[1].user_name} {comments[1].comment}
        </p>
        <p>{created_at} likes</p>
      </div>
    </div>
  );
};

export default Post;
