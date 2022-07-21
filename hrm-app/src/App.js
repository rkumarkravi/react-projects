
import './App.css';
import UserDashboard from './modules/user-dashboard/comps/UserDashboard';
import { Outlet, Link, useRoutes, useParams } from "react-router-dom";
import Notfound from './common-modules/NotFound/Notfound';
import NavBar from './common-modules/NavBar/NavBar';
import Footer from './common-modules/Footer/Footer';
import TodoDashboard from './modules/todo-dashboard/TodoDashboard';
function App() {
  let routes = [
    {
      path: "/",
      element: <UserDashboard />,
      default: true
    },{
      path: "/todo-dashboard",
      element: <TodoDashboard />
    },{
      path: "*",
      element: <Notfound />
    }
  ];
  let element = useRoutes(routes);
  return (
    <div className="App">
      <NavBar/>
      {element}
      <Footer/>
    </div>
  );
}

export default App;
