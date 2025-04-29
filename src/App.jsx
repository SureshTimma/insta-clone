import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import UserProfile from "./Pages/userProfile";
import SearchResluts from "./Pages/SearchResluts";
import PageNotFound from "./Pages/PageNotFound";
import SearchProfile from "./Pages/SearchProfile";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/UserProfile" element={<UserProfile />} />
          <Route path="/SearchResults" element={<SearchResluts />} />
          <Route path="/SearchProfile" element={<SearchProfile />} />
          <Route path="/*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
