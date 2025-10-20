import { Route, Routes } from "react-router-dom";
import Nav from "./Components/Nav/Nav";
import Posts from "./Components/Posts/Posts";
import Comments from "./Components/Comments/Comments";
import Users from "./Components/Users/Users";
import NotFound from "./Components/NotFound/NotFound";
import Home from "./Components/Home/Home";

import "./App.css";

function App({ users, posts, comments }) {
  return (
    <>
    <Nav/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="Users" element={<Users users={users} />} />
        <Route path="Posts" element={<Posts posts={posts} />} />
        <Route path="Comments" element={<Comments comments={comments} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
