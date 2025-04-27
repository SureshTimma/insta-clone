import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import Home from "./Pages/Home";
import Posts from "./Pages/Posts";
import Stories from "./Pages/Stories";
import Post from "./Components/Post";
import UserProfile from "./Pages/userProfile";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Posts" element={<Posts />} />
          <Route path="/Stories" element={<Stories />} />
          <Route path="/Post" element={<Post />} />
          <Route path="/UserProfile" element={<UserProfile />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
