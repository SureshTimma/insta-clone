import React, { useState } from "react";
import logo from "../assets/logo.png";
import { Link, useLocation } from "react-router-dom";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import searchResults from "../Pages/SearchResluts";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchInput, setSearchInput] = useState("");
  let url = `https://apis.ccbp.in/insta-share/posts?search=${searchInput}`;
  const jwtToken = Cookies.get("jwt_token");

  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${jwtToken}`,
    },
  };

  let logOut = () => {
    // console.log("Logout clicked");
    Cookies.remove("jwt_token");
    navigate("/");
  };

  let searchPosts = async () => {
    const responce = await fetch(url, options);
    const details = await responce.json();
    console.log(details);
    // console.log(url);
    // navigate("/SearchResults", { state: { postData: details.posts } });
  };

  // const search = (e) => {
  //   console.log(e.target.value);
  // };

  const handleSearch = (e) => {
    if (e.key === "Enter") {
      setSearchInput(e.target.value);
      console.log(searchInput);
      searchPosts();
    }
  };

  return (
    <nav className="flex items-center justify-between px-[12vw] py-3 mb-5 bg-white shadow">
      <div className="flex items-center space-x-2">
        <img src={logo} alt="Logo" className="h-10 w-18" />
        <h1 className="text-xl font-semibold text-gray-800">Insta Share</h1>
      </div>

      <div className="flex items-center border border-gray-400 rounded-md px-2 py-1.5">
        <input type="text" placeholder="Search Post" className="outline-none text-sm text-gray-600 w-64" onKeyDown={handleSearch} />
        <button className="text-gray-500">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="h-5 w-5">
            <path d="M10 2a8 8 0 105.293 14.293l4.707 4.707 1.414-1.414-4.707-4.707A8 8 0 0010 2zm0 2a6 6 0 110 12 6 6 0 010-12z" />
          </svg>
        </button>
      </div>

      <div className="flex items-center space-x-6">
        <Link to="/Home" className={`${location.pathname === "/Home" ? "text-blue-500 font-semibold" : "text-gray-800"} "font-medium"`}>
          Home
        </Link>
        <Link to="/UserProfile" className={`${location.pathname === "/UserProfile" ? "text-blue-500 font-semibold" : "text-gray-800"} "font-medium"`}>
          Profile
        </Link>
        <button className="bg-blue-500 text-white px-4 py-1.5 rounded-md hover:bg-blue-600" onClick={logOut}>
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
