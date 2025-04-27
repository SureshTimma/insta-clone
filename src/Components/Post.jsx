import React from "react";

const Post = (props) => {
  let { postData } = props;
  let { profile_pic, user_name } = postData;

  return (
    <div>
      <div className="bg-white">
        {profile_pic} {user_name}
      </div>
    </div>
  );
};

export default Post;
