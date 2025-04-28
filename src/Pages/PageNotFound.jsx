import React from "react";
import { useNavigate } from "react-router-dom";
import PageNotFoundImage from "../assets/page-not-found.png"; // Replace with your actual image path

const PageNotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <img
        src={PageNotFoundImage} // Replace with your actual image URL
        alt="Page Not Found"
        className="w-40 h-40 mb-6"
      />
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Page Not Found</h1>
      <p className="text-gray-600 text-center mb-6">
        We are sorry, the page you requested could not be found. <br />
        Please go back to the homepage.
      </p>
      <button onClick={() => navigate("/")} className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600">
        Home Page
      </button>
    </div>
  );
};

export default PageNotFound;
