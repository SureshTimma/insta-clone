import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../Components/Navbar";

const SearchProfile = () => {
  const location = useLocation();
  const { userData } = location.state || {};
  console.log(userData);
  const { user_name, profile_pic, posts_count, following_count, followers_count, user_bio, user_id, stories, posts } = userData.user_details;
  console.log(user_name);

  return (
    <>
      <Navbar />
      <div className="px-[12vw]">
        <div className="flex items-center space-x-8 p-6 bg-white">
          <div>
            <img src={profile_pic} alt="Profile" className="h-32 w-32 rounded-full border-2 border-gray-300 " />
          </div>

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

        <div className="flex space-x-6 overflow-x-auto p-4 bg-white">
          {stories && stories.length > 0 ? (
            stories.map((i) => (
              <div key={i.id} className="flex flex-col items-center">
                <img
                  src={i.image} // Replace with the actual image URL
                  alt="Highlight"
                  className="h-20 w-20 rounded-full border-2 border-gray-300"
                />
              </div>
            ))
          ) : (
            <p className="text-gray-500">No highlights available</p>
          )}
        </div>

        <div className="p-4 bg-white">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Posts</h2>
          {posts && posts.length > 0 ? (
            <div className="grid grid-cols-3 gap-4">
              {posts.map((i) => (
                <div key={i.id} className="relative">
                  <img
                    src={i.image} // Replace with the actual image URL
                    alt="Post"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500">No posts available</p>
          )}
        </div>
      </div>
    </>
  );
};

export default SearchProfile;
