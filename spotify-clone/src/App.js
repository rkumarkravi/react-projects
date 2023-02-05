import "./App.css";
import { createContext } from "react";
import Sidebar from "./comps/sidebar/Sidebar";
import Navbar from "./comps/navbar/Navbar";
import TopBody from "./comps/body/topbody/TopBody";
import Control from "./comps/control/Control";
import { useRoutes } from "react-router-dom";
import Search from "./comps/pages/Search/Search";
import { Alert, Snackbar } from "@mui/material";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { snackBarAction } from "./redux-conf/slices/generalSlice";
import AlbumView from "./comps/pages/album-view/AlbumView";
export const UserContext = createContext();
function App() {
  const state = useSelector((state) => state.state);
  const playerState = useSelector((state) => state.player);
  const dispatch = useDispatch();
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    dispatch(snackBarAction(false));
  };
  let routes = [
    {
      path: "/",
      element: <TopBody />,
    },
    {
      path: "/search",
      element: <Search />,
    },
    {
      path: "/album",
      element: <AlbumView />,
    },
  ];
  let element = useRoutes(routes);
  return (
    <>
      <div className="app">
        <div className="main" style={{gridTemplateRows:playerState.mp.src?"96.5% auto":"110%"}}>
          <Sidebar />
          <div className="app__nav-body">
            <Navbar />
            {element}
          </div>
        </div>

        <Control />
      </div>
      <Snackbar
        open={state.errorMsg.show}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <Alert
          onClose={handleClose}
          severity={state.errorMsg.severity}
          sx={{ width: "100%" }}
        >
          {state.errorMsg.message}
        </Alert>
      </Snackbar>
    </>
  );
}

export default App;
