import "./App.css";
import Sidebar from "./comps/sidebar/Sidebar";
import Navbar from "./comps/navbar/Navbar";
import TopBody from "./comps/body/topbody/TopBody";
import Control from "./comps/control/Control";
import { Outlet, Link, useRoutes, useParams } from "react-router-dom";

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
  ];
  let element = useRoutes(routes);
  return (
    <>
      <div className="app">
        <Sidebar />
        <div className="app__nav-body">
          <Navbar />
          {element}
        </div>
      </div>
      <Control />
    </>
  );
}

export default App;
