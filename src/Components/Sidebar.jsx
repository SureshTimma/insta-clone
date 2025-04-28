import React from "react";

const Sidebar = () => {
  const suggestions = [
    { username: "niat.studentgeneral...", name: "Followed by katkurimaruthvik..." },
    { username: "dornala_amrutha", name: "Followed by venu._gopal..." },
    { username: "madhav_7_198", name: "Followed by venu._gopal..." },
  ];

  return (
    <div className="w-64 p-4 bg-white text-black h-screen">
      <div>
        <div className="flex justify-between items-center mb-4">
          <p className="text-gray-600 font-semibold">Suggested for you</p>
          <button className="text-blue-500 text-sm font-semibold">See All</button>
        </div>
        {suggestions.map((suggestion, index) => (
          <div key={index} className="flex items-center mb-4">
            <img src="https://via.placeholder.com/40" alt="Suggestion Avatar" className="w-10 h-10 rounded-full" />
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
