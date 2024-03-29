import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import Home from "../components/Home/Home";
import Profile from "../components/Profile/Profile";
import Post from "../components/Post/Post";
import Posts from "../components/Posts/Posts";
import NewPost from "../components/NewPost/NewPost";
import Vendor from "../components/Vendor/Vendor";
import Login from "../components/Login/Login";
import Logout from "../components/Logout";
import Signup from "../components/Signup";
import PageNotFound from "../components/PageNotFound";

const router = createBrowserRouter([
  { path: "/login", element: <Login /> },
  { path: "/logout", element: <Logout /> },
  { path: "/signup", element: <Signup /> },
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "", element: <Home /> },
      { path: "profile", element: <Profile /> },
      { path: "post/:id", element: <Post /> },
      { path: "posts", element: <Posts /> },
      { path: "new-post", element: <NewPost /> },
      { path: "vendor/:id", element: <Vendor /> },
      //     // { path: "map", element: <Map /> },
      //     // { path: "logs", element: <DriverLogs /> },
      //     // { path: "logs/driver/:id", element: <DriverLog /> },
      //     // { path: "drivers", element: <Drivers /> },
      //     // { path: "trucks", element: <Trucks /> },
    ],
  },
  { path: "*", element: <PageNotFound /> },
]);

export default router;
