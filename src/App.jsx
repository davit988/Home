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

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />

          <Route path="/Users" element={<Users/>} />
          <Route path="/Users/:id" element={<Use/>} />

          <Route path="/Posts" element={<Posts  />} />
          <Route path="/Posts/:id" element={<Pos  />} />

          <Route path="/Comments" element={<Comments  />} />
          <Route path="*" element={<NotFound />} />
          
        </Route>
      </Routes>
    </>
  );
}

export default App;
