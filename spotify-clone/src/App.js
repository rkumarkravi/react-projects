import "./App.css";
import {createContext,useState} from "react";
import Sidebar from "./comps/sidebar/Sidebar";
import Navbar from "./comps/navbar/Navbar";
import TopBody from "./comps/body/topbody/TopBody";
import Control from "./comps/control/Control";
import { Outlet, Link, useRoutes, useParams } from "react-router-dom";
import Search from "./comps/pages/Search/Search";
export const UserContext = createContext();
function App() {
  let routes = [
    {
      path: "/",
      element: <TopBody />,
      // children: [
      //   { index: true, element: <Home /> },
      //   {
      //     path: "/courses",
      //     element: <Courses />,
      //     children: [
      //       { index: true, element: <CoursesIndex /> },
      //       { path: "/courses/:id", element: <Course /> }
      //     ]
      //   },
      //   { path: "*", element: <NoMatch /> }
      // ]
    },
    {
      path: "/search",
      element: <Search />,
    },
  ];
  let element = useRoutes(routes);
  const [user, setUser] = useState("");
  return (
    <UserContext.Provider value={[user, setUser]}>
      <div className="app">
        <Sidebar />
        <div className="app__nav-body">
          <Navbar />
          {element}
        </div>
      </div>
      <Control />
    </UserContext.Provider>
  );
}

export default App;
