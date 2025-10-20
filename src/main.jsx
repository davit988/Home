import { BrowserRouter } from "react-router-dom";
import { users ,posts,comments} from "./Data/Data.js";


import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App users={users} posts={posts} comments={comments}/>
  </BrowserRouter>
);
