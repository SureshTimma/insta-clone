import React from "react";

const Profile = (props) => {
  let { myProfile } = props;
  const { user_name, profile_pic, posts_count, following_count, followers_count, user_bio, user_id } = myProfile;
  console.log(myProfile);
  //   console.log(user_name);
  return (
    <div className="flex items-center space-x-8 p-6 bg-white">
      <div>
        <img src={profile_pic} alt="Profile" className="h-32 w-32 rounded-full border-2 border-gray-300" />
      </div>

      {/* User Details */}
      <div>
        <h1 className="text-2xl font-semibold text-gray-800">{user_name}</h1>
        <div className="flex space-x-6 mt-2 text-gray-600">
          <p>
            <span className="font-semibold text-gray-800">{posts_count}</span> posts
          </p>
          <p>
            <span className="font-semibold text-gray-800">{followers_count}</span> followers
          </p>
          <p>
            <span className="font-semibold text-gray-800">{following_count}</span> following
          </p>
        </div>
        <p className="mt-4 font-medium text-gray-800">{user_id}</p>
        <p className="text-gray-600">{user_bio}</p>
      </div>
    </div>
  );
};

export default Profile;
