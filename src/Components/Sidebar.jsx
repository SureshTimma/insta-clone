import React from "react";
import ElonMusk from "../assets/elonmusk.png";
import SteveJobs from "../assets/stevejobs.png";
import SunderPichai from "../assets/sunderpichai.png";

const Sidebar = () => {
  const suggestions = [
    { username: "elonmusk", name: "Followed by techleaders...", image: ElonMusk },
    { username: "stevejobs", name: "Followed by innovationhub...", image: SteveJobs },
    { username: "sundarpichai", name: "Followed by siliconvalleyinsights...", image: SunderPichai },
  ];

  return (
    <div className=" p-4 bg-white text-black h-screen">
      <div>
        <div className="flex justify-between items-center mb-4">
          <p className="text-gray-600 font-semibold">Suggested for you</p>
        </div>
        {suggestions.map((suggestion, index) => (
          <div key={index} className="flex items-center mb-4">
            <img src={suggestion.image} alt="Suggestion Avatar" className="w-10 h-10 rounded-full fill object-cover" />
            <div className="ml-4">
              <p className="font-bold text-sm">{suggestion.username}</p>
              <p className="text-xs text-gray-600">{suggestion.name}</p>
            </div>
            <button className="ml-auto text-blue-500 text-sm font-semibold">Follow</button>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="mt-6 text-xs text-gray-500">
        <p>About · Help · Press · API · Jobs · Privacy · Terms</p>
        <p>Locations · Language · Meta Verified</p>
        <p className="mt-4">© 2025 INSTAGRAM FROM META</p>
      </div>
    </div>
  );
};

export default Sidebar;
