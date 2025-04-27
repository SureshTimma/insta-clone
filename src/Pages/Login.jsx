import React, { useState } from "react";
import logo from "../assets/logo.png";
import illustration from "../assets/illustration.png";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const Login = () => {
  // const defaultUserName = "SureshTimma";
  // const defaultPassword = "123";
  const navigate = useNavigate();

  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [warning, setWarning] = useState("");

  const loginHandle = async (e) => {
    e.preventDefault();
    console.log(username, password);

    let userDetails = {
      username,
      password,
    };

    console.log(userDetails);

    const url = "/api/login";
    const options = {
      method: "POST",
      body: JSON.stringify(userDetails),
      headers: {
        "Content-Type": "application/json", // Ensure proper headers are set
      },
    };

    try {
      const response = await fetch(url, options);
      const data = await response.json();

      if (response.ok) {
        // Handle success
        console.log("Login successful:", data.jwt_token);
        Cookies.set("jwt_token", data.jwt_token, { expires: 1 }); // Set the JWT token in cookies
        navigate("/home"); // Navigate to the home page or another route
      } else {
        // Handle failure
        setWarning(data.error_msg || "Login failed. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      setWarning("Something went wrong. Please try again later.");
    }
  };

  return (
    <div>
      <div className="flex">
        <div className="w-[60vw] h-screen flex justify-center items-center">
          <img src={illustration} />
        </div>
        <div className=" w-[40vw] h-screen flex flex-col justify-center items-center">
          <div className="flex flex-col items-center">
            <img src={logo} />
            <h1 className="text-xl font-semibold">Insta Share</h1>
          </div>

          <form className="bg-white p-8 rounded shadow-md w-[80%]" onSubmit={loginHandle}>
            <div className="flex flex-col mb-4">
              <label htmlFor="username" className="mb-2 text-gray-700 font-semibold">
                Username
              </label>
              <input
                type="text"
                id="username"
                className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your username"
                onChange={(e) => {
                  setUserName(e.target.value);
                }}
              />
            </div>
            <div className="flex flex-col mb-6">
              <label htmlFor="password" className="mb-2 text-gray-700 font-semibold">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
            <div>
              <p className="text-red-600">{warning}</p>
            </div>
            <button type="submit" className="bg-blue-400 text-white font-semibold py-2 px-4 rounded hover:bg-blue-500 w-full">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
