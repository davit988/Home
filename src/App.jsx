import { Route, Routes } from "react-router-dom";
import Posts from "./Components/Posts/Posts";
import Comments from "./Components/Comments/Comments";
import Users from "./Components/Users/Users";
import NotFound from "./Components/NotFound/NotFound";
import Home from "./Components/Home/Home";
import { Layout } from "./Components/Layout/Layout";
import Use from "./Components/Users/Use/Use";
import Pos from "./Components/Posts/Pos/Pos";
import "./App.css";

function App({ users, posts, comments }) {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />

          <Route path="/Users" element={<Users users={users} />} />
          <Route path="/Users/:name" element={<Use users={users} />} />

          <Route path="/Posts" element={<Posts posts={posts} />} />
          <Route path="/Posts/:title" element={<Pos posts={posts} />} />

          <Route path="/Comments" element={<Comments comments={comments} />} />
          <Route path="*" element={<NotFound />} />
          
        </Route>
      </Routes>
    </>
  );
}

export default App;
