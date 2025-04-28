import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import Posts from "./Pages/Posts";
import Stories from "./Pages/Stories";
import Post from "./Components/Post";
import UserProfile from "./Pages/userProfile";
import SearchResluts from "./Pages/SearchResluts";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/UserProfile" element={<UserProfile />} />
          <Route path="/SearchResults" element={<SearchResluts />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
