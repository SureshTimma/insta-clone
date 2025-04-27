import React from "react";

const Story = (props) => {
  let { postData } = props;
  let { user_name, story_url } = postData;
  return (
    <div className="flex w-screen overflow-auto">
      <div>
        <img src={story_url} className="h-15 w-15 rounded-full" />
        <h1 className="text-sm">{user_name}</h1>
      </div>
    </div>
  );
};

export default Story;
